const STORAGE_KEYS = {
  USER_EMAIL: 'mailmind_user_email',
  LAST_LOGIN: 'mailmind_last_login',
  REMEMBER_ME: 'mailmind_remember_me',
} as const;

export function getStoredEmail(): string | null {
  return localStorage.getItem(STORAGE_KEYS.USER_EMAIL);
}

export function getStoredLastLogin(): string | null {
  return localStorage.getItem(STORAGE_KEYS.LAST_LOGIN);
}

export function isRememberMeEnabled(): boolean {
  return localStorage.getItem(STORAGE_KEYS.REMEMBER_ME) === 'true';
}

export function saveUserSession(email: string, rememberMe: boolean): void {
  localStorage.setItem(STORAGE_KEYS.USER_EMAIL, email);
  localStorage.setItem(STORAGE_KEYS.LAST_LOGIN, new Date().toISOString());
  localStorage.setItem(STORAGE_KEYS.REMEMBER_ME, String(rememberMe));
}

export function clearUserSession(): void {
  localStorage.removeItem(STORAGE_KEYS.USER_EMAIL);
  localStorage.removeItem(STORAGE_KEYS.LAST_LOGIN);
  localStorage.removeItem(STORAGE_KEYS.REMEMBER_ME);
}

export function isAuthenticated(): boolean {
  return Boolean(getStoredEmail());
}
