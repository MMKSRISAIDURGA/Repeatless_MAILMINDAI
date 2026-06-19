export interface User {
  email: string;
  lastLogin: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  isLoading?: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface N8nWebhookPayload {
  message: string;
  userEmail: string;
  timestamp: string;
}

export interface N8nWebhookResponse {
  response?: string;
  message?: string;
  output?: string;
  text?: string;
  [key: string]: unknown;
}

export interface ApiError {
  message: string;
  status?: number;
}
