import { useState } from "react";
import { TextInput, View, TextInputProps } from "react-native";

export default function Input({...rest}: TextInputProps) {
    const [ nomeDoProduto, setNomeDoProduto ] = useState('');

    function changeName(){
        setNomeDoProduto();
    }
    return(
        <View className="bg-[#CECDCD] rounded-[15px]">
            <TextInput
                className="h-[45px] px-4"
                onChangeText={changeName}
                {...rest}
            />
        </View>
    )
}