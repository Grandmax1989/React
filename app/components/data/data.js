import React,{Component} from "react";
import Data from "../../../data.json";
import { View, SectionList,StyleSheet,Text,Image, ScrollView } from "react-native";
import moment from 'moment';  
import 'moment/locale/es' 



class DataVisor extends Component{



    
render(){
    return (

        <View style={styles.maindiv}>
        <ScrollView>
            {
            Data.sort(function(a,b){
                const data=a.date.localeCompare(b.date)
                return data;
            }),
            Data.map((dataDetail)=>{
               
                return (
                <View key={Number.toString()}>
                    <View >
                        <Text>{moment(dataDetail.date).format("dddd D [de] MMMM")}</Text>
                    </View>
                    <View style={styles.oneItem}>
                
                
                        <Text>{moment(dataDetail.date).format("h:mm a")}</Text>
                        <View style={styles.pulse}>
                        <View>{dataDetail.heartRate}</View>
                        <Text>  ppm</Text>
                    </View>
                        <View>
                            {dataDetail.hasAnomaly && <Image style={styles.img1} source={require('../../resourse/alert.png')}/>}
                            {!dataDetail.hasAnomaly && <Image style={styles.img2} source={require('../../resourse/check.png')}/>}
                        </View>
                    </View>
                </View>
                
                )
            })}
         </ScrollView> 
          
        </View>

    );
    };
}
const styles = StyleSheet.create({
    
    maindiv: {
        flex: 1,
        flexDirection: 'column',
        height: 300
    },
    mainItem:{
        padding: 10
    },
    
    oneItem:{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
    },
    img1:{
        height: 20,
        width: 20
    },
    img2:{
        height: 20,
        width: 20
    },
    pulse:{
        flex: 1,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    }

});
export default DataVisor
    
            
    
            
            
        
        
    