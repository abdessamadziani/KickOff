import React,{useEffect} from 'react'
import { Pressable, Text, TextInput, View,Image } from 'react-native'
import { useSelector,useDispatch } from 'react-redux';
import CustomButton from '../../components/CustomButton/CustomButton';

function HomePage({ navigation}) {


  return (
    <View>
      <Text>All Matches</Text>
      {/* <Pressable onPress={() => navigation.push('all-matches')}>
        <Text>go to see all matches</Text>
      </Pressable> */}
      <View>
        <Text>Morocco</Text> 
        <Image></Image>
        <Text>Spain</Text> 
        <Image></Image>

        <Text>Date</Text>
        <Text>12.12.2024</Text>

        <Text>Time</Text>
        <Text>09:00 pm</Text>

        <CustomButton text="add" onPress={()=>dispatch(increment())}></CustomButton>
        <Text>Morocco won after full-time</Text>
        <Text>league Name</Text>

      </View>
    </View>
  )
}

export default HomePage
