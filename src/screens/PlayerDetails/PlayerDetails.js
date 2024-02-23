import React,{useState,useEffect} from 'react'
import { Text,View,Image,StyleSheet, ScrollView } from 'react-native'
import morocco from '../../../assets/morocco-flag.png'
import spain from '../../../assets/Spain-flag.png'
import stade from '../../../assets/stade.jpg'

import axios from 'axios'

function PlayerDetails({route}) {



  const {playerId} =route.params
  

  const [player, setPlayer] = useState([]);

  useEffect(() => {
    const fetchPlayer = async () => {
      const options = {
        method: 'GET',
        url: `https://api.sportmonks.com/v3/football/players/${playerId}?api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4`,

        headers: {
          // 'X-RapidAPI-Key': '7dbef6b265mshdfac23e28342993p10f9bbjsnebc3f581f050',
          // 'X-RapidAPI-Host': 'pharmacies-de-garde-nc.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        setPlayer(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPlayer();
  }, [playerId]);
  console.log("direct ::: ",player?.data)

  return (

  

    <ScrollView showsVerticalScrollIndicator={false}>
       {/* {matche?.data?.map((item, index) => ( */}

      <View style={styles.container}>
        <Image source={stade} style={styles.img}></Image>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', columnGap:15,alignSelf:'center'}}> 
                        {/* <View style={{display:'block'}}> */}
                            {/* <Text style={styles.text}>{matche?.data?.participants[0].name}</Text>  */}
                            <Image source={{uri:player?.data?.image_path}} style={styles.flag}></Image>

                        {/* </View>  */}
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold', marginHorizontal:5, alignSelf:'center'}}>vs</Text>
                        {/* <View style={{display:'block'}}> */}
                            <Image source={{uri:player?.data?.image_path}}  style={styles.flag}></Image>
                            {/* <Text style={styles.text}>{matche?.data?.participants[1].name} bb</Text>  */}

                </View>
                {/* <View style={{flexDirection: 'row', columnGap:40,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:2}}>
                  <Text style={styles.text_score}>{matche?.data?.scores[2]?.score.goals}</Text> 
                  <Text style={styles.text_score}>-</Text> 
                  <Text style={styles.text_score}>{matche?.data?.scores[5]?.score.goals}</Text> 
                </View> */}
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={{backgroundColor:'white',paddingHorizontal:20,paddingVertical:10,borderRadius:10}}>Player Name</Text> 
                  <Text style={styles.text_league}>{player?.data?.name}</Text> 
                </View>
                {/* <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text}>stadium</Text> 
                  <Text style={styles.text}>{matche?.data?.venue.name}</Text> 
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text}>Result</Text> 
                  <Text style={styles.text}>{matche?.data?.result_info} </Text> 
                </View> */}
    
            </View>
            <View style={styles.card_2}>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                      <Text style={styles.stade_title}>stadium</Text> 
                      <Text style={styles.stade_value}>{player?.data?.name}</Text> 
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                      <Text style={styles.res_title}>Result</Text> 
                      <Text style={styles.res_value}>{player?.data?.name} </Text> 
                </View>
            </View>
      </View>
            {/* ))} */}

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
    card: {
        padding: 15,
        width:350,
        margin:5,
        backgroundColor:'#1F4172',
        borderRadius:8,
        marginTop:20,

  
      },
      card_2: {
        paddingHorizontal:15,
        paddingVertical:5,
        width:350,
        margin:5,
        backgroundColor:'#1F4172',
        borderRadius:8,
        marginTop:20,
        marginBottom:35

  
      },
    
    text: {
      color: 'white',
      fontSize: 15,
      alignSelf:'center',
      fontWeight: 'bold',
     
    },
    text_league: {
      fontSize: 30,
      fontWeight:'bold'
    },
    stade_title: {
      position:'relative',
      color:'#F3F8FF',
      fontSize: 17,
      fontWeight:'bold',
      alignSelf:'center',
      backgroundColor:'#FBA834',
      paddingHorizontal: 25,
      paddingVertical: 10,
      borderRadius:10,
    },
    stade_value: {
      color:'#F3F8FF',
      fontSize: 17,
      fontWeight:'bold',
      alignSelf:'center',
      marginEnd:30
      
     
    },
    res_title: {
      color:'#F3F8FF',
      fontSize: 13,
      fontWeight:'bold',
      alignSelf:'center',
      padding: 14,
      borderRadius:50,
      backgroundColor:'black',
      marginStart:-20

    },
    res_value: {
      color:'#F3F8FF',
      fontSize: 15,
      fontWeight:'bold',
      alignSelf:'center'     
    },
    text_score: {
        color: 'white',
        fontSize: 35,
        fontWeight: 'bold',
       
      },
     
    flag: {
        width: 50,
        height: 50,
        borderRadius:500
    },
    img: {
        width: 400,
        height: 200,
    }
 
  });
  
  

export default PlayerDetails
