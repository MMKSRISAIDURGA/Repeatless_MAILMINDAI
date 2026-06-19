import { useCallback, useEffect, useRef, useState } from 'react';
import type { ChatMessage } from '../types';
import { sendChatMessage } from '../services/api';
import { generateId } from '../utils/format';

const INITIAL_MESSAGE: ChatMessage = {
  id: 'welcome',
  role: 'assistant',
  content: 'Hello, I am MailMind AI. I can help you manage your emails. How can I assist you today?',
  timestamp: new Date(),
};

export function useChat(userEmail: string) {
  const [messages, setMessages] = useState<ChatMessage[]>([INITIAL_MESSAGE]);
  const [isTyping, setIsTyping] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping, scrollToBottom]);

  const sendMessage = useCallback(
    async (content: string) => {
      const trimmed = content.trim();
      if (!trimmed || isTyping) return;

      setError(null);

      const userMessage: ChatMessage = {
        id: generateId(),
        role: 'user',
        content: trimmed,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);
      setIsTyping(true);

      try {
        const response = await sendChatMessage({
          message: trimmed,
          userEmail,
          timestamp: new Date().toISOString(),
        });

        const assistantMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: response,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
      } catch (err) {
        const apiError = err as { message?: string };
        const errorText = apiError.message ?? 'Failed to get a response. Please try again.';
        setError(errorText);

        const errorMessage: ChatMessage = {
          id: generateId(),
          role: 'assistant',
          content: `⚠️ ${errorText}`,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMessage]);
      } finally {
        setIsTyping(false);
      }
    },
    [isTyping, userEmail],
  );

  return {
    messages,
    isTyping,
    error,
    sendMessage,
    messagesEndRef,
  };
}
