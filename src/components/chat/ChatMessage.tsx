import type { ChatMessage as ChatMessageType } from '../../types';
import { formatTime } from '../../utils/format';
import { TypingIndicator } from './TypingIndicator';

interface ChatMessageProps {
  message: ChatMessageType;
  isTyping?: boolean;
}

export function ChatMessage({ message, isTyping = false }: ChatMessageProps) {
  const isUser = message.role === 'user';

  if (isUser) {
    return (
      <div className="flex justify-end animate-fade-in">
        <div className="max-w-[85%] sm:max-w-[75%]">
          <div className="rounded-2xl rounded-br-md bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-3 text-sm leading-relaxed text-white shadow-lg shadow-blue-500/20">
            {message.content}
          </div>
          <p className="mt-1.5 text-right text-xs text-slate-400">{formatTime(message.timestamp)}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-3 animate-fade-in">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-md shadow-violet-500/20">
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-white" aria-hidden="true">
          <path
            d="M12 2a7 7 0 00-7 7c0 2.5 1.3 4.7 3.2 6L7 20l4.5-1.5A7 7 0 1012 2z"
            fill="currentColor"
            opacity="0.9"
          />
        </svg>
      </div>
      <div className="max-w-[85%] sm:max-w-[75%]">
        <div className="rounded-2xl rounded-bl-md border border-white/60 bg-white/70 px-4 py-3 text-sm leading-relaxed text-slate-800 shadow-sm backdrop-blur-sm">
          {isTyping ? <TypingIndicator /> : message.content}
        </div>
        {!isTyping && (
          <p className="mt-1.5 text-xs text-slate-400">{formatTime(message.timestamp)}</p>
        )}
      </div>
    </div>
  );
}
