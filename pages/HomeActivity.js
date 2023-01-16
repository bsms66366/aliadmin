// 3 Ways to Hide Navigation Bar in React Native Application
// https://aboutreact.com/react-native-hide-navigation-bar-and-make-screen-full-screen/

import 'react-native-gesture-handler';

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeActivity from './pages/HomeActivity';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeActivity"
        //screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={HomeActivity}
          //options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;