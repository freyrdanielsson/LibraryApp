import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { 
  createAppContainer, 
  createBottomTabNavigator, 
  createStackNavigator, 
  createSwitchNavigator 
} from 'react-navigation';

import AuthLoadingScreen from './src/Screens/AuthLoadingScreen';
import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen';

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Profile: ProfileScreen
  },
  {
    initialRouteName: 'Home'
  }
  );

export default createAppContainer(createSwitchNavigator(
  {
    App: MainTabNavigator,
    AuthLoading: AuthLoadingScreen
  },
  {
    initialRouteName: 'AuthLoading'
  }
));
