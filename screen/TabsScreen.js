import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, Text, useWindowDimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {palette} from '../src/lib/colorPalette';
import FeedsScreen from './FeedsScreen';
import MyProfileScreen from './MyProfileScreen';
import CenterButton from './../src/components/CenterButton';

const Tabs = createBottomTabNavigator();

export default function TabsScreen() {
  const {width, height} = useWindowDimensions();

  return (
    <>
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
              <Icon name="stack-exchange" color={color} size={30} />
            ),
          }}
        />
        <Tabs.Screen
          name="MyProfileScreen"
          component={MyProfileScreen}
          options={{
            tabBarIcon: ({color}) => (
              <Icon name="user-circle-o" color={color} size={30} />
            ),
          }}
        />
      </Tabs.Navigator>
      <CenterButton />
    </>
  );
}

const styles = StyleSheet.create({
  custom: {position: 'absolute', bottom: 30, left: 200},
});
