import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import Entypo from "react-native-vector-icons/Entypo";
import COLORS from "../constants"
const LoginScreen = () => {
     const rgbaColor = "rgba(94, 159, 163, 0.90)";
  const Spacing = 10;
    const [isPasswordFocused, setIsPasswordFocused] = useState(false);
  const [password, setPassword] = useState();
  /*Setting up the useState for Email and Password*/
  const [email, setEmail] = useState("");
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ScrollView style={{ backgroundColor: "#22272b" }}>
        <SafeAreaView style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("../assets/logincar.png")}
              style={styles.image}
              resizeMode="contain" // Adjust this to your preference
            />
          </View>
          <View>
            <Text style={styles.welcome}>Welcome to Ridezilla</Text>
          </View>
          <View>
            <Text style={styles.txt}>Login to your account</Text>
          </View>
          <View style={styles.username}>
            <MaterialIcons
              name="email"
              size={20}
              color={rgbaColor}
              style={{ marginRight: 5, paddingTop: 12 }}
            />
            <TextInput
              style={{ fontFamily: "new", flex: 1,  color: email ? '#fff' : rgbaColor }}
              placeholder="Enter your email"
              placeholderTextColor={"#fff"}
              onChangeText={(email) => setEmail(email)}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={styles.username}>
            <Ionicons
              name={
                isPasswordFocused || password
                  ? "lock-open-sharp"
                  : "lock-closed"
              }
              size={20}
              color={rgbaColor}
              style={{ marginRight: 5, paddingTop: 12 }}
            />
            <TextInput
              style={{ fontFamily: "new" , color: password ? "#fff" : rgbaColor}}
              placeholder="Enter your Password"
              placeholderTextColor={"#fff"}
              onChangeText={(text) => {
                setPassword(text);
                setIsPasswordFocused(true);
                (password) => setPassword(password);
              }}
              onFocus={() => setIsPasswordFocused(true)}
              onBlur={() => setIsPasswordFocused(false)}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={true} // To hide the password characters
            />
          </View>
          <View>
            <TouchableOpacity onPress={{}}>
              <Text
                style={{
                  fontFamily: "new",
                  fontSize: 13.5,
                  color: "#ffbc07",
                  alignSelf: "flex-end",
                  marginLeft: 140,
                  marginTop: 5,
                }}
              >
                Forgot your password?
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <TouchableOpacity
              onPress={() => loginUser(email, password)}
              style={{
                backgroundColor: "#ffbc07",
                marginVertical: Spacing + 2,
                borderRadius: 20,
                width: 123,
                height: 46,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontFamily: "new2",
                  fontSize: 24,
                  textAlign: "center",
                  paddingTop: 4,
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", flex: 1 }}>
            <Text style={{ fontFamily: "new2", fontSize: 17, color: "#fff" }}>
              Don't have an account ?{" "}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Register")}
              style={{}}
            >
              <Text
                style={{
                  fontFamily: "new",
                  color: "#ffbc07",
                  fontSize: 17,
                  textDecorationLine: "underline",
                }}
              >
                Create
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ScrollView>
    </GestureHandlerRootView>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: 283,
    height: 283,
  },
  welcome: {
    fontFamily: "new",
    fontSize: 22,
    marginBottom: 5,
    marginTop: 5,
    color: "#fff"
  },
  txt: {
    fontFamily: "new2",
    fontSize: 18,
    marginRight: 95,
    marginBottom: 8,
    color: "#fff"
  },
  username: {
    flexDirection: "row",
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 8,
    borderRadius: 20,
    backgroundColor: "#101010", // White background
    shadowColor: "rgba(0, 0, 0, 0.3)", // Shadow color with opacity
    shadowOffset: {
      width: 0,
      height: 0, // Y-axis shadow offset
    },
    shadowOpacity: 1, // Full opacity
    shadowRadius: 4, // Shadow radius of 20px
    elevation: 4, // Android elevation for shadow
    width: 319,
    height: 48,
  },
  line: {
    width: "100%", // Adjust the width as needed
    height: 1, // Adjust the height to set the thickness of the line
    backgroundColor: "black", // Change the color as needed
  },
});

export default LoginScreen