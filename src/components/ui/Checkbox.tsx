import type { InputHTMLAttributes, ReactNode } from 'react';

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
}

export function Checkbox({ label, className = '', id, ...props }: CheckboxProps) {
  const checkboxId = id ?? 'checkbox';

  return (
    <label htmlFor={checkboxId} className={`flex cursor-pointer items-center gap-2.5 ${className}`}>
      <input
        id={checkboxId}
        type="checkbox"
        className="h-4 w-4 rounded border-slate-300 text-violet-600 focus:ring-violet-500/30"
        {...props}
      />
      <span className="text-sm text-slate-600">{label}</span>
    </label>
  );
}
