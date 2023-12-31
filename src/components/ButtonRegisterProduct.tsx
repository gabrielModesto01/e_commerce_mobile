import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useNavigation } from '@react-navigation/native';

export default function ButtonRegisterProduct({...rest}: TouchableOpacityProps) {
    const { navigate } = useNavigation();

    return(
        <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => navigate("register")}
            className="h-[55px] mt-3 justify-center items-center border-2 border-[#FDCC21] bg-[#FDCC21] rounded-[15px] shadow-md"
            {...rest}    
        >
            <Text className="font-bold text-[16px]">
               Cadastrar Produto
            </Text>
        </TouchableOpacity>
    )
}