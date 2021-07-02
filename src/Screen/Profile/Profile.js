import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  Image,
  StyleSheet,
  Modal,
  Pressable
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import Feather from "react-native-vector-icons/Feather";
import Picture from "../../../Picture";




export default class Profile extends Component {
  state = {
    modalVisible: false,
    selectedImage:
      "data:image/png;base64,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",
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  };

  // openImage = async () => {
  //   let permission = await ImagePicker.requestCameraPermissionsAsync();

  //   if (permission.granted === false) {
  //     console.log("jhbfnm");
  //     return;
  //   }
  //   console.log("permissions granted ", permission);

  //   let picker = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     quality: 1,
  //   });
  //   if (picker.cancelled === true) {
  //     return;
  //   }
  //   console.log("picker", picker);
  //   this.setState({
  //     selectedImage: picker.uri,
  //   });
  //   // let picker = await ImagePicker.launchCameraAsync({
  //   //       mediaTypes: ImagePicker.MediaTypeOptions.All ,
  //   //       allowsEditing:true,
  //   //       quality:1
  //   //     })
  //   //     if(picker.cancelled === true){
  //   //       return ;
  //   //     }
  //   //      console.log("picker hu m " , picker) ;
  //   //      this.setState({
  //   //        selectedImage : picker.uri
  //   //      })
  // };

  render() {
    const { modalVisible , selectedImage } = this.state;
    return (
      <SafeAreaView>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image
            style={styles.profilesetting}
            source={{
              uri: selectedImage,
            }}
          ></Image>
        </View>
        <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <TouchableOpacity>
            <Image style={styles.cameraset} source={Picture.camera}></Image>
          </TouchableOpacity>
          {/* <TouchableOpacity onPress={() =>this.openImage()}> */}
          <TouchableOpacity onPress={this.openImage}>
            <Image style={styles.cameraset} source={Picture.gallery}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              this.setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={{ flexDirection: "row", margin: 10 }}>
                  <Image
                    style={styles.cameraset}
                    source={Picture.camera}
                  ></Image>
                  <TouchableOpacity>
                    <Image
                      style={styles.cameraset}
                      source={Picture.gallery}
                    ></Image>
                  </TouchableOpacity>
                </View>
                {/* <Text style={styles.modalText}>Hello World!</Text> */}
                <Pressable
                  style={[styles.button2, styles.buttonClose]}
                  onPress={() => this.setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
          <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => this.setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Upload Profiles</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  profilesetting: {
    height: 100,
    width: 100,
    margin: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 30,
    elevation: 2,
    marginTop:80,
    paddingLeft:50,
    paddingRight:45,
    paddingBottom:45
  },
  button2: {
    borderRadius: 20,
    padding: 20,
    elevation: 2,
    paddingLeft:80,
    paddingRight:80
  },
  buttonOpen: {
    backgroundColor: "#f2288c",
  },
  buttonClose: {
    backgroundColor: "#f2288c",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  cameraset: {
    height: 50,
    width: 50,
    margin: 10,
  },
});
 


