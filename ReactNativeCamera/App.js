/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';

import { RNCamera } from "react-native-camera";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class App extends React.Component {

  takePicture = async () => {
    if(this.camera){
      const options = { quality: 0.8, base64: true};
      const data = await this.camera.takePictureAsync(options);
      alert(data.uri);
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={camera => {
            this.camera = camera
          }}
          style = {styles.preview}
          type={RNCamera.Constants.Type.front}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camerra phone'}
        />
        <View style={styles.buttonContainer}>

          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Image
              style={styles.buttonImg}
              source={ require('../ReactNativeCamera/src/img/1_titulo.png')}
            />
            
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#272526',
  },

  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  buttonContainer: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },

  capture: {
    flex: 0,
    backgroundColor: 'yellow',
    borderRadius: 5,
    padding: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    margin: 20,
  },

  buttonImg: {
    width: 50,
    height:50,
  },
 
});
