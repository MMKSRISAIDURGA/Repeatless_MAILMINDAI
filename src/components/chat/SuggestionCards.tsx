const SUGGESTIONS = [
  'Show my unread emails.',
  "Summarize today's important emails.",
  'Find emails from Amazon.',
  'Create a professional reply.',
  'Draft a leave request email.',
];

interface SuggestionCardsProps {
  onSelect: (suggestion: string) => void;
  disabled?: boolean;
}

export function SuggestionCards({ onSelect, disabled = false }: SuggestionCardsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {SUGGESTIONS.map((suggestion) => (
        <button
          key={suggestion}
          type="button"
          disabled={disabled}
          onClick={() => onSelect(suggestion)}
          className="rounded-xl border border-violet-200/60 bg-white/60 px-3 py-2 text-left text-xs font-medium text-slate-700 shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-violet-300 hover:bg-violet-50/80 hover:text-violet-800 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
        >
          {suggestion}
        </button>
      ))}
    </div>
  );
}
