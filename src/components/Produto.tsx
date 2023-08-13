import { Chivo_700Bold } from "@expo-google-fonts/chivo";
import { Inter_700Bold } from "@expo-google-fonts/inter";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Produto(props) {
    return(
        <TouchableOpacity activeOpacity={0.5} style={{flexDirection: 'row', backgroundColor: '#FFFFFF', borderRadius: 15, justifyContent: "space-between", marginTop: 15 ,padding: 15, shadowColor: '#000',shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.25, shadowRadius: 4}}>
            <View style={{justifyContent: "space-between"}}>
                <Text style={{fontSize: 20, fontWeight:"700", fontFamily:'Inter_700Bold'}}>
                    {props.nome_do_produto}
                </Text>
                <View style={{flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
                    <Image source={require('../assets/FireIcon.png')} />
                    <Text>
                        {props.calorias} Calorias
                    </Text>
                </View>
                <Text style={{fontSize: 20, fontWeight: 'bold', fontFamily: 'Chivo_700Bold', color: '#FDCC21'}}>
                    R$ {props.valor}
                </Text>
            </View>
            <View>
                <Image style={{width: 100, height: 100}} source={{uri: props.ImagePath}} />
            </View>
        </TouchableOpacity>
    );
}