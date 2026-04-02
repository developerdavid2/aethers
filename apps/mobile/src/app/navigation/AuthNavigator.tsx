import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/modules/auth/screens/LoginScreen';
import SignUpScreen from '@/modules/auth/screens/SignUpScreen';

export const AuthNavigator = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: { title: 'Sign In', headerShown: false },
    },
    SignUp: {
      screen: SignUpScreen,
      options: { title: 'Create Account' },
    },
  },
});
