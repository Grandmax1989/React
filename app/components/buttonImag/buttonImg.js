import React, { Component } from 'react';
import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';


const ButtonImage = props => {
    const content =(
        <View style={[styles.button,({ height: props.heightV, width: props.widthV})]}>
        <Image source={props.itemImage} style={[styles.img,({ height: props.heightI, width: props.widthI})]}/>
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
        borderRadius: 5
       },
});


export default ButtonImage;

