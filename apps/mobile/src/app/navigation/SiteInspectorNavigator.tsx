import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SIHomeScreen from '@/modules/site-inspector/screens/SIHomeScreen';
import RiskCenterScreen from '@/modules/site-inspector/screens/risk/RiskCenterScreen';

export const SiteInspectorNavigator = createBottomTabNavigator({
  screens: {
    HomeScreen: {
      screen: SIHomeScreen,
      options: { tabBarLabel: 'Insights' },
    },
    RiskCenter: {
      screen: RiskCenterScreen,
      options: { tabBarLabel: 'Risk Alerts' },
    },
  },
});
