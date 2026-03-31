import { StatusBar, Text, View } from 'react-native';
import './global.css';
import { Button } from './src/components/ui/button';
import { useColorScheme } from './src/hooks/useColorScheme';
import { Colors } from './src/lib/constants';

export default function App() {
  const { colorScheme, isDarkColorScheme, toggleColorScheme } = useColorScheme();

  return (
    <View
      className="flex-1 items-center justify-center gap-6 p-8"
      style={{ backgroundColor: Colors[colorScheme].background }}>
      <StatusBar
        barStyle={isDarkColorScheme ? 'light-content' : 'dark-content'}
        backgroundColor={Colors[colorScheme].background}
      />

      {/* Title */}
      <Text
        className="text-4xl font-bold tracking-tight"
        style={{ color: Colors[colorScheme].foreground }}>
        AETHER
      </Text>

      {/* Subtitle */}
      <Text style={{ color: Colors[colorScheme].mutedForeground }}>AI Field Intelligence OS</Text>

      {/* Card */}
      <View
        className="w-full rounded-xl p-6 gap-3"
        style={{
          backgroundColor: Colors[colorScheme].card,
          borderWidth: 1,
          borderColor: Colors[colorScheme].border,
        }}>
        <Text className="font-semibold text-lg" style={{ color: Colors[colorScheme].foreground }}>
          Inspection #001
        </Text>
        <Text style={{ color: Colors[colorScheme].mutedForeground }}>
          Bridge structural assessment — Lagos Island
        </Text>

        <View className="flex-row gap-2 mt-2">
          <View
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: Colors.brand.danger + '33' }}>
            <Text className="text-xs font-semibold" style={{ color: Colors.brand.danger }}>
              HIGH RISK
            </Text>
          </View>
          <View
            className="px-3 py-1 rounded-full"
            style={{ backgroundColor: Colors.brand.success + '33' }}>
            <Text className="text-xs font-semibold" style={{ color: Colors.brand.success }}>
              SYNCED
            </Text>
          </View>
        </View>
      </View>

      {/* Theme Toggle Button */}
      <Button
        onPress={toggleColorScheme}
        className="w-full flex-col items-start gap-2 rounded-xl p-6 h-auto min-h-[120px] active:opacity-80"
        style={{ backgroundColor: Colors[colorScheme].primary }}>
        <Text
          className="text-lg font-bold"
          style={{ color: Colors[colorScheme].primaryForeground }}>
          Toggle Theme
        </Text>
        <Text
          className="text-sm opacity-80"
          style={{ color: Colors[colorScheme].primaryForeground }}>
          Switch between light and dark mode
        </Text>
      </Button>

      {/* Current Theme Indicator */}
      <Text style={{ color: Colors[colorScheme].mutedForeground }}>Current: {colorScheme}</Text>
    </View>
  );
}
