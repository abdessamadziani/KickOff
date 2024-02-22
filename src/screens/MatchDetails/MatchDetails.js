import React from 'react'
import { Text,View,Image,StyleSheet, ScrollView } from 'react-native'
import morocco from '../../../assets/morocco-flag.png'
import spain from '../../../assets/Spain-flag.png'
import stade from '../../../assets/stade.jpg'



function MatchDetails({navigation}) {

  return (

  

    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image source={stade} style={styles.img}></Image>
            <View style={styles.card}>
                <View style={{flexDirection: 'row', columnGap:15,alignSelf:'center'}}> 
                        {/* <View style={{display:'block'}}> */}
                            <Text style={styles.text}>Morocco</Text> 
                            <Image source={morocco} style={styles.flag}></Image>

                        {/* </View>  */}
                        <Text style={{color:'white',fontSize:30,fontWeight:'bold', marginHorizontal:5, alignSelf:'center'}}>vs</Text>
                        {/* <View style={{display:'block'}}> */}
                            <Image source={spain} style={styles.flag}></Image>
                            <Text style={styles.text}>Spain</Text> 


                        {/* </View> */}
                        {/* <View style={{display:'block' }}>
                            <Text style={{color:'#F3F8FF', marginButtom:10,padding:3,backgroundColor:'#49108B',borderRadius:10,textAlign:'center',fontWeight:'bold',fontSize:10}}>Date</Text>
                            <Text style={styles.text}>12.12.2024</Text>
                        </View> */}
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text_score}>1</Text> 
                  <Text style={styles.text_score}>-</Text> 
                  <Text style={styles.text_score}>3</Text> 
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text}>League Name</Text> 
                  <Text style={styles.text}>xxxxx</Text> 
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text}>stadium</Text> 
                  <Text style={styles.text}>stadium Name</Text> 
                </View>
                <View style={{flexDirection: 'row', columnGap:35,marginVertical:20,paddingHorizontal:35,alignSelf:'center',marginLeft:15}}>
                  <Text style={styles.text}>Result</Text> 
                  <Text style={styles.text}>Morocco won after full-time</Text> 
                </View>
    
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
    card: {
        padding: 20,
        width:350,
        margin:5,
        backgroundColor:'#1F4172',
        borderRadius:8,
        marginTop:20,

  
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
        borderRadius:500
    },
    img: {
        width: 400,
        height: 300,
    }
 
  });
  
  

export default MatchDetails
