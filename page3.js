import React,{Component} from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,StatusBar } from 'react-native';
import Search from './src/Components/Search';
import Sixpic from './src/Components/Sixpic';
import Fourlogo from './src/Components/Fourlogo';


class page3 extends Component{
     render(){
         return(
         <View>
            <StatusBar barStyle="light-content"/>
            <Search />
            <Sixpic />
            <Fourlogo />
         </View>
         );
     }
}


export default page3;