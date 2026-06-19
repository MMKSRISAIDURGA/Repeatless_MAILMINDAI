import type { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={`rounded-2xl border border-white/40 bg-white/40 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  );
}
