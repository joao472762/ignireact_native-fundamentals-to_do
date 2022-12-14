import { View } from 'react-native';
import { Home } from './src/Screens/Home';
import { StatusBar } from 'expo-status-bar';
import {Inter_400Regular, Inter_700Bold,} from '@expo-google-fonts/inter';

import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { useEffect, useCallback, useState } from 'react';




export default function App() {
  const [appIsReady, setAppisReady] = useState(false)

  useEffect(() => {
    async function  prepare() {
      try{
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Inter_400Regular,
          Inter_700Bold,
         
        })
      }
      catch(error){
        console.error(error)
      }
      finally{
        setAppisReady(true)
      }
    }
    prepare()
  },[appIsReady])

  const onLayoutRootView = useCallback(async () => {
    if(appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }


  return (
    <View onLayout={onLayoutRootView} style={{flex: 1}}>
      <StatusBar
        backgroundColor = 'transparent'
        translucent 
        style="light" 
      />
  
      <Home/>
    </View>

  );
}

