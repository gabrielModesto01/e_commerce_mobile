import { StatusBar } from 'expo-status-bar';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import { useFonts, Inter_400Regular, Inter_700Bold, Inter_600SemiBold } from '@expo-google-fonts/inter'
import { Chivo_700Bold } from '@expo-google-fonts/chivo';
import  SearchBar  from './src/components/SearchBar'
import Produto from './src/components/Produto'
import ListaDeProdutos from './src/components/ListaDeProdutos';

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
    <View style={styles.container}>
     <StatusBar />
     <View style={styles.wrapper}>
      <SearchBar />
      <ListaDeProdutos />
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },

  wrapper: {
   marginHorizontal: 15,
   marginTop: 32,
   height: '100%',
   backgroundColor: '#E0E0E0',
  },
});