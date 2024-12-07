import { DashboardProps, TableData } from '../types';
import { Sidebar } from './Sidebar';
import { MetricCard } from './MetricCard';
import { DataTable } from './DataTable';
import { TypographyShowcase } from './TypographyShowcase';
import { Tabs } from './Tabs';
import { Users, DollarSign, TrendingUp } from 'lucide-react';

const mockData: TableData[] = [
  { id: '1', customer: 'John Doe', customerAr: 'جون دو', status: 'active', amount: 1234.56, date: new Date('2024-03-10') },
  { id: '2', customer: 'Jane Smith', customerAr: 'جين سميث', status: 'inactive', amount: 2345.67, date: new Date('2024-03-09') },
  { id: '3', customer: 'Robert Johnson', customerAr: 'روبرت جونسون', status: 'active', amount: 3456.78, date: new Date('2024-03-08') },
  { id: '4', customer: 'Emily Davis', customerAr: 'إيميلي ديفيس', status: 'active', amount: 4567.89, date: new Date('2024-03-07') },
  { id: '5', customer: 'Michael Brown', customerAr: 'مايكل براون', status: 'inactive', amount: 5678.90, date: new Date('2024-03-06') },
  { id: '6', customer: 'Sarah Wilson', customerAr: 'سارة ويلسون', status: 'active', amount: 6789.01, date: new Date('2024-03-05') },
  { id: '7', customer: 'David Taylor', customerAr: 'ديفيد تايلور', status: 'active', amount: 7890.12, date: new Date('2024-03-04') },
  { id: '8', customer: 'Lisa Anderson', customerAr: 'ليزا أندرسون', status: 'inactive', amount: 8901.23, date: new Date('2024-03-03') },
  { id: '9', customer: 'James Martin', customerAr: 'جيمس مارتن', status: 'active', amount: 9012.34, date: new Date('2024-03-02') },
  { id: '10', customer: 'Emma Thompson', customerAr: 'إيما طومسون', status: 'active', amount: 1123.45, date: new Date('2024-03-01') },
];

export const Dashboard = ({ fontClass }: DashboardProps) => {
  return (
    <div className={`flex h-screen bg-gray-50 ${fontClass} `}>
      <Sidebar fontClass={fontClass} />
      <div className="flex-1 overflow-auto ">
        <header className="bg-white shadow-sm">
          <div className="px-8 py-6 ">
            <h1 className="text-3xl font-semibold">Dashboard</h1>
            <h1 className={`text-3xl font-semibold `}>لوحة القيادة</h1>
            
            <h3 className="text-1xl font-semibold">Welcome to you in your home</h3>
            <h3 className={`text-1xl font-semibold `}>أهلا وسهلا بكم فى عالم الأعمال</h3>
          </div>
        </header>

        <main className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              title="Total Revenue"
              titleAr="إجمالي الإيرادات"
              value="$45,289"
              valueAr="٤٥،٢٨٩ دولار"
              icon={<DollarSign className="h-6 w-6 text-blue-600" />}
              fontClass={fontClass}
              trend={{
                value: 12.5,
                label: "vs last month",
                labelAr: "مقارنة بالشهر الماضي",
                isPositive: true
              }}
            />
            <MetricCard
              title="Active Users"
              titleAr="المستخدمون النشطون"
              value="2,849"
              valueAr="٢،٨٤٩"
              icon={<Users className="h-6 w-6 text-blue-600" />}
              fontClass={fontClass}
              trend={{
                value: 8.2,
                label: "vs last week",
                labelAr: "مقارنة بالأسبوع الماضي",
                isPositive: true
              }}
            />
            <MetricCard
              title="Conversion Rate"
              titleAr="معدل التحويل"
              value="12.5%"
              valueAr="١٢.٥٪"
              icon={<TrendingUp className="h-6 w-6 text-blue-600" />}
              fontClass={fontClass}
            />
          </div>

          <Tabs fontClass={fontClass} />

          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className={`text-xl font-semibold mb-2 ${fontClass}`}>Recent Transactions</h2>
            <h2 className={`text-xl font-semibold mb-6 ${fontClass}`}>المعاملات الأخيرة</h2>
            <DataTable data={mockData} fontClass={fontClass} />
          </div>

          <TypographyShowcase fontClass={fontClass} />
        </main>
      </div>
    </div>
  );
};