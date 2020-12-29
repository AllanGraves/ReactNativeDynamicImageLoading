/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {SafeAreaView, Text, StatusBar, Image, Button} from 'react-native';

/* Import the Expo File system routines so we can use the downloadAsync, readDirectoryAsync
 * calls in this code snippet.
 * https://docs.expo.io/versions/latest/sdk/filesystem/
 */
import * as FileSystem from 'expo-file-system';

/* This just sets up an easy way to get an asset included in our bundle.  
 * In reality, you wouldn't use this method as well as the local 'file://' URI.
 * You might include a bundle of assets that are unpacked on the device though.
 */
const foo = require('./assets/images/photo1.jpg');
const fooURI = Image.resolveAssetSource(foo).uri;

/* Just some informational stuff */
console.log('FooURI: ' + fooURI);
const App: () => React$Node = () => {
  /* Set up a React hook to tell when we've gotten the image downloaded.
   * We don't want to display the image before we've downloaded it.  There's nothing to display, 
   * and react will throw an error.
   */
  const [imageDownloaded, setImageDownloaded] = useState(0);
  const docDir = FileSystem.documentDirectory;
  const localFile = 'file://' + docDir + 'photo1.jpg';
  /* Yeah - we should never see this, but in the tradition of programmers everywhere, when we do see
   * it we'll know exactly where we got it from - but...   really?  Did the compiler malfunction? 
   */
  let dlImage = <Text> Not defined </Text>;

  /* Set up the Image *area* so that it has a component in it.  In a more complex app, you could display a static
   * splash screen or other progress bar as we unpacked the asset bundle and got things ready to run.
   */
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
