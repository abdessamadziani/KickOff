import React,{useState,useEffect} from 'react'
import { Text,View,Image,StyleSheet, ScrollView, Pressable } from 'react-native'

import stade from '../../../assets/players1.jpg'
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PlayerDetails from '../PlayerDetails/PlayerDetails';
import CustomInput from '../../components/CustomInput/CustomInput'
const Stack = createNativeStackNavigator();
const PlayersStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Players"
        options={{ title: "Players" }}
        component={Players}
      />
      <Stack.Screen
        name="PlayerDetails"
        options={{ title: "Player details" }}
        component={PlayerDetails}
      />
    </Stack.Navigator>
  );
};
const Players = () => {

  const navigation = useNavigation();

  const handleMatchPress = (playerid)=>{
    navigation.navigate('PlayerDetails', { playerId: playerid }); // Navigate after state update
   }
  

  const [players, setPlayers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPlayers = async () => {
      const options = {
        method: 'GET',
        url: 'https://api.sportmonks.com/v3/football/players?api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4',

        headers: {
          // 'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
          // 'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPlayers(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);

  const filteredPlayers = players?.filter(player =>
    player.firstname.toLowerCase().includes(searchQuery.toLowerCase())
  );
  console.log("direct ::: ",players?.data)
 
  return (

  

    <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.container}>
        <Image source={stade} style={styles.img}></Image>
        <CustomInput
          name="search"
          placeholder="Search by player name"
          // value={value}
           onChangeText={setSearchQuery}
        />
            <View style={styles.card}>
             {filteredPlayers.map((player,index) => (
              <Pressable onPress={()=>handleMatchPress(player.id)}>
                <View key={index}  > 
                        <Image key={player.id} source={{uri:player.image_path}} style={styles.player_img}></Image>
                        <Text style={styles.text}>{player.firstname}</Text>
                </View>
                </Pressable>
                ))}
            </View>
        </View>
    </ScrollView>
    
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#001524',
      alignItems: 'center',
      height:1100,
      marginTop:20,
    },
  
    card: {
        flexDirection: 'row',
        gap:30,
        padding: 20,
        width:350,
        margin:5,
        backgroundColor:'#1F4172',
        borderRadius:8,
        marginTop:20,
        flexWrap:'wrap'

  
      },
    
    text: {
      color: 'white',
      fontSize: 8,
      // alignSelf:'center',
      textAlign:'center',
      fontWeight: 'bold',
     
    },
   
     
    player_img: {
        width: 50,
        height: 50,
        borderRadius:500,
        marginVertical:10
    },
    img: {
        width: 400,
        height: 200,
    }
 
  });
  
  

export { Players,PlayersStack}
