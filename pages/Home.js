import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {
  useNavigation,
} from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  
  return (
    <View>
      <Text>Home</Text>
      
      <View style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Pressable 
          style={
            ({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'}]
          } 
          onPress={() => {navigation.navigate("Prac")}}
        >
          <Text>Prac</Text>
        </Pressable>
        <Pressable 
          style={
            ({pressed}) => [
              {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
            ]
          } 
          onPress={() => {navigation.navigate("Test1")}}
        >
          <Text>Test1</Text>
        </Pressable>
        <Pressable 
          style={
            ({pressed}) => [
              {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
            ]
          } 
          onPress={() => {navigation.navigate("Test2")}}
        >
          <Text>Test2</Text>
        </Pressable>
        <Pressable 
          style={
            ({pressed}) => [
              {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
            ]
          } 
          onPress={() => {navigation.navigate("Test3")}}
        >
          <Text>Test3</Text>
        </Pressable>
        <Pressable 
          style={
            ({pressed}) => [
              {backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white'},
            ]
          } 
          onPress={() => {navigation.navigate("Test4")}}
        >
          <Text>Test4</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  btn: {
    
  }
})