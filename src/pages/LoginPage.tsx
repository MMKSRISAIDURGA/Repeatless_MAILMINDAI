import { Navigate } from 'react-router-dom';
import { Logo } from '../components/ui/Logo';
import { LoginForm } from '../components/auth/LoginForm';
import { useAuth } from '../context/AuthContext';
import { LoadingScreen } from '../components/layout/LoadingScreen';

export function LoginPage() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-violet-100">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-violet-400/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-indigo-300/10 blur-3xl" />
      </div>

      <div className="relative flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="mb-10 flex flex-col items-center text-center animate-fade-in">
          <Logo size="lg" />
          <h1 className="mt-8 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Welcome back to MailMind AI
          </h1>
          <p className="mt-3 max-w-md text-base text-slate-600">
            Sign in to access your intelligent email assistant.
          </p>
        </div>

        <LoginForm />

        <p className="mt-8 text-center text-xs text-slate-500">
          Demo mode — use any valid email and a password with 6+ characters.
        </p>
      </div>
    </div>
  );
}
