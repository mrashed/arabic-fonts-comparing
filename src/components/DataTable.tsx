import { TableData } from '../types';
import { StatusBadge } from './StatusBadge';
import { formatCurrency, formatDate, formatDateArabic, toArabicNumbers } from '../utils/formatters';

interface DataTableProps {
  data: TableData[];
  fontClass: string;
}

export const DataTable = ({ data, fontClass }: DataTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Customer • العميل
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status • الحالة
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Amount • المبلغ
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date • التاريخ
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {data.map((row) => (
            <tr key={row.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{row.customer}</div>
                <div className={`text-sm font-medium text-gray-900 ${fontClass}`}>{row.customerAr}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <StatusBadge status={row.status} fontClass={fontClass} />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{formatCurrency(row.amount)}</div>
                <div className={`text-sm text-gray-900 ${fontClass}`}>{toArabicNumbers(row.amount)} ريال</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{formatDate(row.date)}</div>
                <div className={`text-sm text-gray-900 ${fontClass}`}>{formatDateArabic(row.date)}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};