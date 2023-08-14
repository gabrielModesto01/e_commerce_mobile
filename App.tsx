import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { Chivo_700Bold } from '@expo-google-fonts/chivo';
import { StatusBar } from "expo-status-bar";

import { Routes } from './src/routes';


export default function App() {
 const [fontsLoaded] = useFonts({
  Inter_400Regular,
  Inter_700Bold,
  Inter_600SemiBold,
  Chivo_700Bold
 });

 if (!fontsLoaded) {
  return;
 }

 return (
  <>
    <Routes />
    <StatusBar />
  </>
  );
}