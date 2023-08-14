import { View, Text, TouchableOpacity } from 'react-native'
import BackButton from './BackButton'
import Like from '../assets/images/Like.svg'
import SemLike from '../assets/images/SemLike.svg'
import { useState } from 'react';


export default function DatailsBar(props) {
    let [ isLike, setIsLike ] = useState(false);

    function dislikeClick() {
        setIsLike(false);
        
    }

    function likeClicked() {
        setIsLike(true);
        
    }

    return(
        <View className='flex-row justify-between items-center mt-4'>
                <BackButton />
                <Text className='text-base font-bold '>
                    Descriação do Produto
                </Text>

                <TouchableOpacity 
                    className='shadow-md'
                    onPress={isLike ? dislikeClick : likeClicked}>
                    { isLike ? <Like /> : <SemLike /> }
                </TouchableOpacity>
            </View>
    )
}