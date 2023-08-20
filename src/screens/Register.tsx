import { View,TouchableOpacity, Text, TextInput } from "react-native";
import BacKButton from "../components/BackButton";
import Form from "../components/Form";


export default function Register() {
    return(
        <View className='h-full flex bg-background_Details px-[15px]'>
            <View className='flex-row items-center justify-between mt-[52px]'>
                <BacKButton />
                <Text className='text-base font-bold'>
                Cadastro de Produtos
                </Text>
                <View className="w-[45px] h-[45px]" />
            </View>

            <Form />
        </View>
    )
}