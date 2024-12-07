import { AlertCircle, CheckCircle2, Info } from 'lucide-react';
import { FC } from 'react';

interface MessageProps {
  fontClass: string;
}

export const Messages: FC<MessageProps> = ({ fontClass }) => {
  return (
    <div className="space-y-4">
      <div className="bg-blue-50 border-l-4 border-blue-400 p-4">
        <div className="flex">
          <Info className="h-5 w-5 text-blue-400" />
          <div className="ml-3">
            <p className="text-sm text-blue-700">Information message example</p>
            <p className={`text-sm text-blue-700 ${fontClass}`}>مثال على رسالة معلومات</p>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border-l-4 border-green-400 p-4">
        <div className="flex">
          <CheckCircle2 className="h-5 w-5 text-green-400" />
          <div className="ml-3">
            <p className="text-sm text-green-700">Success message example</p>
            <p className={`text-sm text-green-700 ${fontClass}`}>مثال على رسالة نجاح</p>
          </div>
        </div>
      </div>

      <div className="bg-red-50 border-l-4 border-red-400 p-4">
        <div className="flex">
          <AlertCircle className="h-5 w-5 text-red-400" />
          <div className="ml-3">
            <p className="text-sm text-red-700">Error message example</p>
            <p className={`text-sm text-red-700 ${fontClass}`}>مثال على رسالة خطأ</p>
          </div>
        </div>
      </div>
    </div>
  );
};