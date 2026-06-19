import { getInitials } from '../../utils/validation';

interface AvatarProps {
  email: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizes = {
  sm: 'h-8 w-8 text-xs',
  md: 'h-10 w-10 text-sm',
  lg: 'h-12 w-12 text-base',
};

export function Avatar({ email, size = 'md', className = '' }: AvatarProps) {
  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-violet-600 font-semibold text-white shadow-md shadow-violet-500/20 ${sizes[size]} ${className}`}
      aria-hidden="true"
    >
      {getInitials(email)}
    </div>
  );
}
