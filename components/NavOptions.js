import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { selectOrigin } from "../slices/navSlice";

// react native components <- just like material ui in react
// https://reactnativeelements.com/docs
// yarn add react-native-elements
// yarn add react-native-vector-icons
// yarn add react-native-safe-area-context <- for the icons <- import this on App.js

const data = [
  {
    id: "123",
    title: "Get a ride",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "456",
    title: "Order food",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", // Change in future...
  },
];

// delete this variable if Google API Key is available
const origin = {
  location: {
    lat: 49.2606052,
    long: -123.2481825,
  },
  description: "University of British Columbia, BC, Canada",
};
//   const origin = null;  // if origin is not set, the buttons are unclickable!
const destination = {
  location: {
    lat: 49.3428609,
    long: -123.1171131,
  },
  description: "Capilano Suspension Bridge Park, BC, Canada",
};

// FlatList <- take array(or list of items) and render each object(or item)
// TouchableOpacity <- touch and drag each option vertically on mobile screen
const NavOptions = () => {
  const navigation = useNavigation();
  //   const origin = useSelector(selectOrigin);

  return (
    <FlatList
      data={data}
      horizontal
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
          disabled={!origin}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ url: item.image }}
            />
            <Text style={tw`mt-2 text-lg font-semibold`}>{item.title}</Text>
            <Icon
              style={tw`p-2 bg-black rounded-full w-10 mt-4`}
              name="arrowright"
              color="white"
              type="antdesign"
            />
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;

const styles = StyleSheet.create({});
