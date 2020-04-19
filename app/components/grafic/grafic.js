import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import {Line} from 'react-chartjs-2';
import Data from "../../../data.json";
import moment from 'moment'; 
import 'moment/locale/es' 




const DATA=Data;

const fulldata = DATA.map((DATA)=>DATA);

fulldata.sort(function(a,b){
    const dataorden=a.date.localeCompare(b.date)
    return dataorden;
    
});

const genericdate = fulldata.map((fulldata)=>moment(fulldata.date).format("ddd D [de] MMM h:mm"));

const heartpulse=fulldata.map((fulldata)=>fulldata.heartRate);






class Grafic extends Component{
    constructor(props){
        super(props);

        this.state={
            data:{
                labels:genericdate,
                datasets:[
                    {
                        label:"Pulsaciones por minuto",
                        backgroundColor:'rgba(128, 209, 232,0.75)',
                        data:heartpulse
                    },
                    
                ]
            }
        }
    }
    getCharData = canvas=>{
        const data=this.state.data;
        
    }
    render(){
        return(
        <ScrollView style={{flex:1}} horizontal >
        <View style={{height:"520",width:1200 }}>
            <Line
                options={{
                    responsive: true
                }}
                data={this.state.data}
            
            />

        </View>
       
        </ScrollView>
        )
    }
}
export default Grafic