/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, Image, Button} from 'react-native';

import * as FileSystem from 'expo-file-system';

const foo = require('./assets/images/photo1.jpg');
const fooURI = Image.resolveAssetSource(foo).uri;

console.log('FooURI: ' + fooURI);
const App: () => React$Node = () => {
  const [imageDownloaded, setImageDownloaded] = useState(0);
  const docDir = FileSystem.documentDirectory;
  const localFile = 'file://' + docDir + 'photo1.jpg';
  let dlImage = <Text> Not defined </Text>;

  if (imageDownloaded) {
    dlImage = (
      <Image style={{height: 50, width: 50}} source={{uri: localFile}} />
    );
  } else {
    dlImage = <Text> No Image </Text>;
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button
          onPress={() => {
            console.log('Using :' + docDir);
            FileSystem.downloadAsync(fooURI, localFile)
              .then(({uri}) => {
                console.log('Finished downloading to ' + uri);
                setImageDownloaded(1);
                FileSystem.readDirectoryAsync('file://' + docDir)
                  .then((dir) => {
                    dir.forEach((val) => {
                      console.log('File: ' + val);
                    });
                  })
                  .catch(() => {
                    console.log('Error reading directory: ' + docDir);
                  });
              })
              .catch((error) => {
                console.error(error);
              });
          }}
          title="click me"
        />

        <Text> DL: {imageDownloaded} </Text>
        {dlImage}
      </SafeAreaView>
    </>
  );
};

export default App;
