import React from 'react';
import { AppRegistry,StyleSheet,View,Text,Image } from 'react-native';

const Fourlogo =()=>{
    const{Fourlogohbg,picstyle,textstyle1,textstyle2,roomstyle}=styles;

    return(
        <View style={Fourlogohbg}>
            <View style={roomstyle}>
                  <Image source={require('../Asset/btn_games_selected.png')} 
                         style={picstyle} />
                <Text style={textstyle1}>Games</Text>
            </View>
            <View style={roomstyle}>
                  <Image source={require('../Asset/btn_channels.png')} 
                         style={picstyle} />
                  <Text style={textstyle2}>Channels</Text>
            </View>
            <View style={roomstyle}>
                  <Image source={require('../Asset/btn_following.png')} 
                         style={picstyle} />
                  <Text style={textstyle2}>Following</Text>
            </View>
            <View style={roomstyle}>    
                  <Image source={require('../Asset/btn_me.png')} 
                         style={picstyle} />             
                  <Text style={textstyle2}>Me</Text>
            </View>
        </View>
    );
};

const styles = {
    Fourlogohbg:{
        width:375,
        height:49,
        backgroundColor:'#fff',
        flexDirection:'row',
    },
    roomstyle:{
        width:94,
        height:49,
    },    
    textstyle1:{
        color:'rgb(100,65,165)',
        fontSize:10,
        textAlign:'center',
        marginTop:-15,
    },
    textstyle2:{
        color:'rgb(187,187,187)',
        fontSize:10,
        textAlign:'center',
        marginTop:-15,
    },
    picstyle:{
        width:94,
        height:49,
    },
};

export default Fourlogo;