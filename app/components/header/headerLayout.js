import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, Switch, ActivityIndicator} from 'react-native';
import ButtonText from '../buttontext/buttonText'

import ButtonImage from '../buttonImag/buttonImg';
class HeaderLayout extends Component {
    render(){
    return (
    <View style={styles.header}>
        <View style={styles.buttonPos}>
            <ButtonText heightT={20} widthT={60} fontS={13} colorF={"deafoult"}text="Profile..."></ButtonText>
            <ButtonImage heightV={20} widthV={20} itemImage={require('../../resourse/menu.png')} heightI={18} widthI={18} ></ButtonImage>
        </View>
        <View style={styles.conection}>
            <View>
            <Switch style={styles.switch}></Switch>
            </View>
            <View>
            <Text>Connection to device...</Text>
            </View>
            <ActivityIndicator/>
        </View>
    </View>
    )
}};

const styles = StyleSheet.create({
    
        header: {
            
            backgroundColor: "#7FFFD4",
            height: 60
        },
        
        buttonPos:{
            flex: 1,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            padding: 7
            
        },
        
        conection:{
            flex: 1,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            padding: 7
        }
       
       
   
});
export default HeaderLayout