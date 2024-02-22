import React from 'react'
import { Text,View,Image,StyleSheet, ScrollView } from 'react-native'
import morocco from '../../../assets/morocco-flag.png'
import spain from '../../../assets/Spain-flag.png'
import CustomCard from '../../components/CustomCard/CustomCard'
import Cup from '../../../assets/newcap.jpeg'

function AllMatches() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Image  source={Cup} style={styles.img}/>
        <Text style={styles.title}>All Matches</Text>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
        <CustomCard/>
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#0C2D57',
      backgroundColor: '#001524',
      alignItems: 'center',
    },
    img: {
      marginVertical:40,
      width: 400,
      height: 300,
    },
    
    title: {
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    text: {
      color: 'white',
      fontSize: 10,
      fontWeight: 'bold',
      padding:5
     
    },
 
  });
  
  

export default AllMatches
