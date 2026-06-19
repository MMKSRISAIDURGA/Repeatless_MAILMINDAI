interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  light?: boolean;
}

export function Logo({ size = 'md', showText = true, light = false }: LogoProps) {
  const iconSizes = { sm: 'h-8 w-8', md: 'h-10 w-10', lg: 'h-12 w-12' };
  const textSizes = { sm: 'text-lg', md: 'text-xl', lg: 'text-2xl' };

  return (
    <div className="flex items-center gap-3">
      <div
        className={`${iconSizes[size]} flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 shadow-lg shadow-violet-500/30`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-1/2 w-1/2 text-white" aria-hidden="true">
          <path
            d="M4 6h16v12H4V6zm2 2v8h12V8H6zm2 2h8v1.5H8V10zm0 2.5h5V14H8v-1.5z"
            fill="currentColor"
          />
          <circle cx="17" cy="8.5" r="1.5" fill="currentColor" opacity="0.8" />
        </svg>
      </div>
      {showText && (
        <span
          className={`${textSizes[size]} font-bold tracking-tight ${
            light ? 'text-white' : 'bg-gradient-to-r from-blue-700 to-violet-700 bg-clip-text text-transparent'
          }`}
        >
          MailMind AI
        </span>
      )}
    </div>
  );
}
