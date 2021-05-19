import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {firebase} from './firebase/config';

// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AsyncStorage from '@react-native-async-storage/async-storage';

import Login from './screens/auth/Login';
import Signup from './screens/auth/Signup';
import Home from './screens/Home';

import Profile from './screens/Profile';
import Dashboard from './screens/Dashboard';
import Guide from './screens/guidelines';

import Header from './screens/components/header';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const screenOptions = {
  headerShown: false,
};

//
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

const GuideStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="guide"
        component={Guide}
        options={({navigation}) => {
          return {
            header: () => <Header navigation={navigation} title="COVAC" />,
          };
        }}
        l̥
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => {
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
    </Stack.Navigator>
  );
};

const DashboardStack = () => {
  return (
    <Stack.Navigator>
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

const PageDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Guide" component={GuideStack} />
      <Drawer.Screen name="Dashboard" component={DashboardStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
    </Drawer.Navigator>
  );
};

export const Navigator = () => {
  const [user, setUser] = useState(null);
  const [asyncUser, setAsyncUser] = null;
  useEffect(() => {
    console.log(user);
    const usersRef = firebase.firestore().collection('users');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setUser(userData);
          })
          .catch((error) => {});
      }
    });
  }, []);

  useEffect(() => {}, [asyncUser]);

  return (
    <NavigationContainer>
      {/* <AuthStack />
      <PageDrawer /> */}
      {AsyncStorage.getItem('authState')
        .then((res) => res)
        .then((res) => {
          console.log(res);
          return res;
        }) === null ? (
        // <AuthStack />
        <PageDrawer />
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

export default Navigator;
