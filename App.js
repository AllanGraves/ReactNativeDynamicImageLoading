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

const DATA = [
  {
    text: "man",
    image: require('./assets/images/photo1.jpg')
  },
  {
    text: "woman",
    image: require('./assets/images/photo2.jpg')
  }
]

const App: () => React$Node = () => {
  const [imageVar, setImageVar] = useState(0);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image style={{height: 50, width: 50}} source={DATA[imageVar].image}/>
        <Text> {imageVar}: {DATA[imageVar].text} </Text>
        <Button onPress={()=> {
          imageVar == (DATA.length - 1) ? setImageVar(0) : setImageVar(imageVar + 1);
          console.log(DATA[imageVar].image);
        }}
          title="Change Pic" />
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
