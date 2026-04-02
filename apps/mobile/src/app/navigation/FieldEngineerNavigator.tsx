// src/navigation/field-engineer-navigator.ts

import FEHomeScreen from '@/modules/field-engineer/screens/FEHomeScreen';
import SyncScreen from '@/modules/field-engineer/screens/sync/SyncScreen';
import { getTabIcon } from '@/shared/components/TabIcon';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export const FieldEngineerNavigator = createBottomTabNavigator({
  screens: {
    Home: {
      screen: FEHomeScreen,
      options: {
        tabBarLabel: 'My Tasks',
      },
    },
    Sync: {
      screen: SyncScreen,
      options: {
        tabBarLabel: 'Sync Center',
        // Wrap the platform selection in a function
        tabBarIcon: ({ color, size }) =>
          getTabIcon({
            materialName: 'sync',
            sfName: 'arrow.triangle.2.circlepath',
            color,
            size,
          }),
      },
    },
  },
});
