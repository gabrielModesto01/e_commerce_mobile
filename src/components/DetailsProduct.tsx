import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FireIcon from '../assets/images/FireIcon.svg'
import Clock from '../assets/images/Clock.svg'
import Star from '../assets/images/Star.svg'
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
                    <Image className="w-[267px] h-[246px] rounded-[15px]" source={{uri: 'https://i.ibb.co/t8WXw6Z/amirali-mirhashemian-sc5s-TPMr-Vfk-unsplash-2.png'}}/>
                </View>
                <View className="mx-5 mt-5 flex 1 flex-row justify-between items-center">
                    <AmountButton onAmountChange={handleAmountChange}/>
                    <Text className="text-[25px] font-chivo_bold">
                        {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(15)}
                    </Text>
                </View>
            </LinearGradient>
            <View className="flex-row justify-between mt-4 mx-[26px]">
                <View className="flex-row items-center">
                    <Star />
                    <Text className="ml-1 text-[14px] font-semibold text-[#8E8E8E] items-center">
                        4.0
                    </Text>
                </View>
                <View className="flex-row ">
                    <FireIcon />
                    <Text className="ml-1 text-[14px] font-semibold text-[#8E8E8E]">
                        120 calorias
                    </Text>
                </View>
                <View className="flex-row items-center">
                    <Clock />
                    <Text className="ml-1 text-[14px] font-semibold text-[#8E8E8E]">
                        20-30 Min
                    </Text>
                </View>
            </View>
            <View className="mx-[15px] mt-[35px]">
                <Text className="text-xl font-bold">
                    Descrição
                </Text>
                <ScrollView showsVerticalScrollIndicator={false} className="h-[60px] mt-[15px]">
                    <Text className="text-[12px] text-[#8E8E8E]">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Soluta magni similique cum ipsa aut fugiat non aspernatur odio recusandae commodi in voluptas necessitatibus quis quasi sunt, quas vero a assumenda?Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas, sequi, a aut dicta saepe itaque incidunt cum temporibus nostrum tempora ut iure qui nesciunt laborum similique laboriosam ad adipisc Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore ducimus voluptatem non? Nobis id minus sapiente hic possimus, necessitatibus culpa ab commodi eius nihil dolor nesciunt omnis. Qui, nobis consequuntur!
                    </Text>
                </ScrollView>
            </View>
            <View className="flex-row justify-between mx-[15px] mt-[40px]">
                <TouchableOpacity 
                    activeOpacity={0.5}
                    className="w-[158 px] h-[55px] justify-center items-center border-2 border-[#FDCC21] rounded-[15px] ">
                    <Text className="font-bold text-[12px]">
                        Adicionar ao Carrinho
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={0.5}
                    className="w-[158px] h-[55px] justify-center items-center border-2 border-[#FDCC21] bg-[#FDCC21] rounded-[15px] ">
                    <Text className="font-bold text-[12px]">
                        Comprar
                    </Text>
                </TouchableOpacity>
            </View>
        </>
        
    )
}
