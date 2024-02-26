import React, { useEffect } from 'react';

import {View ,Text} from 'react-native'
import HomePage from './src/screens/HomePage/HomePage'
import {AllMatches, MatchesStack} from './src/screens/AllMatches/AllMatches'
import {Players , PlayersStack} from './src/screens/Players/Players'



import { Provider, useDispatch, useSelector } from 'react-redux';
import {store}from './src/store';

// import { fetchData } from './src/api';


import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Favorites from './src/screens/Favorites/Favorites';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createMaterialBottomTabNavigator();
// const Stack = createNativeStackNavigator();


export default function App() {

  // const dispatch = useDispatch();
  // const data = useSelector((state) =>{console.log("the state is",state) 
  //  return 100 } );
  // useEffect(() => {
  //   dispatch(fetchData());
  //  }, []);

  return (
   <Provider store={store}>
      {/* <View>
          <Text>{data}</Text>
      </View> */}
       
      <NavigationContainer>
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
            component={MatchesStack}
            options={{
              tabBarLabel: 'AllMatches',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="panorama-sphere" color={color} size={26} />
              ),
            }}
          />
       
      


            <Tab.Screen
            name="Players"
            component={PlayersStack}
            options={{
              tabBarLabel: 'Players',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="panorama-sphere" color={color} size={26} />
              ),
            }}
          />
              <Tab.Screen
            name="Favorites"
            component={Favorites}
            options={{
              tabBarLabel: 'Favorites',
              tabBarIcon: ({ color }) => (
                <MaterialCommunityIcons name="heart" color={color} size={26} />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
   </Provider> 


  );
}


























