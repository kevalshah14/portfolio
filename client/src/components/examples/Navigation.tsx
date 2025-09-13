import Navigation from '../Navigation';
import { useState } from 'react';

export default function NavigationExample() {
  const [isDark, setIsDark] = useState(false);
  
  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log('Theme toggled:', !isDark ? 'dark' : 'light');
  };

  return (
    <div className="h-screen">
      <Navigation isDark={isDark} toggleTheme={toggleTheme} />
      <div className="pt-16 p-8">
        <p className="text-muted-foreground">Navigation component example - scroll to see sticky behavior</p>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}