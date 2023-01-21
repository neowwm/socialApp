import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SignInScreen from './screen/SignInScreen';
import TabsScreen from './screen/TabsScreen';
import PostScreen from './screen/PostScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import {useAuth} from './contexts/AuthContexts';

const Stack = createStackNavigator();

export default function RootStack() {
  const {currentUser} = useAuth();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!currentUser && (
          <Stack.Screen
            name="SignInScreen"
            component={SignInScreen}
            options={{headerShown: false}}
          />
        )}
        {currentUser && (
          <>
            <Stack.Screen
              name="TabsScreen"
              component={TabsScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="WelcomeScreen"
              component={WelcomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="PostScreen"
              component={PostScreen}
              options={{headerShown: false}}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
