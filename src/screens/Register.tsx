import { View,TouchableOpacity, Text, TextInput } from "react-native";
import BacKButton from "../components/BackButton";


export default function Register() {
    return(
        <View className='h-full flex bg-background_Details'>
                <View className='flex-row items-center justify-between mx-[15px] mt-[52px]'>
                    <BacKButton />
                    <Text className='text-base font-bold'>
                    Cadastro de Produtos
                    </Text>
                    <View className="w-[45px] h-[45px]" />
            </View>
                <TextInput className="h-45 ">
                </TextInput>
            </View>
    )
}