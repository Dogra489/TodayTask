import React, {Component} from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Formbutton from '../../Component/Formbutton';
import Inputtext from '../../Component/Inputtext';
import navigationStrings from '../../constants/navigationStrings';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholderEmail: 'Enter Mobile Number/Email',
      placeholderName: 'Full Name',
    };
  }

  onButtonPress = () => {
    this.props.navigation.navigate(navigationStrings.TAB_ROUTES);
  };

  render() {
    const {placeholderEmail, placeholderName} = this.state;
    return (
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.loginScreen}>
          <View style={styles.forFlex}>
            <Image
              style={styles.ajioLogo}
              source={{
                uri:
                  'https://images.newindianexpress.com/uploads/user/imagelibrary/2021/1/30/w1200X800/myntra_.JPG',
              }}
            />
            <Text style={{fontWeight: 'bold', fontSize: 20, color: '#0c0c0c'}}>
              Welcome to MYNTRA
            </Text>
          </View>
          <View style={styles.forForm}>
          {/* <Inputtext placeholder={placeholderName} /> */}
            <Inputtext placeholder={placeholderEmail} />
            <View
              style={{
                marginTop: 2,
                marginBottom: 20,
                marginLeft: 20,
                marginRight: 20,
              }}>
              <Text style={{marginBottom: 10}}>
                By continuing, I agree to the
              </Text>
              <Text
                style={{color: '#f2288c', marginLeft: 5, fontWeight: 'bold'}}>
                Terms of Use & Privacy Policy
              </Text>
            </View>

            <Formbutton onButtonPress={this.onButtonPress} buttonName="Login" />
            <View style={{flexDirection: 'row', marginTop: 20}}>
              <Text>Having trouble logging in?</Text>
              <Text style={{color: '#f2288c', fontWeight: 'bold'}}>
                Get help?
              </Text>
            </View>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  forFlex: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ajioLogo: {
    width: 80,
    height: 80,
  },
  fbLogo: {
    width: 20,
    height: 20,
  },
  googleLogo: {
    width: 30,
    height: 30,
  },
  forForm: {
    flex: 0.6,
    alignItems: 'center',
  },
  orThing: {
    flexDirection: 'row',
  },
  buttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  fbbuttonStyle: {
    borderWidth: 1,
    padding: 15,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
  },
  googlebuttonStyle: {
    borderWidth: 1,
    padding: 10,
    width: 250,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 10,
  },
});
