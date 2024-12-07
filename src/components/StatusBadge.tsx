import { StatusBadgeProps } from '../types';
import clsx from 'clsx';

export const StatusBadge = ({ status, fontClass }: StatusBadgeProps) => {
  return (
    <div className="flex space-x-2 items-center">
      <span
        className={clsx(
          'px-2 py-1 rounded-full text-xs font-medium',
          status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        )}
      >
        {status === 'active' ? 'Active' : 'Inactive'}
      </span>
      <span
        className={clsx(
          'px-2 py-1 rounded-full text-xs font-medium',
          fontClass,
          status === 'active'
            ? 'bg-green-100 text-green-800'
            : 'bg-gray-100 text-gray-800'
        )}
      >
        {status === 'active' ? 'نشط' : 'غير نشط'}
      </span>
    </div>
  );
};