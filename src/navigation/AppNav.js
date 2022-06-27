import React, {useContext, useEffect, useState} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import AppStack from './AppStack';
import { AuthContext } from '../context/AuthProvider';
import auth from '@react-native-firebase/auth';




const AppNav = () => {

  
const {user, setUser} = useContext(AuthContext);
const {initializing, setIninitializing} = useState(true);


const onAuthStateChanged = (user) => {
  setUser(user);
  if (initializing) setIninitializing(false);

}


useEffect(()=> {
  const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
  return subscriber;
}, []);


if (initializing) return null;

  return (
    <NavigationContainer>
       { user ? <AppStack /> : <AuthStack /> }
     </NavigationContainer>
  )
}

export default AppNav