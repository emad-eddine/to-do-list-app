import { Stack } from 'expo-router'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen"
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync()

function layout(){

   const [fontsLoaded, fontError] = useFonts({
    "OS_LIGHT" : require("./assets/fonts/OpenSans-Light.ttf"),
    "OS_REGULAR" : require("./assets/fonts/OpenSans-Regular.ttf"),
    "OS_MEDIUM" : require("./assets/fonts/OpenSans-Medium.ttf"),
    "OS_BOLD"  : require("./assets/fonts/OpenSans-Bold.ttf"),
    "OS_EXTRA_BOLD" : require("./assets/fonts/OpenSans-ExtraBold.ttf")

   });

   const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <Stack>
        <Stack.Screen name='index' options={{
            headerShown:false
        }}/>
    </Stack>
  )
}
export default layout