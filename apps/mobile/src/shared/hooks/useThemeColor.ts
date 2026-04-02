import { useColorScheme } from './useColorScheme';
import { Colors } from '../constants/colors';

// Colors.light and Colors.dark have the same keys
type ColorKey = keyof typeof Colors.light;

export function useThemeColor(colorKey: ColorKey): string {
  const { colorScheme } = useColorScheme();
  // No more 'as' needed — colorScheme is always 'light' | 'dark'
  return Colors[colorScheme][colorKey];
}
