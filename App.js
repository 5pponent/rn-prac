import * as React from 'react';
import { View, Text } from 'react-native';
import { createStaticNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Home from './pages/Home';
import Prac from './pages/Prac';
import Test1 from './pages/Test1';
import Test2 from './pages/Test2';
import Test3 from './pages/Test3';
import Test4 from './pages/Test4';


const RootStack = createNativeStackNavigator({
  screens: {
    Home: Home,
    Prac: Prac,
    Test1: Test1,
    Test2: Test2,
    Test3: Test3,
    Test4: Test4,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
