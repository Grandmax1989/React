import React, { Component } from 'react';

import { StyleSheet, Text, View, Image, TouchableOpacity, Linking} from 'react-native';

class Main extends Component {
    render(){
    return ( 
    <View style = {styles.main}>
        <TouchableOpacity >
            <View onPress={()=>Linking.openURL("https://wwww.rithmi.com/")} style = {styles.logo}>
                <Image style={styles.img} source={require('../../resourse/icon.png')}></Image> 
            </View>
        </TouchableOpacity> 
        
    </View>
    )
}};

const styles = StyleSheet.create({
    main: {
        
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        backgroundColor: "#E0FFFF",
        flex:1
        
        
    },
    logo:{
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        height: 140,
        width: 140,
        borderRadius: 70,
        backgroundColor: "white",
        borderWidth: 3,
        borderColor:"#008B8B"
    },
    img:{
        height:55,
        width: 120
    }
});
export default Main