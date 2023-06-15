import { StatusBar } from "expo-status-bar";
import { useRef, useState } from "react";
import { Popable } from "react-native-popable";
import Tooltip from "./src/Tooltip";
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacityComponent,
  View,
} from "react-native";

const Dummy2 = () => {
  return (
    <View>
      <Text>Dummy2</Text>
    </View>
  );
};
export default function App() {
  const handleDummyClick = (coords) => {
    console.log("Clicked Dummy:", coords);
  };

  return (
    <View style={styles.container}>
      <Tooltip
        overlayColor="red"
        withPointer={false}
        popover={
          <View style={{ backgroundColor: "red" }}>
            <Text>Info here</Text>
          </View>
        }
      >
        <View
          style={{
            border: 1,
            borderRadius: 5,
            padding: 10,
            backgroundColor: "#fff",
            width: 200,
          }}
        >
          <Text>Press me</Text>
        </View>
      </Tooltip>

      <Tooltip
        overlayColor="red"
        withPointer={false}
        containerStyle={{
          height: 20,
          paddingTop: 10,
        }}
        width="90%"
        popover={
          <View style={{ backgroundColor: "red" }}>
            <Text>Info here</Text>
          </View>
        }
      >
        <View
          style={{
            border: 1,
            borderRadius: 5,
            padding: 10,
            backgroundColor: "#fff",
            width: 200,
          }}
        >
          <Text>Press me1</Text>
        </View>
      </Tooltip>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    paddingTop: 202,
  },
  scrollView: {
    height: 900,
  },
  scrollViewContent: {
    flexDirection: "column",
  },
});
