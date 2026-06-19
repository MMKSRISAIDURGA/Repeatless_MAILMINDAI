import { Logo } from '../ui/Logo';

export function LoadingScreen() {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100">
      <div className="animate-fade-in flex flex-col items-center gap-6">
        <Logo size="lg" />
        <div className="flex flex-col items-center gap-3">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className="h-2.5 w-2.5 animate-bounce rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                style={{ animationDelay: `${i * 150}ms` }}
              />
            ))}
          </div>
          <p className="text-sm font-medium text-slate-500">Loading your intelligent assistant...</p>
        </div>
      </div>
    </div>
  );
}
