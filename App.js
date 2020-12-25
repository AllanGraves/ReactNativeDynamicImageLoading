/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Alert
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const DATA = '{ "image1":  { "text": "man", "image": "./assets/images/photo1.jpg" }, "image2":  {    "text":"woman",    "image":"./assets/images/photo2.jpg"  }}';
const parsedData = JSON.parse(DATA);
const imgObjects = [];   
const foo = require("./assets/images/photo1.jpg");

const App: () => React$Node = () => {
  const [imageVar, setImageVar] = useState(0);
  console.log(DATA);

  
  /*
  const images = {};
  require('require-context/register')

  function importAll (r) {
    r.keys().forEach(key => images[key] = r(key));
  }
  
  importAll(require.context('./assets/images', true, /\.jpg$/));
*/

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image style={{height: 50, width: 50}} source={parsedData[imageVar].image}/>
        <Text> {imageVar}: {parsedData[imageVar].text} </Text>
        <Button onPress={()=> {
          imageVar == (parsedData.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
          console.log(parsedData[imageVar].image);
        }}
          title="Change Pic" /> 
          <Text>Here</Text>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
