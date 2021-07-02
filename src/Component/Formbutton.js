import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function Formbutton(props) {
  const { onButtonPress,  buttonName, text,mytext,style } = props;
  let check=false;
  return (
    <View style={styles.textInput}>
      <TouchableOpacity
        onPress={() => onButtonPress()}
        style={[styles.buttonStyle, style]}
      >
        <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>{buttonName}</Text>
      
        
       
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => onButtonPress()}
        style={styles.addtocart}
      >
       
        <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>{mytext}</Text>
      </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    justifyContent: "center",
    margin: 15,
  },
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
  

});
