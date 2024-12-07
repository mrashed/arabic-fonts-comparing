import { useState } from 'react';
import { AreaChart } from './Charts/AreaChart';
import { BarChart } from './Charts/BarChart';
import { Messages } from './Messages';

interface TabsProps {
  fontClass: string;
}

export const Tabs = ({ fontClass }: TabsProps) => {
  const [activeTab, setActiveTab] = useState('charts');

  const tabs = [
    { id: 'charts', label: 'Charts • الرسوم البيانية' },
    { id: 'messages', label: 'Messages • الرسائل' },
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-6">
        {activeTab === 'charts' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AreaChart fontClass={fontClass} />
            <BarChart fontClass={fontClass} />
          </div>
        )}
        {activeTab === 'messages' && <Messages fontClass={fontClass} />}
      </div>
    </div>
  );
};