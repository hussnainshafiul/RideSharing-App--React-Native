import { StatusBar } from "expo-status-bar";
import { useCallback } from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useFonts } from "expo-font";
import { NavigationContainer } from "@react-navigation/native";
import OnboardingScreen from "./Screens/OnboardingScreen";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import LoginScreen from "./Screens/LoginScreen";

const Stack = createStackNavigator(); // Use createStackNavigator

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extrabold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    semibold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    new: require("./assets/fonts/ArefRuqaa-Bold.ttf"),
    new2: require("./assets/fonts/ArefRuqaa-Regular.ttf"),
    kenia: require("./assets/fonts/Kenia-Regular.ttf"),
  });

  {
    /* */
  }
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
           name="OnboardingScreen"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

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
