import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlice";

// ES7 React <- extension

// tailwind react native classnames
// https://github.com/leobauza/react-native-tailwind-classnames
// tailwind and normal styles(or inline styles) can be combined with array!

// reset cache when babel makes troubles(@env)
// yarn start --reset-cache
// expo r -c

// text should be located in the safe area!
const HomeScreen = () => {
  const dispatch = useDispatch(); // shoot dispatch to change something on data layer

  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      {/* <Text style={[tw`text-red-500 p-10`, styles.text]}>I am the homescreen</Text> */}
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            url: "https://links.papareact.com/gzs",
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          onPress={(data, details = null) => {
            // change values on data layer with dispatch function
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"} // cmd+k on iphone simulator
          enablePoweredByContainer={false}
          minLength={2}
          //   query={{
          //     key: GOOGLE_MAPS_APIKEY,
          //     language: "en",
          //   }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    color: "blue",
  },
});
