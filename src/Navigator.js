import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Profile from './screens/Profile';
import Home from './screens/Home';
import Guide from './screens/guidelines';

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

export const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen name="guide" component={Guide} />
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="profile" component={Profile} />
        <Stack.Screen name="login" component={Login} />
        <Stack.Screen name="signup" component={Signup} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
