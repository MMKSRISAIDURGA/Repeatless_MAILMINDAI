import axios, { type AxiosError } from 'axios';
import type { ApiError, N8nWebhookPayload, N8nWebhookResponse } from '../types';

const webhookUrl = import.meta.env.VITE_N8N_WEBHOOK_URL;

function extractResponseText(data: N8nWebhookResponse): string {
  if (typeof data.response === 'string' && data.response.trim()) return data.response;
  if (typeof data.message === 'string' && data.message.trim()) return data.message;
  if (typeof data.output === 'string' && data.output.trim()) return data.output;
  if (typeof data.text === 'string' && data.text.trim()) return data.text;

  if (Array.isArray(data)) {
    const first = data[0] as N8nWebhookResponse | undefined;
    if (first) return extractResponseText(first);
  }

  if (typeof data === 'string') return data;

  return 'I received your request but could not parse the response. Please try again.';
}

export async function sendChatMessage(payload: N8nWebhookPayload): Promise<string> {
  if (!webhookUrl || webhookUrl === 'your_webhook_url_here') {
    throw {
      message: 'Webhook URL is not configured. Please set VITE_N8N_WEBHOOK_URL in your .env file.',
    } satisfies ApiError;
  }

  try {
    const { data } = await axios.post<N8nWebhookResponse>(webhookUrl, payload, {
      headers: { 'Content-Type': 'application/json' },
      timeout: 60000,
    });

    return extractResponseText(data);
  } catch (error) {
    const axiosError = error as AxiosError<{ message?: string }>;

    if (axios.isAxiosError(axiosError)) {
      if (axiosError.code === 'ECONNABORTED') {
        throw { message: 'Request timed out. The AI assistant may be busy — please try again.', status: 408 } satisfies ApiError;
      }

      if (axiosError.response) {
        throw {
          message: axiosError.response.data?.message ?? `Server error (${axiosError.response.status}). Please try again.`,
          status: axiosError.response.status,
        } satisfies ApiError;
      }

      if (axiosError.request) {
        throw { message: 'Unable to reach the AI assistant. Check your connection and webhook URL.', status: 0 } satisfies ApiError;
      }
    }

    throw { message: 'An unexpected error occurred. Please try again.' } satisfies ApiError;
  }
}
