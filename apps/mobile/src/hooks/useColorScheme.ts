import { useEffect, useState } from 'react';
import { Appearance } from 'react-native';

export function useColorScheme() {
  // Initialize: if it's 'dark', use 'dark', otherwise 'light'
  const [colorScheme, setColorScheme] = useState<'light' | 'dark'>(() => {
    const s = Appearance.getColorScheme();
    return s === 'dark' ? 'dark' : 'light';
  });

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme: s }) => {
      setColorScheme(s === 'dark' ? 'dark' : 'light');
    });
    return () => subscription.remove();
  }, []);

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return {
    colorScheme,
    isDarkColorScheme: colorScheme === 'dark',
    toggleColorScheme,
  };
}
