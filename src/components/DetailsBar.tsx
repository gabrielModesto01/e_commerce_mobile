import { View, Text, TouchableOpacity } from 'react-native'
import BackButton from './BackButton'
import Like from '../assets/images/Like.svg'
import SemLike from '../assets/images/SemLike.svg'
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';



export default function DatailsBar() {
    const{ navigate } = useNavigation(); 

    let [ isLike, setIsLike ] = useState(false);

    function dislikeClicked() {
        setIsLike(false);

    }

    function likeClicked() {
        setIsLike(true);

    } 

    return(
        <View className='flex-row justify-between items-center mt-4'>
            <BackButton onPress={() => navigate('home')}/>
            <Text className='text-base font-bold '>
                Descriação do Produto
            </Text>

            <TouchableOpacity 
                className='shadow-md'
                onPress={isLike ? dislikeClicked : likeClicked}>
                { isLike ? <Like /> : <SemLike /> }
            </TouchableOpacity>
        </View>
    )   
}