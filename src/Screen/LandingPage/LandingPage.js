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
import navigationStrings from "../../constants/navigationStrings";


export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar animated={true} backgroundColor="white" hidden={false} />
        <View style={styles.landingScreen}>
          <View style={styles.forFlex}>
            <Image
              style={styles.dpLogo}
              source={{
                uri:
                  "http://i-am-girly.com/wp-content/uploads/2015/05/MYNTRA-FINAL-4.jpg",
              }}
            />
          </View>

          <View style={styles.logo}>
            
            <TouchableOpacity
              style={styles.buttonStyle}
               onPress={() => this.props.navigation.navigate(navigationStrings.LOGIN)
              }
            >
              <Text style={{ color: "#e3e3e3", fontWeight: "bold", fontSize:20 }}>
                Log In
              </Text>
            </TouchableOpacity>
           
          </View>
        </View>
      </SafeAreaView>
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
   width:250,
    height: 250,
    marginBottom:20,
    resizeMode:'contain'
   
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
    marginBottom:140,
   

  },
});
