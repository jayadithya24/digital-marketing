import { useEffect, useState } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, UserRound, Mail, Lock, Eye, EyeOff, X } from 'lucide-react';

type AuthMode = 'login' | 'register';

type StoredAccount = {
  name: string;
  email: string;
  password: string;
};

interface AuthProps {
  onAuthenticated: () => void;
}

const AUTH_STORAGE_KEY = 'digitalexpert-authenticated';
const ACCOUNTS_STORAGE_KEY = 'digitalexpert-accounts';

const normalizeEmail = (email: string) => email.trim().toLowerCase();

const readAccounts = (): StoredAccount[] => {
  const rawAccounts = window.localStorage.getItem(ACCOUNTS_STORAGE_KEY);

  if (!rawAccounts) {
    return [];
  }

  try {
    const parsedAccounts = JSON.parse(rawAccounts) as StoredAccount[];
    return Array.isArray(parsedAccounts) ? parsedAccounts : [];
  } catch {
    return [];
  }
};

const writeAccounts = (accounts: StoredAccount[]) => {
  window.localStorage.setItem(ACCOUNTS_STORAGE_KEY, JSON.stringify(accounts));
};

export default function Auth({ onAuthenticated }: AuthProps) {
  const [mode, setMode] = useState<AuthMode>('login');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [statusType, setStatusType] = useState<'success' | 'error' | ''>('');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const isLogin = mode === 'login';

  useEffect(() => {
    if (!statusMessage) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      setStatusMessage('');
      setStatusType('');
    }, 3200);

    return () => window.clearTimeout(timeoutId);
  }, [statusMessage]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const normalizedEmail = normalizeEmail(email);
    const accounts = readAccounts();

    if (isLogin) {
      const matchingAccount = accounts.find((account) => account.email === normalizedEmail && account.password === password);

      if (!matchingAccount) {
        setStatusType('error');
        setStatusMessage('Invalid email or password. Please use a registered account.');
        return;
      }

      window.localStorage.setItem(AUTH_STORAGE_KEY, 'true');
      setStatusType('success');
      setStatusMessage('Login successful. Redirecting you to the home page.');
      onAuthenticated();
      return;
    }

    if (accounts.some((account) => account.email === normalizedEmail)) {
      setStatusType('error');
      setStatusMessage('Email already exists. Please use a different email or log in.');
      return;
    }

    if (password !== confirmPassword) {
      setStatusType('error');
      setStatusMessage('Passwords do not match. Please try again.');
      return;
    }

    writeAccounts([
      ...accounts,
      {
        name: fullName.trim(),
        email: normalizedEmail,
        password,
      },
    ]);

    setStatusType('success');
    setStatusMessage('Registration successful. Please log in to continue.');
    setMode('login');
    setFullName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  const fieldClassName =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100';

  return (
    <div className="bg-slate-50">
      {statusMessage ? (
        <div className="fixed right-4 top-4 z-50 w-[calc(100%-2rem)] max-w-sm">
          <div
            className={`rounded-2xl border px-4 py-4 shadow-2xl backdrop-blur-md ${
              statusType === 'success'
                ? 'border-green-200 bg-green-50 text-green-800'
                : 'border-red-200 bg-red-50 text-red-700'
            }`}
          >
            <div className="flex items-start gap-3">
              <div className="flex-1 text-sm font-medium">{statusMessage}</div>
              <button
                type="button"
                onClick={() => {
                  setStatusMessage('');
                  setStatusType('');
                }}
                className="rounded-full p-1 transition hover:bg-black/5"
                aria-label="Dismiss message"
              >
                <X size={16} />
              </button>
            </div>
          </div>
        </div>
      ) : null}

      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-blue-800 to-slate-900 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(59,130,246,0.35),_transparent_30%)]" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-blue-50 backdrop-blur-sm">
                <Sparkles size={16} />
                Secure access for your team and clients
              </div>

              <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
                Login and register with a clean, branded experience.
              </h1>

              <p className="mt-6 max-w-2xl text-lg md:text-xl text-blue-100">
                Give users a simple place to sign in, create an account, and return to their dashboard without leaving your brand style behind.
              </p>

              <div className="mt-8 grid sm:grid-cols-3 gap-4 max-w-2xl">
                {[
                  { icon: ShieldCheck, title: 'Protected', text: 'Designed for secure auth flows' },
                  { icon: UserRound, title: 'Simple', text: 'One screen for login and signup' },
                  { icon: CheckCircle2, title: 'Ready', text: 'Easy to connect to your backend' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                      <Icon size={22} className="text-blue-200" />
                      <h3 className="mt-3 font-semibold text-white">{item.title}</h3>
                      <p className="mt-1 text-sm text-blue-100">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-blue-500/20 blur-2xl" />
              <div className="relative rounded-[2rem] border border-white/15 bg-white/95 p-6 md:p-8 shadow-2xl text-gray-900">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-blue-600">Account access</p>
                    <h2 className="text-2xl font-bold text-gray-900">
                      {isLogin ? 'Welcome back' : 'Create your account'}
                    </h2>
                  </div>

                  <div className="rounded-full bg-blue-50 p-2 text-blue-700">
                    <Lock size={18} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 rounded-2xl bg-slate-100 p-1">
                  <button
                    type="button"
                    onClick={() => {
                      setMode('login');
                      setStatusMessage('');
                      setStatusType('');
                      setFullName('');
                      setEmail('');
                      setPassword('');
                      setConfirmPassword('');
                    }}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      isLogin ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setMode('register');
                      setStatusMessage('');
                      setStatusType('');
                      setFullName('');
                      setEmail('');
                      setPassword('');
                      setConfirmPassword('');
                    }}
                    className={`rounded-xl px-4 py-3 text-sm font-semibold transition ${
                      !isLogin ? 'bg-white text-blue-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Register
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  {!isLogin && (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Full Name</label>
                      <input
                        type="text"
                        className={fieldClassName}
                        placeholder="John Doe"
                        value={fullName}
                        onChange={(event) => setFullName(event.target.value)}
                        required
                      />
                    </div>
                  )}

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Email Address</label>
                    <div className="relative">
                      <Mail size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="email"
                        className={`${fieldClassName} pl-12`}
                        placeholder="john@example.com"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-700">Password</label>
                    <div className="relative">
                      <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className={`${fieldClassName} pl-12 pr-12`}
                        placeholder={isLogin ? 'Enter your password' : 'Create a password'}
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword((current) => !current)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {!isLogin && (
                    <div>
                      <label className="mb-2 block text-sm font-medium text-gray-700">Confirm Password</label>
                      <div className="relative">
                        <Lock size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                        <input
                          type={showConfirmPassword ? 'text' : 'password'}
                          className={`${fieldClassName} pl-12 pr-12`}
                          placeholder="Repeat your password"
                          value={confirmPassword}
                          onChange={(event) => setConfirmPassword(event.target.value)}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowConfirmPassword((current) => !current)}
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                          aria-label={showConfirmPassword ? 'Hide confirm password' : 'Show confirm password'}
                        >
                          {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white transition-colors hover:bg-blue-700"
                  >
                    {isLogin ? 'Sign In' : 'Create Account'}
                    <ArrowRight size={18} />
                  </button>
                </form>

                <p className="mt-6 text-center text-sm text-gray-500">
                  {isLogin ? 'New here?' : 'Already have an account?'}{' '}
                  <button
                    type="button"
                    onClick={() => {
                      setMode(isLogin ? 'register' : 'login');
                      setStatusMessage('');
                      setStatusType('');
                      setFullName('');
                      setEmail('');
                      setPassword('');
                      setConfirmPassword('');
                    }}
                    className="font-semibold text-blue-600 hover:text-blue-700"
                  >
                    {isLogin ? 'Create an account' : 'Sign in'}
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}