import { forwardRef, type InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | null;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className = '', id, ...props }, ref) => {
    const inputId = id ?? label?.toLowerCase().replace(/\s+/g, '-');

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-slate-700">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`w-full rounded-xl border bg-white/60 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30 ${
            error
              ? 'border-red-300 focus:border-red-400'
              : 'border-white/60 focus:border-violet-400'
          } ${className}`}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-xs font-medium text-red-500 animate-fade-in">{error}</p>
        )}
      </div>
    );
  },
);

Input.displayName = 'Input';
