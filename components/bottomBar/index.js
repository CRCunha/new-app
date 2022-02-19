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
import Orders from '../../screens/orders'

const { Navigator, Screen } = createBottomTabNavigator();

const ScheduleIcon = (props) => <Icon {...props} name="clock-outline" />;

const OrderIcon = (props) => <Icon {...props} name="grid-outline" />;

const UsersScreen = () => (
  <Users/>
);

const OrdersScreen = () => (
  <Orders />
);

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={(index) => navigation.navigate(state.routeNames[index])}
    style={{ marginTop: -10 }}
  >
    <BottomNavigationTab icon={ScheduleIcon} />
    <BottomNavigationTab icon={OrderIcon} />
  </BottomNavigation>
);

const TabNavigator = () => (
  <Navigator
    tabBar={(props) => <BottomTabBar {...props} />}
    screenOptions={{
      headerShown: false,
      unmountOnBlur: true,
    }}
  >
    <Screen name="Schedule" component={UsersScreen} />
    <Screen name="Orders" component={OrdersScreen} />
  </Navigator>
);

const BottomBar = () => {
  return (
    <TabNavigator />
  );
};

export default BottomBar;
