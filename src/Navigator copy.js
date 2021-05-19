import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';


import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';

import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import Guide from './screens/guidelines';

import Header from './screens/components/header';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

const screens = {
  Dashboard: {
    screen: Dashboard,
    navigationOptions: ({navigation}) => {
      return {
        headerTitle: () => <Header navigation={navigation} title="CoVac" />,
      };
    },
  },
  Guidelines: {
    screen: Guide,
    navigationOptions: {
      title: 'Guidelines',
    },
  },
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={screenOptions}>
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="signup" component={Signup} />
    </Stack.Navigator>
  );
};

const PageStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="profile"
        component={Profile}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
        l̥
      />
      <Stack.Screen
        name="guide"
        component={Guide}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
      />
    </Stack.Navigator>
  );
};


export const Navigator = () => {
  const [authState, setAuthState] = useState(true);

  AsyncStorage.getItem("authState").then(res =>res).then(res =>{
    if(res.toString()=="null"){
      setAuthState(true)
    }else{
      setAuthState(false)
    }
  })
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Page" children={PageStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
