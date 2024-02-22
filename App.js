








import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomePage from './src/screens/HomePage/HomePage'
import AllMatches from './src/screens/AllMatches/AllMatches'
import MatchDetails from './src/screens/MatchDetails/MatchDetails'


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();


export default function App() {

  return (
    <NavigationContainer>
        {/* <Stack.Navigator>
            <Stack.Screen name="MatchDetails" component={MatchDetails} />
        </Stack.Navigator> */}
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#610C9F"
        inactiveColor="#3C486B"
        barStyle={{ backgroundColor: '#F3F8FF' }}
      >
        <Tab.Screen
          name="Home"
          component={HomePage}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="home" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="AllMatches"
          component={AllMatches}
          options={{
            tabBarLabel: 'Matches',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="panorama-sphere" color={color} size={26} />
            ),
          }}
        />
        <Tab.Screen
          name="Teams"
          component={AllMatches}
          options={{
            tabBarLabel: 'Teams',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="shield-star" color={color} size={26} />
            ),
          }}
        />
         <Tab.Screen
          name="Account"
          component={AllMatches}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="account" color={color} size={26} />
            ),
          }}
        />
          <Tab.Screen
          name="MatchDetails"
          component={MatchDetails}
          options={{
            tabBarLabel: 'Details',
            tabBarIcon: ({ color }) => (
              <MaterialCommunityIcons name="Detals" color={color} size={26} />
            ),
          }}
        />
      </Tab.Navigator>
      </NavigationContainer>
    
  
  );
}












