import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import Formbutton from "./Formbutton";


export default function Homecheck1(props) {
  const {
    data,
   
    quantityIncrement,
  } = props;

  

  return (
    <View style={{ justifyContent: "space-between", margin: 10 }}>
      <Image style={styles.card} source={data.image} />

      <TouchableOpacity
        onPress={() => {
          quantityIncrement(data.id);
        }}
        style={styles.buttonStyle}
      >
        <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>Quantity</Text>
        <Text>:</Text>
        <Text style={{ marginLeft: 5, marginTop: 1, color: "#e3e3e3" }}>
          {data.quant}
        </Text>
      </TouchableOpacity>
     

      {/* <View style={{ flexDirection: "row" }}>
        <View style={styles.textInput}>
          { <TouchableOpacity
            onPress={() => onPress()}
            style={styles.buttonStyle}
          >
            <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
              Quantity
            </Text>
            <Text>:</Text>

          </TouchableOpacity> }
        </View>
      </View> */}
    </View>
  );
}
const styles = StyleSheet.create({
  card: {
    height: 300,
    width: 160,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 10,
    width: 80,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    marginRight:50,
   
    marginTop: 10,
  },
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
    flexDirection:'row'
  },
  // buttonStyle: {
  //   backgroundColor: "#f2288c",
  //   padding: 15,
  //   width: 100,
  //   borderRadius: 8,
  //   flexDirection: "row",
  //   justifyContent: "center",
  // },
});
