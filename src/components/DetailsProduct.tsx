import { Text, View } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Hamburguer2 from '../assets/images/Hamburguer2.svg'
import AmountButton from "./AmountButton";


export default function DetailsProduct() {
    return(
        <>
            <LinearGradient colors={['rgba(253, 204, 33, 0.10)', 'rgba(234, 196, 66, 0.09)', 'rgba(244, 221, 138, 0.08)', 'rgba(198, 179, 114, 0.00)']}
                            className="w-full h-[313] rounded-2xl mt-8">
                <Text className="mt-5 ml-5 text-xl font-bold">
                    Hamburguer
                </Text>
                <View className="mx-auto mt-5">
                    <Hamburguer2 transform="rotate(180 133.5 123)"/>
                </View>
            </LinearGradient>
                <View className="mt-5 flex 1 flex-row justify-between items-center">
                    <AmountButton />
                    <Text className="mt-1 text-4xl font-chivo_bold">
                        R$ 15.00
                    </Text>
                </View>
        </>
        
        )
}
