import { useState, type FormEvent, type KeyboardEvent } from 'react';
import { SuggestionCards } from './SuggestionCards';

interface ChatInputProps {
  onSend: (message: string) => void;
  disabled?: boolean;
  showSuggestions?: boolean;
}

export function ChatInput({ onSend, disabled = false, showSuggestions = true }: ChatInputProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e?: FormEvent) => {
    e?.preventDefault();
    if (!input.trim() || disabled) return;
    onSend(input);
    setInput('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-white/40 bg-white/40 p-4 backdrop-blur-xl sm:p-5">
      {showSuggestions && (
        <div className="mb-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-slate-500">
            Try asking
          </p>
          <SuggestionCards
            onSelect={(suggestion) => {
              onSend(suggestion);
            }}
            disabled={disabled}
          />
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-end gap-2 rounded-2xl border border-white/60 bg-white/70 p-2 shadow-lg shadow-slate-900/5 backdrop-blur-sm focus-within:border-violet-300 focus-within:ring-2 focus-within:ring-violet-500/20">
          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Attach file"
            title="Attach file (coming soon)"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 2v14m0 0l-4-4m4 4l4-4M5 18h14"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about your emails..."
            rows={1}
            disabled={disabled}
            className="max-h-32 min-h-[44px] flex-1 resize-none bg-transparent px-1 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:opacity-50"
          />

          <button
            type="button"
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
            aria-label="Voice input"
            title="Voice input (coming soon)"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M12 14a3 3 0 003-3V6a3 3 0 10-6 0v5a3 3 0 003 3zm5-2a5 5 0 01-10 0M12 18v3m-4 0h8"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            type="submit"
            disabled={!input.trim() || disabled}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-md shadow-violet-500/25 transition-all hover:from-blue-500 hover:to-violet-500 disabled:cursor-not-allowed disabled:opacity-40"
            aria-label="Send message"
          >
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path
                d="M5 12l14-7-4 7 4 7-14-7z"
                fill="currentColor"
              />
            </svg>
          </button>
        </div>
      </form>
    </div>
  );
}
