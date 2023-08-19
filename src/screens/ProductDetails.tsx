import { View } from 'react-native'
import DetaislsBar from '../components/DetailsBar'
import DetailsProduct from '../components/DetailsProduct'

export default function ProductsDetaisls() {
    return (
        <View className='h-full flex bg-background_Details'>
            <View className='mx-[15px] mt-[32px]'>
                <DetaislsBar />
                <DetailsProduct />
            </View>
        </View>
    )
}