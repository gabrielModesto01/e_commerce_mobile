import { TouchableOpacity, View, Text } from "react-native";
import Minus from '../assets/images/Minus.svg'
import Plus from '../assets/images/Plus.svg'
import { useState } from "react";


export default function AmountButton(props) {
    let [ amount, setAmount ] = useState(0)

    function IncrementAmount(amount: number) {
        setAmount(amount += 1);
        props.amount = amount;
    }

    function DecrementAmount(amount: number) {
        setAmount(amount -= 1);
        props.amount = amount;
    }
    

    return(
        <View className="w-[135] px-3 py-[8] flex 1 flex-row bg-bgButton justify-between items-center rounded-full	">
            <TouchableOpacity 
                activeOpacity={0.5}
                disabled={amount <= 0}
                onPress={() => DecrementAmount(amount)}
            >
                <Minus />
            </TouchableOpacity>
            
            <Text className="text-3xl font-bold">
                {amount}
            </Text>

            <TouchableOpacity 
                activeOpacity={0.5}
                disabled={amount >= 30}
                onPress={() => IncrementAmount(amount)}
            >
                <Plus />
            </TouchableOpacity>
        </View>
    )
}