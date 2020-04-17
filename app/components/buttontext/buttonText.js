import React, { Component } from 'react';
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';


const ButtonText = props => {
    const content =(
       <View style={[styles.button,({ height: props.heightT, width: props.widthT})]}>
           <Text style={[styles.text,({fontSize: props.fontS, color: props.colorF})]}>{props.text}</Text>
        </View> 
    )
    return <TouchableOpacity onPress={props.onPress}>{content}</TouchableOpacity>
};

const styles = StyleSheet.create({
    button:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor: "white",
        padding: 7,
        width: 70,
        borderRadius: 5,
        height: 20
        
        

    },
    text:{
        color: "black",
        
    }
});


export default ButtonText;