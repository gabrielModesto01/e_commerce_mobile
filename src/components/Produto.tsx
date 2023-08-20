import { Chivo_700Bold } from "@expo-google-fonts/chivo";
import { Inter_700Bold } from "@expo-google-fonts/inter";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from '@react-navigation/native';


interface Product {
    nome_do_produto: string;
    calorias: number;
    ImagePath: string;
    amount: number;
    price: number;
}


export default function Produto(props: Product ) {
    
    const { navigate } = useNavigation();

    return(
        <TouchableOpacity activeOpacity={0.5}
                          onPress={() => navigate('productDetails')} 
                          style={{flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 15, justifyContent: "space-between", marginTop: 15 ,padding: 15}}>
            <View style={{justifyContent: "space-between"}}>
                <Text style={{fontSize: 20, fontWeight:"700", fontFamily:'Inter_700Bold'}}>
                    {props.nome_do_produto}
                </Text>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <Image source={require('../assets/png/FireIcon.png')} />
                    <Text>
                        {props.calorias} Calorias
                    </Text>
                </View>
                <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Chivo_700Bold', color: '#FDCC21'}}>
                    {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(props.price)}
                </Text>
            </View>
            <View>
                <Image style={{width: 100, height: 100, borderRadius: 15}} source={{uri: props.ImagePath}} />
            </View>
        </TouchableOpacity>
    );
}