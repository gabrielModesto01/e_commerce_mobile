import { Text, View, Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import Hamburguer2 from '../assets/images/Hamburguer2.svg'
import AmountButton from "./AmountButton";
import { useState } from "react";



export default function DetailsProduct(props) {
    const [productAmount, setProductAmount] = useState();

    function handleAmountChange(newAmount) {
        productAmount 
        setProductAmount(newAmount);
    }
    

    return(
        <>
            <LinearGradient colors={['rgba(253, 204, 33, 0.10)', 'rgba(234, 196, 66, 0.09)', 'rgba(244, 221, 138, 0.08)', 'rgba(198, 179, 114, 0.02)']}
                            className="w-full h-[392] rounded-2xl mt-8">
                <Text className="mt-5 ml-5 text-xl font-bold">
                    Hamburguer
                </Text>
                <View className="mx-auto mt-5">
                    <Image source={{uri: props.ImagePath}}/>
                </View>
                <View className="mx-5 mt-5 flex 1 flex-row justify-between items-center">
                    <AmountButton onAmountChange={handleAmountChange}/>
                    <Text className="text-[25px] font-chivo_bold">
                        R$ {productAmount}
                    </Text>
                </View>
            </LinearGradient>
        </>
        
    )
}
