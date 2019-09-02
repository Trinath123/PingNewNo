import React, { Component } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Image,
  Share,
  Linking,
} from 'react-native';

import logo from './images/icon.png';
import { showMessage } from 'react-native-flash-message';
import shareimage from './images/share.png';

export default class MainScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'WhatsApp Msg to Unsaved Number',
      headerStyle: {
        backgroundColor: '#87CEEB',
        height: 80,
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        flex: 1,
        fontWeight: 'bold',
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      userPhone: '91',
    };
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'https://play.google.com/store/apps/details?id=com.adpro.whatsappnewno'
      });

      if (result.action === Share.sharedAction) {
        if (result.activityType) {
        } else {
        }
      } else if (result.action === Share.dismissedAction) {
      }
    } catch (error) {
      alert(error.message);
    }
  };

  open = () => {
    var phone = this.state.userPhone;
    if (phone.length <= 2) {
      showMessage({
        message: 'Please enter Mobile Number',
        type: 'warning',
      });
    }
    else if (phone.length < 10) {
      showMessage({
        message: 'Please enter Correct Mobile Number',
        type: 'warning',
      });
    }
    else {
      if (phone.length === 10) {
        phone = '91' + phone;
      }
      Linking.openURL('https://api.whatsapp.com/send?phone=' + phone);
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior="padding" style={styles.container}>
        <StatusBar backgroundColor="#283f78" barStyle="light-content" />
        <ScrollView>
          <View style={styles.loginArea}>
            <View style={{ height: 50 }} />
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
              <Image source={logo} />
            </View>
            <View style={{ height: 40 }} />
            <View style={styles.emailContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Phone"
                placeholderTextColor='#87CEEB'
                onChangeText={userPhone => this.setState({ userPhone })}
                keyboardType="number-pad"
                value={this.state.userPhone}
              />
            </View>
            <View style={styles.emailContainer1}>
              <Text>(e.g.91##########)</Text>
            </View>
            <TouchableOpacity onPress={this.open}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Send Message</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.bottomView}>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 0.8 }}>
              <Text style={{ color: '#fff', fontSize: 18 }}>By Adpro Technologies</Text>
            </View>
            <TouchableOpacity onPress={this.onShare}>
              <Image source={shareimage}  />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },

  loginArea: {
    padding: 5,
    flex: 1,
  },
  logoContiner: {
    height: 200,
    width: 200,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 25,
    color: '#5B5A5A',
    letterSpacing: 6,
  },
  textInput: {
    width: '80%',
    color: '#87CEEB',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 18,
    alignSelf: 'center',
  },
  button: {
    width: '80%',
    borderColor: '#87CEEB',
    borderWidth: 2,
    height: 50,
    padding: 7,
    borderRadius: 30,
    marginTop: 30,
    backgroundColor: '#1273de',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 80,
    marginStart: 30,
    shadowColor: '#87CEEB',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 20,
    shadowRadius: 30,
    elevation: 12,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  emailContainer: {
    width: '80%',
    height: 50,
    flexDirection: 'row',
    alignContent: 'center',
    marginStart: 30,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: '#87CEEB',
    paddingLeft: 15,
  },
  emailContainer1: {
    flexDirection: 'column',
    marginStart: 30,
    paddingLeft: 15,
  },
  content: {
    flexGrow: 1,
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomView: {
    width: '100%',
    height: 80,
    backgroundColor: '#87CEEB',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});
