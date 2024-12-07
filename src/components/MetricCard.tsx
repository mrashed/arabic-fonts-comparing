import { MetricCardProps } from '../types';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

export const MetricCard = ({ title, titleAr, value, valueAr, icon, fontClass, trend }: MetricCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 rounded-lg">{icon}</div>
        <div className="text-right">
          <h3 className="text-gray-500 text-sm mb-1">{title}</h3>
          <h3 className={`text-gray-500 text-sm ${fontClass}`}>{titleAr}</h3>
        </div>
      </div>
      
      <div className="space-y-1">
        <p className="text-2xl font-semibold">{value}</p>
        <p className={`text-2xl font-semibold ${fontClass}`}>{valueAr}</p>
      </div>

      {trend && (
        <div className="mt-4 flex items-center space-x-2">
          {trend.isPositive ? (
            <ArrowUpIcon className="w-4 h-4 text-green-500" />
          ) : (
            <ArrowDownIcon className="w-4 h-4 text-red-500" />
          )}
          <span className={`text-sm ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.value}% {trend.label}
          </span>
          <span className={`text-sm ${fontClass} ${trend.isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {trend.labelAr}
          </span>
        </div>
      )}
    </div>
  );
};