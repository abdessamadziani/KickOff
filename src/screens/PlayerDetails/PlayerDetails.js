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
        url: `https://api.sportmonks.com/v3/football/players/${playerId}?includes=country;nationality;position;&api_token=fSyr6ZRRSV8pMPng0v0EoX3t2uHU61kau88clbO09bTjWtrQvHurZyQzlBR4`,

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
        <View  style={styles.container}>
               <Image source={stade} style={styles.img}></Image>
                <View style={styles.card}>
                        <Image source={{uri:player?.data?.image_path}} style={styles.img_player}></Image>
                        <Text style={styles.txt_name}>{player?.data?.firstname}</Text> 
                        <View style={{flexDirection: 'column', columnGap:15,alignSelf:'center'}}> 
                                <View style={{flexDirection: 'row', columnGap:15,alignSelf:'center',marginVertical:10}}>
                                    <Text style={styles.title_nationality}>Nationality</Text> 
                                    <Text style={styles.value_nationality}>{player?.data?.country.name}</Text> 
                                    <Image source={{uri:player?.data?.country.image_path}} style={styles.flag_nationality}></Image>
                                </View> 
                                <View style={{flexDirection: 'row', columnGap:40,alignSelf:'center',marginVertical:15,width:200,justifyContent:'space-between'}}>
                                    <Text style={styles.title_pos}>position</Text> 
                                    <Text style={styles.value_pos}>{player?.data?.position?.name}</Text> 
                                </View>
                                <View style={{flexDirection: 'row', columnGap:40,alignSelf:'center',marginVertical:15,width:200,justifyContent:'space-between'}}>
                                    <Text style={styles.title_height}>Height</Text> 
                                    <Text style={styles.value_height}>{player?.data?.height}</Text> 
                                </View>
                                <View style={{flexDirection: 'row', columnGap:40,alignSelf:'center',width:200,justifyContent:'space-between',marginVertical:15}}>
                                    <Text style={styles.title_weight}>Weight</Text> 
                                    <Text style={styles.value_weight}>{player?.data?.weight}</Text> 
                                </View>
                                <View style={{flexDirection: 'row', columnGap:40,alignSelf:'center',marginVertical:15,width:200,justifyContent:'space-between'}}>
                                    <Text style={styles.title_dob}>Date Of birth</Text> 
                                    <Text style={styles.value_dob}>{player?.data?.date_of_birth}</Text> 
                                </View>
                        </View>
                </View>

                {/* <View style={styles.card_2}>
                    <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                        <Text style={styles.stade_title}>stadium</Text> 
                        <Text style={styles.stade_value}>{player?.data?.name}</Text> 
                    </View>
                    <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                        <Text style={styles.res_title}>Result</Text> 
                        <Text style={styles.res_value}>{player?.data?.name} </Text> 
                    </View>
                </View> */}
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
    card: {
        padding: 20,
        flexDirection:'column',
        width:360,
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
    txt_name: {
      fontSize: 30,
      fontWeight:'bold',
      color:'white',
      alignSelf:'center',
      marginVertical:4
    },
    title_nationality: {
        color:'#F3F8FF',
         marginButtom:10,
         padding:5,
         backgroundColor:'#49108B',
         borderRadius:10,

         textAlign:'center',
         fontWeight:'bold',
         fontSize:15,
         alignSelf:'center'
    },
    value_nationality: {
      color:'#F3F8FF',
      fontSize: 17,
      fontWeight:'bold',
      alignSelf:'center',
      marginEnd:30,
      
     
    },
    flag_nationality: {
        width:50,
        height:30,
        borderRadius:8,
        alignSelf:'center'



    },
    title_height: {
        color:'#F3F8FF',
        marginButtom:10,
        // marginLeft:-22,
        padding:5,
        backgroundColor:'#49108B',
        borderRadius:10,
        // textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center'
    },
    value_height: {
        color:'#F3F8FF',
        fontSize: 17,
        position:'relative',
        right:20,
        // marginLeft:20,
        fontWeight:'bold',
        alignSelf:'center',
        // marginEnd:30,
    },
    title_weight: {
        color:'#F3F8FF',
        marginButtom:10,
        // marginLeft:-30,
        padding:5,
        backgroundColor:'#49108B',
        borderRadius:10,
        // textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center'
       
      },
    value_weight: {
        color:'#F3F8FF',
        position:'relative',
        right:20,
        fontSize: 17,
        fontWeight:'bold',
        alignSelf:'center',
        // marginLeft:20,
    },
    title_dob: {
        color:'#F3F8FF',
        marginButtom:10,
        // marginLeft:40,
        // padding:5,
        backgroundColor:'#49108B',
        borderRadius:10,
        // textAlign:'center',
        fontWeight:'bold',
        padding:5,

        fontSize:15,
        alignSelf:'center'
       
      },
    value_dob: {
        color:'#F3F8FF',
        fontSize: 17,
        fontWeight:'bold',
        alignSelf:'center',
        marginEnd:30,
    },
    title_pos: {
        color:'#F3F8FF',
        marginButtom:10,
        padding:5,
        // marginLeft:20,
        // padding:5,
        backgroundColor:'#49108B',
        borderRadius:10,
        // textAlign:'center',
        fontWeight:'bold',
        fontSize:15,
        alignSelf:'center'
       
      },
    value_pos: {
        color:'#F3F8FF',
        fontSize: 17,
        fontWeight:'bold',
        alignSelf:'center',
        // marginEnd:30,
    },
     
    img_player: {
        width: 100,
        height: 100,
        borderRadius:500,
        alignSelf:'center'
    },
    img: {
        width: 400,
        height: 150,
    }
 
  });
  
  

export default PlayerDetails
