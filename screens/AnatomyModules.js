import {registerRootComponent} from 'expo';
import {name as appName} from './app.json';
import React, { useState } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image, Button, Dimensions, Pressable, FlatList  } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';

import * as WebBrowser from 'expo-web-browser';
//import Pier from './WestPier.jsx';

import Module102 from './Module102.jsx';
import Module103 from './Module103.jsx';
import Module104 from './Module104.jsx';
import Module202 from './Module202.jsx';
import Module203 from './Module203.jsx';
import Module204 from './Module204.jsx';
//import AnatomyCourses from './components/AnatomyCourses.jsx'; 
import PA from './PA.jsx';
//import bsmsIcon from './components/bsmsIcon.jsx';
//import Gallery from './components/Gallery.jsx';



export default function App() {
    const {height, width} = Dimensions.get('window');
    console.log (height, width)
    return (
      <View style={styles.container}>
       <StatusBar style="dark" />
       <Text accessible={true} accessibilityLabel="Heading" style={styles.titleText}>Anatomy Modules </Text>
      <ALILogo className="ALILogo" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
       <View style={styles.container1}>
       <View style={styles.BoxBorder1}>
         <PA className="PA" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="PA" style={styles.titleText}>Physicans Associates</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/papages.php')}></Button>
       </View>
     
         <View style={styles.BoxBorder1}> 
         <Module102 className="Module102" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
         <Text accessible={true} accessibilityLabel="Module 102" style={styles.titleText}>Module 102</Text>
         <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/102.php')}></Button>
       </View>
       <View style={styles.BoxBorder1}>
         <Module103 className="Module103" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Module 103" style={styles.titleText}>Module 103</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/103.php')}></Button>
       </View>
       
       <View style={styles.BoxBorder1}>
         <Module104 className="Module104" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Module 104" style={styles.titleText}>Module 104</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/104.php')}></Button>
       </View>
  
       <View style={{flex: 1, flexDirection: 'row', flexWrap:1 }}>
         <View style={styles.BoxBorder1}>
         <Module202 className="Module202" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Module 202" style={styles.titleText}>Module 202</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/202.php')}></Button>
       </View>
       <View style={styles.BoxBorder1}>
         <Module203 className="Module203" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Module 203" style={styles.titleText}>Module 203</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/203.php')}></Button>
       </View>
       
       <View style={styles.BoxBorder1}>
         <Module204 className="Module204" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Module 204" style={styles.titleText}>Module 204</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/204.php')}></Button>
       </View>
       
        {/*<View style={styles.BoxBorder1}>
         <PA className="PA" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="PA" style={styles.titleText}>Physicans Associates</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/papages.php')}></Button>
       </View>
       <View style={styles.BoxBorder1}>
         <PA className="Health Professionals" colour="#FAD607" background-color="#282c34" width="500" height="600"/> 
          <Text accessible={true} accessibilityLabel="Health professionals" style={styles.titleText}>Health Professionals</Text>
          <Button onPress = {() => WebBrowser.openBrowserAsync('https://ali.brighton.domains/Interface/admin/papages.php')}></Button>
       </View> */}
      
       </View>
       </View>
       </View>
      
      
       
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
    },
    container1: {
      flex: 1,
      backgroundColor: '#000',
      alignItems: 'flex-end',
      justifyContent: 'center',
    },
    container2: {
      flex: 1,
      backgroundColor: '#fff',
      //marginLeft: 0,
      alignItems: 'center',
      justifyContent: 'center',
    },
    box: {
      width: 1024,
      paddingTop: 80,
      paddingRight: 20,
      justifyContent: 'center',
    },
    
    Logo: {
        height: 80,
        alignItems: 'center',
    },
    
    IconStyle:{
        width: 900, 
        height:900,
       //alignItems: 'center',
    },
    BoxBorder1:{
      marginTop: 10,
      //width: (width /3) -10, 
      width: '250px',
      height: '250px',
      backgroundColor: '#000',
      borderColor: '#bcba40',
      borderStyle:'dotted',
      borderRadius: 8,
      borderWidth: 1,
      marginHorizontal: 5,
      alignItems: 'center',
      justifyContent: 'center',
  
    },
  /*   BoxBorder: (height, width) => ({
        marginTop: 40,
        width: (width /2)-10, 
        height: '40%',
        borderColor: '#bcba40',
        borderStyle:'dotted',
        borderRadius: 8,
        borderWidth: 1,
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }),
     */
    v_container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#282828',
        justifyContent: 'center',
      },
    
      titleText: {
        fontFamily: 'Helvetica',
        fontSize: 20,
        fontWeight: 'bold',
        color:'#bcba40',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 58,    
      },
      image: {
        width: 320,
        height: 440,
        borderRadius: 18,
      },
  });
  