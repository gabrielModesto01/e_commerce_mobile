import { StyleSheet, View } from "react-native";
import SearchBar from "../components/SearchBar";
import ListaDeProdutos from "../components/ListaDeProdutos";

export default function Home() {
    return(
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <SearchBar />
                <ListaDeProdutos />
            </View>
        </View>
    )
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