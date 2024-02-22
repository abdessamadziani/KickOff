import React from 'react'
import { Text, StyleSheet, Pressable ,Image} from 'react-native'
import flesh from '../../../assets/fleche.png'

function CustomButton({onPress,text,type='PRIMARY',fgColor}) {
  return (
    <Pressable onPress={onPress} style={[styles.container , styles[`container_${type}`] ]}>
        <Text style={[styles[`text_${type}`], fgColor ? {color: fgColor}:{}]}>{text}</Text>
        <Image source={flesh} style={styles.flesh}></Image>
    </Pressable>
  )
}
 const styles =  StyleSheet.create({
    container: {
        flexDirection: 'row',
        columnGap:15,
        width: '70%',
        borderRadius: 10,
        padding: 10,
        marginVertical: 5,
       
    },
    flesh: {
      width: 20,
      height: 20,
    },
    container_PRIMARY: {
        backgroundColor:'#91C8E4',
  
    },
    container_GOOGLE: {
        backgroundColor:'#FFF0F5',

    },
    container_TER: {
        color:'black',


    },
    text_PRIMARY: {
        color:'#45474B',
        fontWeight: 'bold',
        paddingStart:40,
    },
    text_GOOGLE: {
        color:'#FBA1B7',
        fontWeight: 'bold'
    },
   
  


 })

export default CustomButton
