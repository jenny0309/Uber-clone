import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import { store } from "./store";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

/*
View: div
Text: h1, h2...
style: className

Flexbox defaults columns!
*/

// 1. Set up redux <- Data Layer(Provide, store)

// react native navigation <- similar to router in react
// https://reactnavigation.org/docs/getting-started/
// yarn add @react-navigation/native
// expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context
// import 'react-native-gesture-handler'
// yarn add @react-navigation/native-stack <- stack pages and swipe 'em back over and over again
// use TouchableOpacity on NavOptions.js to navigate the screen

// react native google places autocomplete
// https://github.com/FaridSafi/react-native-google-places-autocomplete
// yarn add react-native-google-places-autocomplete

// use .env file
// yarn add react-native-dotenv
// add plugins in babel.config.js

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator>
            <Stack.Screen
              name="HomeScreen"
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MapScreen"
              component={MapScreen}
              options={{
                headerShown: false,
              }}
            />
          </Stack.Navigator>

          {/* <HomeScreen /> */}
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
