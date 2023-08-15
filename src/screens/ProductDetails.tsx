import { View } from 'react-native'
import DetaislsBar from '../components/DetailsBar'
import DetailsProduct from '../components/DetailsProduct'

export default function ProductsDetaisls() {
    return (
        <View className='h-full flex 1 bg-background_Details px-[15px] pt-[32px]'>
            <DetaislsBar />
            <DetailsProduct />
        </View>
    )
}