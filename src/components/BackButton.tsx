import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import BackButtonImg from '../assets/images/BackButtonImg.svg'
import { useNavigation } from '@react-navigation/native';


interface Props extends TouchableOpacityProps {};

export default function BacKButton({...rest}: Props) {

    const { goBack } = useNavigation();

    return(
        <TouchableOpacity 
            activeOpacity={0.5} 
            onPress={goBack}
            {...rest}
            className='w-[45px] h-[45px] bg-white justify-center items-center rounded-2xl shadow-md'
        >
            <BackButtonImg />
        </TouchableOpacity>

    )
}