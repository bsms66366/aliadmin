import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View, Button } from 'react-native';
//import Button from './components/Button';

import Module102 from './components/Module102.jsx';
import ALILogo from './components/ALILogo.jsx';
//import AnatomyCourses from '../components/AnatomyCourses.jsx';
import {registerRootComponent} from 'expo';




export default function App() {

  return (
    <View style={styles.container}>
    <StatusBar style="dark" />
   <View style={styles.logo}>
   <ALILogo className="ALILogo" colour="#FAD607" background-color="#282c34" width="150" height="150"/>
 <Button></Button>

    <Button title="Next Page 1" onPress = {() => WebBrowser.openBrowserAsync('http://localhost:19006/pages/AnatomyCourses.js')}></Button> 

    <div>
          <h1>TaylorMade</h1>
          <ul className="header">
            <li><a href="/AnatomyCourses">Courses</a></li>
            <li><a href="/stuff">Stuff</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          </div>
  
  {/*  <Button
                        title="Next Page"
                        onPress={() => {
                            props.navigation.navigate("AnatomyCourses");
                        }}
                    /> */}
   
       
     
   <Text accessible={true} accessibilityLabel="Heading" style={styles.titleText}>Anatomy Laboratory Interface Admin </Text>
  
    

 </View> 
 
 </View>


); 

}

//const Stack = createNativeStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});
