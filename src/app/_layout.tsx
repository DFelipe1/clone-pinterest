import { Slot } from "expo-router";
import { StatusBar } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SplashScreen from "expo-splash-screen"

import {
    useFonts,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
} from '@expo-google-fonts/roboto'

// Essa função faz com que a tela de splash contunye na tela
SplashScreen.preventAutoHideAsync()

export default function Layout(){

    // Pega as fontes que vamos usar no projeto
    const [ fontsLoaded ] = useFonts({
        Roboto_400Regular,
        Roboto_500Medium,
        Roboto_700Bold,
    })

    if(fontsLoaded){
        // sai da tela de splash quando as fontes forem carregadas
        SplashScreen.hideAsync()
    }

    return (
        // o elemento 'GestureHandlerRootView' servirá para colocar-mos gestos no aplicativo, ele deve englobar todo o app
        <GestureHandlerRootView style={{ flex: 1}}>
            <StatusBar barStyle='light-content' />
            {/* esse elemento é responsavel pela renderização das tabs */}
            {fontsLoaded && <Slot/>}
        </GestureHandlerRootView>
    )
}