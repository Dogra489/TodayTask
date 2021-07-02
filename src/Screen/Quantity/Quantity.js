
import React, { Component } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  FlatList,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import Homecheck1 from "../../Component/HomeCheck1";
import navigationStrings from "../../constants/navigationStrings";




export default class ShirtDetails extends Component {
  constructor(props) {
    super(props);
  }
  quantityIncrement = (id) => {
 
      const {data}=this.props.route.params
    
  let checkArray = [...data];
  
  const quantityindex = checkArray.findIndex((item) => item.id === id);
  
  let finalquantity = checkArray[quantityindex];
  
  finalquantity.quant += 1;

 
  this.setState({
    data: finalquantity,
  });

  console.log(data)

  
};

  render() {
   
 const {data } = this.props.route.params;
    return (
      <View>
        <FlatList
          data={data}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
          renderItem={({ item }) => (
            <>
              <Homecheck1
                data={item}
                quantityIncrement={this.quantityIncrement}
              />
              
            </>
          )}
        />
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
    margin: 50,
  },
});

