import React from 'react'
import { View,Text, TextInput, StyleSheet } from 'react-native'

function CustomInput({onChangeText,placeholder}) {

  return (
    <View style={styles.container}>
          <TextInput
            placeholder={placeholder}
            onChangeText={ onChangeText }
            value={value}
            style={[styles.input,{borderBottomColor: error ? '#D63484': '#D9EDBF'}]}
            secureTextEntry={secureTextEntry}
          />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FAF9F6',
        width:'100%',
        borderWidth: 1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical:4,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginBottom: 5,
        marginTop:10,
    },
    input: {

    }
})

export default CustomInput
