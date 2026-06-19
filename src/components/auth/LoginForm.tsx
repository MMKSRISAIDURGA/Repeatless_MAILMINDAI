import { useState, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { validateEmail, validatePassword } from '../../utils/validation';
import { Button } from '../ui/Button';
import { Checkbox } from '../ui/Checkbox';
import { GlassCard } from '../ui/GlassCard';
import { Input } from '../ui/Input';

export function LoginForm() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormError(null);

    const emailValidation = validateEmail(email);
    const passwordValidation = validatePassword(password);
    setEmailError(emailValidation);
    setPasswordError(passwordValidation);

    if (emailValidation || passwordValidation) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 600));

    const result = login({ email, password, rememberMe });

    if (result.success) {
      navigate('/dashboard', { replace: true });
    } else {
      setFormError(result.error);
    }

    setIsSubmitting(false);
  };

  return (
    <GlassCard className="w-full max-w-md animate-slide-up">
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <Input
            label="Email Address"
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (emailError) setEmailError(null);
            }}
            error={emailError}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
            Password
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (passwordError) setPasswordError(null);
              }}
              autoComplete="current-password"
              className={`w-full rounded-xl border bg-white/60 px-4 py-3 pr-12 text-sm text-slate-900 placeholder:text-slate-400 backdrop-blur-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-violet-500/30 ${
                passwordError
                  ? 'border-red-300 focus:border-red-400'
                  : 'border-white/60 focus:border-violet-400'
              }`}
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-lg p-1 text-slate-400 transition-colors hover:text-slate-600"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M3 3l18 18M10.5 10.7a2 2 0 002.8 2.8M6.7 6.8C4.6 8.3 3 10.5 3 12s3 7 9 7c1.5 0 2.9-.4 4.1-1M9.9 5.1A9.7 9.7 0 0112 5c6 0 9 7 9 7a16.4 16.4 0 01-4.2 5.1"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                  <path
                    d="M2 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              )}
            </button>
          </div>
          {passwordError && (
            <p className="mt-1.5 text-xs font-medium text-red-500 animate-fade-in">{passwordError}</p>
          )}
        </div>

        <div className="flex items-center justify-between">
          <Checkbox
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />
          <button
            type="button"
            className="text-sm font-medium text-violet-600 transition-colors hover:text-violet-700"
            onClick={() => setFormError('Password reset is not available in this demo.')}
          >
            Forgot password?
          </button>
        </div>

        {formError && (
          <div className="rounded-xl border border-red-200 bg-red-50/80 px-4 py-3 text-sm text-red-600 animate-fade-in">
            {formError}
          </div>
        )}

        <Button type="submit" className="w-full !py-3" isLoading={isSubmitting}>
          Sign In
        </Button>
      </form>
    </GlassCard>
  );
}
