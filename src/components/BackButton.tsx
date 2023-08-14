import { TouchableOpacity } from 'react-native'
import BackButtonImg from '../assets/images/BackButtonImg.svg'
import { useNavigation } from '@react-navigation/native';


export default function BackButton() {
    const { goBack } = useNavigation();

    return(
        <TouchableOpacity 
        activeOpacity={0.5} 
        onPress={goBack}
        className='w-[45px] h-[45px] bg-white justify-center items-center rounded-2xl shadow-md'>
            <BackButtonImg />
        </TouchableOpacity>
    )
}