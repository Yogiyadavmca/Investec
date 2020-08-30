import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import FirstScreen from '../containers/screen/first';
import SecondScreen from '../containers/screen/second';
import ThirdScreen from '../containers/screen/third';

const Stack = createStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: 'gray',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={FirstScreen}
          options={{title: 'First Screen', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="Second"
          component={SecondScreen}
          options={{title: 'Second Screen', headerBackTitle: 'Back'}}
        />
        <Stack.Screen
          name="Third"
          component={ThirdScreen}
          options={{title: 'Third Screen', headerBackTitle: 'Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
