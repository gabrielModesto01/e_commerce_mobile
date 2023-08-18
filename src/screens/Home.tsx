import { View } from "react-native";
import SearchBar from "../components/SearchBar";
import ListaDeProdutos from "../components/ListaDeProdutos";

export default function Home() {
    return(
        <View className="flex bg-[#E0E0E0]">
            <View className="mx-[15px] mt-[30px] mb-[15px] h-full">
                <SearchBar />
                <View>

                </View>
                <ListaDeProdutos />
            </View>
        </View>
    )
}