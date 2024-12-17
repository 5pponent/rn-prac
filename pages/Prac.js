import { Button, FlatList, StyleSheet, Text, TextInput, TextInputBase, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Prac = () => {

  const [products, setProducts] = useState([]);
  const [searchText, setSearchText] = useState('');

  // AsyncStorage
  const setItem = async (key, val) => await AsyncStorage.setItem(key, val);
  const getItem = async (key) => await AsyncStorage.getItem(key);

  const onPressGetItemFromAsyncStorage = async () => {
    const value = await getItem("test")
    console.log(value);
  }

  const getProducts = async () => {
    axios.get('https://dummyjson.com/products')
      .then(data => {
        const productsWithHide = data.data.products.map(prod => ({ ...prod, hide: false }))
        setProducts(productsWithHide);
      })
  }

  const onPressSearch = async () => {
    const regex = new RegExp(searchText, 'i');
    setProducts(
      products.map(prod => {
        return {
          ...prod,
          hide: !regex.test(prod.title),
        };
      })
    )
  }

  useEffect(() => {
    console.log("start")
    console.log("'asiofjsdig' has entered on AsyncStorage")
    setItem("test", "asiofjsdig")
  }, [])

  return (
    <View>
      <Text>Prac</Text>

      <View style={{margin: '1em', marginBottom: 0}}>
        <Button title='Get Item From AsyncStorage' onPress={onPressGetItemFromAsyncStorage} />
        <Button title='Get Products' onPress={getProducts} />
      </View>
      
      {/* Product List */}
      <View style={{padding: '1em', margin: '1em', borderWidth: products.length > 0 ? 1 : 0}}>
        {
          products.length > 0 && (
            <View 
              style={{
                display: 'flex', 
                flexDirection: 'row', 
                width: '100%', 
                marginBottom: '1em', 
                borderWidth: 1,
              }}>
              <TextInput 
                style={{flexGrow: 1}} 
                editable 
                onChangeText={setSearchText}
              />
              <Button title="Search" onPress={onPressSearch}></Button>
            </View>
          )
        }
        <FlatList 
          data={products.filter(prod => !prod.hide)} 
          renderItem={(product) => {
            return !product.hide && (
              <View>
                <Text>{product.item.title}</Text>
              </View>
            )
          }}
          keyExtractor={(product) => {
            return product.id;
          }}
        />
      </View>
    </View>
  )
}

export default Prac

const styles = StyleSheet.create({})
