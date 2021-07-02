import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
  FlatList,
  TouchableOpacity
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Picture from "../../../Picture";
import Homecheck from "../../Component/Homecheck";







export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      blankCartArray: [],
      productsArray: [
        {
          id: 0,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: Picture.dp2,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 1,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: Picture.dp3,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 2,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: Picture.dp4,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 3,
          name: "RED TAPE",
          text: "Checked Tshirt",
          image: Picture.dp5,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 4,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp6,
          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 5,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp7,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 6,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp8,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 7,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp9,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 8,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp10,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 9,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp9,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 10,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp8,

          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 11,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp7,
          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 12,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp6,
          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
        {
          id: 13,
          name: "RED TAPE",
          text: "Checked shirt",
          image: Picture.dp5,
          Price: "Rs 2599",
          reducedPrice: "Rs 650",
          discount: "75%",
          quant: 1,
        },
      ],
      selectedItem: "",
    };
  }

  // _onNextScreen = (id) => {
  //   const { navigation } = this.props;
  //   const { productsArray } = this.state;
  //   let newArray = [...productsArray];
  //   navigation.navigate(navigationStrings.SHIRTDETAILS, {
  //     selectedItem: newArray[id],
       
  //   });
   
  // };
  
  // _onClickCart = (id) => {
  //       console.log(id);

  //        const { productsArray, data, blankCartArray, count } = this.state;

  //        let cartArray = [...productsArray];
  //        if (!blankCartArray.includes(cartArray[id])) {
  //          let tempArray=[...blankCartArray,cartArray[id]]
  //          this.setState({
  //            count: count + 1,
  //           blankCartArray:tempArray,
  //          })
  //        }

  
  // };
  

  render() {
    const { productsArray, item, count } = this.state;
    const { navigation } = this.props;

    return (
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Image style={styles.imageStyle} source={Picture.m1} />
          <Image style={styles.imageStyle} source={Picture.dp1} />

          <View style={{ flexDirection: "row" }}>
            <Image style={styles.imageStyle} source={Picture.m2} />
            <Image style={styles.imageStyle} source={Picture.m3} />
            <Image style={styles.imageStyle} source={Picture.m4} />
            <TouchableOpacity onPress={this.checkCart}>
              <Image style={styles.imageStyle} source={Picture.m5} />
            </TouchableOpacity>
            <Text
              style={{
                color: "#f2288c",
                marginLeft: -8,
                marginTop: 2,
                marginRight: 3,
              }}
            >
              {count}
            </Text>
          </View>
        </View>

        <ScrollView horizontal={true}>
          <View style={{ flexDirection: "row" }}>
            <Image style={styles.myimage} source={Picture.r1} />
            <Image style={styles.myimage} source={Picture.r2} />
            <Image style={styles.myimage} source={Picture.r3} />
            <Image style={styles.myimage} source={Picture.r4} />
            <Image style={styles.myimage} source={Picture.r5} />
            <Image style={styles.myimage} source={Picture.r6} />
            <Image style={styles.myimage} source={Picture.r7} />
          </View>
        </ScrollView>

        <ScrollView>
          <Image
            style={{ height: 300, width: 400, margin: 10 }}
            source={Picture.w1}
          />

          <FlatList
            data={productsArray}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            keyExtractor={(item) => item.id}
            ItemSeparatorComponent={() => <View style={{ marginBottom: 10 }} />}
            renderItem={({ item }) => (
              <Homecheck
                data={item}
                // _onNextScreen={this._onNextScreen}
                // _onClickCart={this._onClickCart}
                // quantityIncrement={this.quantityIncrement}
               
              />
              
            )}
          />
        </ScrollView>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  forlogoHeading: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  imageStyle: {
    height: 25,
    width: 25,
    marginBottom: 20,
    margin: 10,
  },
  textInput: {
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    maxHeight: 50,
    borderRadius: 12,
    marginLeft: 32,
  },
  inputField: {
    padding: 8,
  },
  header: {
    flex: 2,
    backgroundColor: "#f0f4f7",
    justifyContent: "space-around",
  },
  myimage: {
    height: 120,
    width: 100,
    borderRadius:100
    
   
  }
});
