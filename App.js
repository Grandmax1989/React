import React  from 'react';
import {StyleSheet, View } from 'react-native';
import Header from './app/components/header/header'
import Main from './app/components/main/main';
import Data from './app/components/data/data';
import Grafic from './app/components/grafic/grafic';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import 'react-native-gesture-handler';




const Tab = createBottomTabNavigator();


function MainScreen(){
  return(
    <Main/>
  );
};


function DataScreen(){
  return(
      <Data/>
    );
};


function GraficScreen(){
  return(
    <Grafic/>
  );
};



function MyTab() {
  return (
    <Tab.Navigator
    
    tabBarOptions={{
      activeTintColor: "#7FFFD4",
      inactiveTintColor: 'black',
    }}
    >
      <Tab.Screen name="Main"  component={MainScreen} />
      <Tab.Screen name="Data"  component={DataScreen} />
      <Tab.Screen name="Grafic" component={GraficScreen} />
    </Tab.Navigator>
  );
}

const App=()=>{
  
  
   return (
      <View style={{flex: 1}}>
        <Header/>
        <NavigationContainer>
        <MyTab/>
        </NavigationContainer>
      </View>
        );

}   
      
export default App 



