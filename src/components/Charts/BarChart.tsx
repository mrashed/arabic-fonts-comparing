import { BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 45 },
  { name: 'Wed', value: 28 },
  { name: 'Thu', value: 80 },
  { name: 'Fri', value: 27 },
  { name: 'Sat', value: 18 },
  { name: 'Sun', value: 23 },
];

interface BarChartProps {
  fontClass: string;
}

export const BarChart = ({ fontClass }: BarChartProps) => {
  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RechartsBarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" />
        </RechartsBarChart>
      </ResponsiveContainer>
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-600">Daily Active Users</p>
        <p className={`text-sm text-gray-600 ${fontClass}`}>المستخدمون النشطون يومياً</p>
      </div>
    </div>
  );
};