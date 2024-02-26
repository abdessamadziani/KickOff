
import React, { useState, useEffect } from 'react';
import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import CustomCard from '../../components/CustomCard/CustomCard';
import Cup from '../../../assets/newcap.jpeg';
import { useNavigation } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {useSelector } from 'react-redux'


// const Stack = createNativeStackNavigator();



const Favorites = () => {
    const favorites = useSelector((state) => state.favorite.value);
    console.log("xx::::", favorites);
    const navigation = useNavigation();
//   const [matches, setMatches] = useState([]);

//   useEffect(() => {
//     const fetchMatches = async () => {
//       const options = {
//         method: 'GET',
//         url: 'https://api.sportmonks.com/v3/football/fixtures?include=participants&api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4',
//         headers: {
//           // 'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
//           // 'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
//         }
//       };

//       try {
//         const response = await axios.request(options);
//         setMatches(response.data);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchMatches();
//   }, []);

  // const handleMatchPress = (matchId) => {
  //   navigation.navigate('MatchDetails', { matchId: matchId });
  // };
  


  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={Cup} style={styles.img} />
        <Text style={styles.title}>all matches</Text>
         {favorites.map((matche, index) => (
          <CustomCard
            key={index}
             name1={matche.names[0]}
            name2={matche.names[1]}
            date={matche.date}
            time={matche.time}
            url1={matche.urls[0]}
            url2={matche.urls[1]}
             onPress={() => handleMatchPress(matche.id)}

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

export default Favorites ;
