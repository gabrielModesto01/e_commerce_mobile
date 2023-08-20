import { TextInput, View, TextInputProps } from "react-native";

export default function Input({...rest}: TextInputProps) {
    return(
        <View className="bg-[#CECDCD] rounded-[15px]">
            <TextInput
                className="h-[45px] px-4"
                {...rest}
            />
        </View>
    )
}