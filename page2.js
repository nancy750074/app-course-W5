import React,{Component} from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,StatusBar } from 'react-native';
import Header from './src/Components/Header';
import Choose from './src/Components/Choose';
import Threepic from './src/Components/Threepic';


class page2 extends Component{
     render(){
         return(
         <View>
            <StatusBar barStyle="light-content"/>
            <Header />
            <Choose />
            <Threepic />
         </View>
         );
     }
}

export default page2;