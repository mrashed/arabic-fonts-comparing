import React, { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Dashboard } from './components/Dashboard';
import { FontVariant } from './types';

function App() {
  const [currentFont, setCurrentFont] = useState<FontVariant>('cairo');

  return (
    <div className="flex flex-col h-screen">
      <Navigation currentFont={currentFont} onFontChange={setCurrentFont} />
      <div className="flex-1">
        <Dashboard fontClass={currentFont} />
      </div>
    </div>
  );
}

export default App;