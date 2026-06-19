import type { RefObject } from 'react';
import type { ChatMessage as ChatMessageType } from '../../types';
import { ChatMessage } from './ChatMessage';
import { ChatInput } from './ChatInput';

interface ChatWindowProps {
  messages: ChatMessageType[];
  isTyping: boolean;
  onSend: (message: string) => void;
  messagesEndRef: RefObject<HTMLDivElement | null>;
}

export function ChatWindow({ messages, isTyping, onSend, messagesEndRef }: ChatWindowProps) {
  const showSuggestions = messages.length <= 1;

  return (
    <div className="flex h-full min-h-[500px] flex-col overflow-hidden rounded-2xl border border-white/40 bg-white/30 shadow-xl shadow-slate-900/5 backdrop-blur-xl lg:min-h-[calc(100vh-12rem)]">
      <div className="flex items-center gap-3 border-b border-white/40 px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-md">
          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
            <path
              d="M12 2a7 7 0 00-7 7c0 2.5 1.3 4.7 3.2 6L7 20l4.5-1.5A7 7 0 1012 2z"
              fill="currentColor"
            />
          </svg>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-slate-800">MailMind Assistant</h2>
          <p className="text-xs text-slate-500">Powered by AI · Gmail connected</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-3xl flex-col gap-5">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}

          {isTyping && (
            <ChatMessage
              message={{
                id: 'typing',
                role: 'assistant',
                content: '',
                timestamp: new Date(),
              }}
              isTyping
            />
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      <ChatInput onSend={onSend} disabled={isTyping} showSuggestions={showSuggestions} />
    </div>
  );
}
