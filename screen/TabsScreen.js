import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeedsScreen from './FeedsScreen';
import MyProfileScreen from './MyProfileScreen';

const Tabs = createBottomTabNavigator();

export default function TabsScreen() {
  return (
    <Tabs.Navigator
      screenOptions={{headerShown: false, tabBarShowLabel: false}}>
      <Tabs.Screen
        name="feedsScreen"
        component={FeedsScreen}
        options={{
          tabbarIcon: ({color}) => (
            <Icon name="stack-exchange" color={color} size={20} />
          ),
        }}
      />
      <Tabs.Screen
        name="MyProfileScreen"
        component={MyProfileScreen}
        options={{
          tabbarIcon: ({color}) => (
            <Icon name="user-circle-o" color={color} size={20} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
