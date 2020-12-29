# ReactNativeDynamicImageLoading
# Introduction

This project goes with the following Medium Article: https://allangraves.medium.com/using-images-in-react-native-668e3a835858

It is an exploration in the ways we can load images using React Native.  My goal was to load images directly from JSON, but unfortunately,
I did not find a way to do that.  Instead, I wound up going with a bundle of assets that I then unpack, and load images from JSON that way.

It contains 3 branches:

1. ArrayBasedImages - Array Based image loading
2. LocalFiles - loading local files with URIs
3. JSONImages - which is several different attempts to load images directly from JSON.  Nothing worked, merely for illustration purposes.

# Getting Started

1. git clone this repo.
2. npm install to install dependencies.
3. Run the app on your simulator. For more help: https://reactnative.dev/docs/environment-setup
