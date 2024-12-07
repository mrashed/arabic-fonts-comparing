import { FC } from 'react';

interface TypographyShowcaseProps {
  fontClass: string;
}

export const TypographyShowcase: FC<TypographyShowcaseProps> = ({ fontClass }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <h2 className="text-xl font-semibold mb-6">Typography Showcase • معرض الخطوط</h2>
      
      <div className="space-y-8">
        {/* Headings */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Headings • العناوين</h3>
          
          <div className="space-y-4">
            <div>
              <p className="text-4xl font-bold">Large Heading (32px)</p>
              <p className={`text-4xl font-bold ${fontClass}`}>عنوان كبير (٣٢ بكسل)</p>
            </div>
            
            <div>
              <p className="text-2xl font-semibold">Medium Heading (24px)</p>
              <p className={`text-2xl font-semibold ${fontClass}`}>عنوان متوسط (٢٤ بكسل)</p>
            </div>
            
            <div>
              <p className="text-xl font-medium">Small Heading (20px)</p>
              <p className={`text-xl font-medium ${fontClass}`}>عنوان صغير (٢٠ بكسل)</p>
            </div>
          </div>
        </div>

        {/* Paragraph Text */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Paragraph Text • نص الفقرة</h3>
          
          <div className="space-y-6">
            <div>
              <p className="text-base leading-relaxed mb-2">
                Regular paragraph text (16px) - Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
              </p>
              <p className={`text-base leading-relaxed ${fontClass}`}>
                نص الفقرة العادي (١٦ بكسل) - هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، 
                لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد 
                من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
              </p>
            </div>

            <div>
              <p className="text-sm leading-relaxed mb-2">
                Small text (14px) - Perfect for secondary information and supporting text. 
                This size maintains readability while being visually distinct from the main content.
              </p>
              <p className={`text-sm leading-relaxed ${fontClass}`}>
                نص صغير (١٤ بكسل) - مثالي للمعلومات الثانوية والنص الداعم. 
                يحافظ هذا الحجم على سهولة القراءة مع كونه متميزًا بصريًا عن المحتوى الرئيسي.
              </p>
            </div>
          </div>
        </div>

        {/* Mixed Content */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium text-gray-700 mb-4">Mixed Content • محتوى مختلط</h3>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-2xl font-bold">128</span>
              <span className={`text-2xl font-bold ${fontClass}`}>١٢٨</span>
              <span className="text-base text-gray-600">active projects</span>
              <span className={`text-base text-gray-600 ${fontClass}`}>مشروع نشط</span>
            </div>

            <div className="flex items-center space-x-2 rtl:space-x-reverse">
              <span className="text-xl font-semibold text-green-600">+24.8%</span>
              <span className={`text-xl font-semibold text-green-600 ${fontClass}`}>+٢٤.٨٪</span>
              <span className="text-sm text-gray-600">growth rate</span>
              <span className={`text-sm text-gray-600 ${fontClass}`}>معدل النمو</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};