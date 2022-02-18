import {
  ApplicationProvider,
  IconRegistry,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import SplashScreen from './screens/home';
import DashScreen from './screens/dash';
import Profile from './screens/profile';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Splash"
        >
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Dash" component={DashScreen} />
          <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
      </ApplicationProvider>
    </NavigationContainer>
  );
}
