
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import CustomCard from '../../components/CustomCard/CustomCard';
import Cup from '../../../assets/newcap.jpeg';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MatchDetails from '../MatchDetails/MatchDetails';
import { useDispatch,useSelector } from 'react-redux'


const Stack = createNativeStackNavigator();


const MatchesStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllMatches"
        options={{ title: "Matches" }}
        component={AllMatches}
      />
      <Stack.Screen
        name="MatchDetails"
        options={{ title: "Matche details" }}
        component={MatchDetails}
      />
    </Stack.Navigator>
  );
};
const AllMatches = () => {
  const dispatch=useDispatch()
  const navigation = useNavigation();
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.sportmonks.com/v3/football/fixtures?include=participants&api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4',
        headers: {
          // 'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
          // 'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setMatches(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMatches();
  }, []);

  const handleMatchPress = (matchId) => {
     navigation.navigate('MatchDetails', { matchId: matchId });
  };
  // const datastore = useSelector((state) =>{ return state.match.value} );
  


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Cup} style={styles.img} />
        <Text style={styles.title}>all matches</Text>
        {matches?.data?.map((matche, index) => (
          <CustomCard
            key={index}
            match_id={matche.id}
            name1={matche.participants[0].short_code}
            name2={matche.participants[1].short_code}
            date={matche.starting_at.split(' ')[0]}
            time={matche.starting_at.split(' ')[1]}
            url1={matche.participants[0].image_path}
            url2={matche.participants[1].image_path}
            onPress={() => handleMatchPress(matche.id)}
            // matchData={matche}
            // onPress={() => handleMatchPress(matche)}

          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#001524',
    alignItems: 'center',
  },
  img: {
    marginVertical: 40,
    width: 400,
    height: 300,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'Cursive'
  },
  text: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
    padding: 5
  },
});

export { AllMatches,MatchesStack };
