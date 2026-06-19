import type { LoginFormData, User } from '../types';
import {
  clearUserSession,
  getStoredEmail,
  getStoredLastLogin,
  isAuthenticated,
  saveUserSession,
} from '../utils/storage';
import { validateEmail, validatePassword } from '../utils/validation';

export function login(credentials: LoginFormData): { success: true; user: User } | { success: false; error: string } {
  const emailError = validateEmail(credentials.email);
  if (emailError) return { success: false, error: emailError };

  const passwordError = validatePassword(credentials.password);
  if (passwordError) return { success: false, error: passwordError };

  const email = credentials.email.trim().toLowerCase();
  saveUserSession(email, credentials.rememberMe);

  return {
    success: true,
    user: {
      email,
      lastLogin: new Date().toISOString(),
    },
  };
}

export function logout(): void {
  clearUserSession();
}

export function getCurrentUser(): User | null {
  const email = getStoredEmail();
  if (!email) return null;

  return {
    email,
    lastLogin: getStoredLastLogin() ?? new Date().toISOString(),
  };
}

export { isAuthenticated };
