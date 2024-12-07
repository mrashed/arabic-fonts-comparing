import { FontVariant } from '../types';

interface NavigationProps {
  currentFont: FontVariant;
  onFontChange: (font: FontVariant) => void;
}

export const Navigation = ({ currentFont, onFontChange }: NavigationProps) => {
  const fonts: { id: FontVariant; label: string }[] = [
    { id: 'cairo', label: 'Cairo' },
    { id: 'noto-sans', label: 'Noto Sans Arabic' },
    { id: 'ibm-plex', label: 'IBM Plex Arabic' },
    { id: 'readex', label: 'Readex Pro' },
    { id: 'rubik', label: 'Rubik' },
    { id: 'vazirmatn', label: 'Vazirmatn' },
    { id: 'tajawal', label: 'Tajawal' },
  ];

  return (
    <div className="bg-white border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center flex-wrap gap-4 py-4">
          {fonts.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => onFontChange(id)}
              className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                currentFont === id
                  ? 'bg-blue-50 text-blue-700'
                  : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};