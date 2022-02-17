import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  BottomNavigation,
  BottomNavigationTab,
  Layout,
  Text,
  Icon,
} from '@ui-kitten/components';
import Users from '../../screens/users'

const { Navigator, Screen } = createBottomTabNavigator();

const PersonIcon = (props) => <Icon {...props} name="person-outline" />;


const EmailIcon = (props) => <Icon {...props} name="email-outline" />;

const UsersScreen = () => (
  <Users/>
);

const OrdersScreen = () => (
  <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text category="h1">ORDERS</Text>
  </Layout>
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={{ marginTop: -10 }}
  >
    <BottomNavigationTab icon={PersonIcon} />
    <BottomNavigationTab icon={EmailIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
    }}
  >
    <Screen name="Users" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

const BottomBar = () => {
  return (
    <TabNavigator />
  );
};

export default BottomBar;
