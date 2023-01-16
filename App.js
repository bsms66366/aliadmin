import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Linking, StyleSheet, Text, View, Button } from 'react-native';
import { A } from '@expo/html-elements'
//import * as Linking from 'expo-linking';
//import Button from './components/Button';

import Module102 from './components/Module102.jsx';
import ALILogo from './components/ALILogo.jsx';
//import AnatomyCourses from '../components/AnatomyCourses.jsx';
//import {registerRootComponent} from 'expo';

/* const redirectUrl = Linking.createURL('path/into/app', {
  queryParams: { hello: 'world' },
}); */


export default function App() {

  return (
    <View style={styles.container}>
    <StatusBar style="dark" />

   <View style={styles.logo}>
   <ALILogo className="ALILogo" colour="#FAD607" background-color="#282c34" width="150" height="150"/>
 <Button></Button>

    {/*  <Button title="Next Page 1" onPress = {() => WebBrowser.openBrowserAsync('http://localhost:19006/pages/Courses.js')}></Button> 
  
  <Button
                        title="Next Page"
                        onPress={() => {
                            props.navigation.navigate("AnatomyCourses");
                        }}
                    /> */}
   
       
     
   <Text accessible={true} accessibilityLabel="Heading" style={styles.titleText}>Anatomy Laboratory Interface Admin </Text>
   <Text
          accessibilityRole="link"
          href="http://localhost:19006/pages/AnatomyModules.js"
          hrefAttrs={{
            target: '_blank'
          }}
          style={styles.titleText2}
        >
          Modules
        </Text>

        <Text
          accessibilityRole="link"
          href="http://localhost:19006/pages/AnatomyCourses.js"
          hrefAttrs={{
            target: '_blank'
          }}
          style={styles.titleText2}
        >
          Courses
        </Text>

        <Text
          accessibilityRole="link"
          href="http://localhost:19006/pages/AnatomyResources.js"
          hrefAttrs={{
            target: '_blank'
          }}
          style={styles.titleText2}
        >
          Resources
        </Text>

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
  titleText2: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#3399CC',
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
});
