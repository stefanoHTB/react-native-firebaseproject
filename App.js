/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, Text, View, } from 'react-native';
import AppNav from './src/navigation/AppNav';
import { AuthProvider } from './src/context/AuthProvider';



const App = () => {
  

  return (

    <AuthProvider>
    <AppNav />
    </AuthProvider>
   
  );
};


export default App;
