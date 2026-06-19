import { GlassCard } from '../ui/GlassCard';
import { formatDateTime } from '../../utils/format';

interface SidebarProps {
  email: string;
  lastLogin: string;
}

const CAPABILITIES = [
  'Read Emails',
  'Search Emails',
  'Summarize Emails',
  'Send Emails',
  'Create Drafts',
  'Reply to Emails',
  'Manage Labels',
];

export function Sidebar({ email, lastLogin }: SidebarProps) {
  return (
    <aside className="flex flex-col gap-4 lg:sticky lg:top-24 lg:h-fit">
      <GlassCard className="animate-slide-up">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
          Account Details
        </h3>
        <dl className="space-y-3">
          <div>
            <dt className="text-xs text-slate-500">Email</dt>
            <dd className="mt-0.5 truncate text-sm font-medium text-slate-800">{email}</dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Session Status</dt>
            <dd className="mt-0.5 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              <span className="text-sm font-medium text-emerald-700">Active</span>
            </dd>
          </div>
          <div>
            <dt className="text-xs text-slate-500">Last Login</dt>
            <dd className="mt-0.5 text-sm font-medium text-slate-800">{formatDateTime(lastLogin)}</dd>
          </div>
        </dl>
      </GlassCard>

      <GlassCard className="animate-slide-up animation-delay-100">
        <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
          AI Capabilities
        </h3>
        <ul className="space-y-2.5">
          {CAPABILITIES.map((capability) => (
            <li key={capability} className="flex items-center gap-2.5 text-sm text-slate-700">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-xs text-white">
                ✓
              </span>
              {capability}
            </li>
          ))}
        </ul>
      </GlassCard>
    </aside>
  );
}
