import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import Formbutton from "../Component/Formbutton";
import navigationStrings from "../constants/navigationStrings";



export default class ShirtDetails extends Component {
  constructor(props) {
    super(props);
  }

  

  render() {
    console.log(this.props);
    const { selectedItem } = this.props.route.params;

    return (
      <View>
        <Image
          style={{ height: 300, width: 160 }}
          source={selectedItem.image}
        />
        {/* <Formbutton onPress={this.onPress} /> */}
        {/* <Text>{selectedItem.id}</Text> */}
        <View style={styles.textInput}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate(navigationStrings.HOME, {
                itemInfo: selectedItem.id,
              })
            }
            style={styles.buttonStyle}
          >
            <Text style={{ color: "#e3e3e3", fontWeight: "bold" }}>
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  landingScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  forFlex: {
    flex: 0.7,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  dpLogo: {
    width: 250,
    height: 250,
  },
  logo: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  buttonStyle: {
    backgroundColor: "#f2288c",
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "center",
    margin:50
  },
});
