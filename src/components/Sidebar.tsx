import { Home, Users, Settings, BarChart2 } from 'lucide-react';

const navigation = [
  { name: 'Dashboard • لوحة القيادة', icon: Home, href: '#' },
  { name: 'Users • المستخدمين', icon: Users, href: '#' },
  { name: 'Analytics • التحليلات', icon: BarChart2, href: '#' },
  { name: 'Settings • الإعدادات', icon: Settings, href: '#' },
];

interface SidebarProps {
  fontClass: string;
}

export const Sidebar = ({ fontClass }: SidebarProps) => {
  return (
    <div className="h-full w-64 bg-white border-r border-gray-200 px-3 py-4">
      <div className="flex items-center justify-center mb-8">
        <BarChart2 className="h-8 w-8 text-blue-600" />
        <span className="ml-2 text-xl font-semibold">Analytics</span>
      </div>
      <nav className="space-y-1">
        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 text-sm font-medium rounded-md text-gray-900 hover:bg-gray-50"
          >
            <item.icon className="h-5 w-5 text-gray-400 mr-3" />
            <span className={fontClass}>{item.name}</span>
          </a>
        ))}
      </nav>
    </div>
  );
};