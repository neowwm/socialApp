import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {palette} from '../src/lib/colorPalette';
import FeedsScreen from './FeedsScreen';
import MyProfileScreen from './MyProfileScreen';

const Tabs = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: palette.tabBar.activeTintColor,
      }}>
      <Tabs.Screen
        name="feedsScreen"
        component={FeedsScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="stack-exchange" color={color} size={25} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="user-circle-o" color={color} size={25} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
