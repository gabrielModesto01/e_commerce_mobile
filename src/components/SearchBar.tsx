import { Image, View, TextInput, TouchableOpacity } from 'react-native';
import Lupa from '../assets//images/Lupa.svg'
import IconFilter from '../assets/images/iconFilter2.svg'

export default function SearchBar() {
    return (
        <View style={{justifyContent: 'space-between', marginTop: 20, flexDirection: 'row'}}>
            <View style={{height: 50, flexDirection: 'row', marginTop:0, backgroundColor: '#CECDCD', borderRadius: 15, }}>
                <TouchableOpacity activeOpacity={0.5} style={{justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, marginTop: 8 }}>
                    <Lupa />
                </TouchableOpacity>    
                <TextInput style={{width: 241, height: 45, marginHorizontal: 0, marginTop: 3}} placeholder='Pesquise sua Comida...'/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TouchableOpacity activeOpacity={0.5} style={{height: 45, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, paddingHorizontal: 11, backgroundColor: '#FDCC21', borderRadius: 10, shadowColor: '#000',shadowOffset: { width: 0, height: 4,}, shadowOpacity: 0.25, shadowRadius: 4}}>
                    <IconFilter />
                </TouchableOpacity> 
            </View>
        </View>
    );
}

