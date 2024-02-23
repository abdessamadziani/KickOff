import React,{useState,useEffect} from 'react'
import { Text,View,Image,StyleSheet, ScrollView, Pressable } from 'react-native'
import morocco from '../../../assets/morocco-flag.png'
import spain from '../../../assets/Spain-flag.png'
import stade from '../../../assets/players1.jpg'
import { useNavigation } from '@react-navigation/native';
import PlayerDetails from '../PlayerDetails/PlayerDetails'

import axios from 'axios'

function Players() {

  const navigation = useNavigation();

  const handleMatchPress = (playerid)=>{
    navigation.navigate('PlayerDetails', { playerId: playerid }); // Navigate after state update
   }
  

  const [players, setPlayers] = useState([]);

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
        setPlayers(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayers();
  }, []);
  console.log("direct ::: ",players?.data)
 
  return (

  

    <ScrollView showsVerticalScrollIndicator={false}>
       {/* {matche?.data?.map((item, index) => ( */}

      <View style={styles.container}>
        <Image source={stade} style={styles.img}></Image>
            <View style={styles.card}>
             {players?.data?.map((player,index) => (
              <Pressable onPress={()=>handleMatchPress(player.id)}>
                <View key={index}  > 
                        <Image key={player.id} source={{uri:player.image_path}} style={styles.flag}></Image>
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
      marginTop:20,
    },
    tt: {
        display:'block'

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
      fontSize: 15,
      alignSelf:'center',
      fontWeight: 'bold',
     
    },
    text_score: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
       
      },
     
    flag: {
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
  
  

export default Players
