import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Logo } from '../ui/Logo';

interface NavbarProps {
  email: string;
  onLogout: () => void;
}

export function Navbar({ email, onLogout }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/40 bg-white/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <div className="flex items-center gap-3 sm:gap-5">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1.5 sm:flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span className="text-xs font-medium text-emerald-700">AI Assistant Connected</span>
          </div>

          <div className="flex items-center gap-3">
            <Avatar email={email} size="sm" />
            <div className="hidden min-w-0 sm:block">
              <p className="truncate text-sm font-medium text-slate-800">{email}</p>
              <p className="text-xs text-slate-500">Pro Account</p>
            </div>
          </div>

          <Button variant="ghost" onClick={onLogout} className="!px-3 !py-2 text-xs sm:text-sm">
            Logout
          </Button>
        </div>
      </div>
    </header>
  );
}
