import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Guide from './screens/guidelines';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
// const Tabs = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
};

const authStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

const pageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="guide" component={Guide} />
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Second" component={pageStack} />
        <Drawer.Screen name="Main" component={authStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
