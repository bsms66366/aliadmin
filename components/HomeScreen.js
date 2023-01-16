// Homescreen.js
import React from "react";
import { StyleSheet, View, Pressable, Text } from 'react-native';
//import { Button, View, Text } from "react-native";
/*import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


 import HomeScreen from "./components/HomeScreen";
import AboutScreen from "./components/AboutScreen"; */


const Stack = createNativeStackNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
    
      <Text>Home Screen</Text>
      <ALILogo className="ALILogo" colour="#FAD607" background-color="#282c34" width="150" height="150"/>
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
      
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
  titleText: {
    fontFamily: 'Helvetica',
    fontSize: 20,
    fontWeight: 'bold',
    color:'#bcba40',
  },
});