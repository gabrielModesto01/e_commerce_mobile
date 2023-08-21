import { View, Text, TextInput, Keyboard, TouchableWithoutFeedback, ScrollView } from "react-native";
import Input from "./Input";
import { useState } from "react";
import ButtonRegisterProduct from "./ButtonRegisterProduct";


export default function Form() {
    const [ nomeDoProduto, setNomeDoProduto ] = useState('');
    const [ valorDoProduto, setValorDoProduto ] = useState('');
    const [ descricao, setDescricao ] = useState('');

    function pressButtonRegister() {
        Keyboard.dismiss();
    };

    

    return(
        <ScrollView className="mx-[10px] mt-[105px]">
            <Text className="ml-[10px] font-bold text-[15px] focus:border-5 focus:border-[#FDCC21]">
                Nome do Produto
            </Text>
            <Input 
                placeholder="nome do produto..."
                onChangeText={setNomeDoProduto}
            />

            <Text className="ml-[10px] font-bold text-[15px] mt-[15px]">
                Valor do Produto
            </Text>
            <Input
                placeholder="valor do produto..." 
                onChangeText={setValorDoProduto}    
            />

            <Text className="ml-[10px] font-bold text-[15px] mt-[15px]">
                Descrição do Produto
            </Text>
                <View className="bg-[#CECDCD] rounded-[15px]">
                    <TextInput
                        className="h-[90px] px-4"
                        multiline
                        placeholder="descrição do produto..."
                        onChangeText={setDescricao} 
                    />
                </View>
           <ButtonRegisterProduct onPress={pressButtonRegister}/>
        </ScrollView>
    )
}