// skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => Bananas);
import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import SignUpScreen from './screens/SignUpScreen';


export default class App extends Component {
  render(){
    return (
      <View style={styles.container}>
        <SignUpScreen />
      </View>
    );
  }
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('AprendiendoReactNative', () => AprendiendoReactNative);
