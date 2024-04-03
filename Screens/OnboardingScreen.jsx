import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import React from 'react'
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
    const navigation= useNavigation();
  return (
    <View style={styles.container}>
      <Image source={require("../assets/ridelogo.png")} style={{}} />

      <View>
        <Image
          source={require("../assets/carlogo.png")}
          resizeMode="contain"
          style={styles.carimage}
        />
      </View>

      <ImageBackground
        source={require("../assets/OBJECTS.png")}
        style={styles.backgroundImg}
      >
        <Text style={styles.text1}>
          Wherever life takes you, whether near or far, simply book our car ride and
          embark on a journey ,creating memories
          to cherish along the way
        </Text>
        <View>
          <Text style={styles.text}>Book a Ride:</Text>
        </View>
      </ImageBackground>
      <StatusBar style="auto" />
      <View style={{ bottom: 100, left: 120 }}>
      <TouchableOpacity onPress={()=> navigation.navigate("LoginScreen")}>
        <AntDesign name="forward" size={30} color={"#ffbc07"} />
      </TouchableOpacity>
        
      </View>
    </View>
  )
}

export default OnboardingScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22272b",
    alignItems: "center",
    justifyContent: "center",
  },
  carimage: {
    marginBottom: 310,
    marginTop: 0,
  },
  backgroundImg: {
    position: "absolute",
    height: "70%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
    bottom: 0,
    flexDirection: "column-reverse",
  },
  text: {
    top: 60,
    marginBottom: 60,
    color: "#ffbc07",
    fontSize: 29,
    left: 30,
    fontFamily: "extrabold",
  },
  text1: {
    color: "#fff",
    fontSize: 15,
    left: 10,
    fontFamily: "medium",
    textAlign: "center",
  },
});
