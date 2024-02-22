import React from 'react'
import { Text,View,Image,StyleSheet } from 'react-native'
import morocco from '../../../assets/morocco-flag.png'
import spain from '../../../assets/Spain-flag.png'
import CustomButton from '../CustomButton/CustomButton'
import MatchDetails from '../../screens/MatchDetails/MatchDetails'



import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function CustomCard({navigation}) {

  return (
    
   

    <View style={styles.card}>
    <View style={{flexDirection: 'row', columnGap:15}}> 
         <View style={{display:'block'}}>
             <Image source={morocco} style={styles.flag}></Image>
             <Text style={styles.text}>Morocco</Text> 
         </View> 
         <Text style={{color:'white',fontSize:20,fontWeight:'bold'}}>vs</Text>
         <View style={{display:'block'}}>
             <Image source={spain} style={styles.flag}></Image>
             <Text style={styles.text}>Spain</Text> 
         </View>
         <View style={{display:'block' }}>
             <Text style={{color:'#F3F8FF', marginButtom:10,padding:3,backgroundColor:'#49108B',borderRadius:10,textAlign:'center',fontWeight:'bold',fontSize:10}}>Date</Text>
             <Text style={styles.text}>12.12.2024</Text>
         </View>
         <View style={{display:'block' }}>
           <Text style={{color:'#F3F8FF', marginButtom:10,padding:3,backgroundColor:'#49108B',borderRadius:10,textAlign:'center',fontWeight:'bold',fontSize:10}}>Time</Text>
           <Text style={styles.text}>09:00 pm</Text>
         </View>
    </View>
    <View style={{flexDirection: 'row', columnGap:15,marginTop:20}}>
         <CustomButton onPress={() => navigation.push('MatchDetails')} text="Check Details" style={styles.text_result}/>
         <Text style={styles.text_league}>league Name</Text>
    </View>
    </View>
    
  )
}



const styles = StyleSheet.create({
    flag: {
      width: 40,
      height: 30,
      borderRadius: 4
    },
    
    text: {
      color: 'white',
      fontSize: 12,
      fontWeight: 'bold',
      padding:5
     
    },
    text_result: {
      padding: 10,
      width: 220,
      backgroundColor: '#91C8E4',
      fontSize: 15,
      fontWeight:'bold',
      color:'#45474B',
      borderRadius: 6,
      textAlign:'center'

    },
    text_league:{
      alignSelf:'center',
      fontSize: 12,
      fontWeight:'bold',
      color: '#F6F4EB'
    },
    card: {
      padding: 20,
      width:350,
      margin:5,
      backgroundColor:'#1F4172',
      borderRadius:8,

    },
  });

export default CustomCard
