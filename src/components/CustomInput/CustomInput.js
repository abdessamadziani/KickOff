import React from 'react'
import { View,Text, TextInput, StyleSheet } from 'react-native'

function CustomInput({onChangeText,placeholder,name}) {

  return (
    <View style={styles.container}>
          <TextInput
            name={name}
            placeholder={placeholder}
            onChangeText={ onChangeText }
            // value={value}
            style={styles.input}
            //  secureTextEntry={secureTextEntry}
          />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FAF9F6',
        width:'90%',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:4,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 5,
        marginTop:20,
    },
    input: {

    }
})

export default CustomInput
