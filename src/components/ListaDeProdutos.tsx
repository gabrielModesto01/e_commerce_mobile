import { ScrollView } from "react-native";
import Produto from "./Produto";

export default function ListaDeProdutos(){
    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 15}}>
            <Produto nome_do_produto='Hamburguer' calorias='150' valor='35,00' ImagePath='https://i.ibb.co/Z2DSRd0/hamburguer.png'/>
            <Produto nome_do_produto='Batata Frita' calorias='70' valor='15,00' ImagePath='https://i.ibb.co/r5Ltqb9/batata-frita.png'/>
            <Produto nome_do_produto='Refrigerante' calorias='30' valor='16,00' ImagePath='https://i.ibb.co/N9BkwtS/refrigerante.png'/>
            <Produto nome_do_produto='Sorvete' calorias='120' valor='25,00' ImagePath='https://i.ibb.co/TqZdG0d/sorvete.png'/>
            <Produto nome_do_produto='Panquecas' calorias='98' valor='35,00' ImagePath='https://i.ibb.co/b6G7gVW/panquecas.png'/>
            <Produto nome_do_produto='Hamburguer' calorias='150' valor='35,00' ImagePath='https://i.ibb.co/Z2DSRd0/hamburguer.png'/>
            <Produto nome_do_produto='Batata Frita' calorias='70' valor='15,00' ImagePath='https://i.ibb.co/r5Ltqb9/batata-frita.png'/>
            <Produto nome_do_produto='Refrigerante' calorias='30' valor='16,00' ImagePath='https://i.ibb.co/N9BkwtS/refrigerante.png'/>
            <Produto nome_do_produto='Sorvete' calorias='120' valor='25,00' ImagePath='https://i.ibb.co/TqZdG0d/sorvete.png'/>
            <Produto nome_do_produto='Panquecas' calorias='98' valor='35,00' ImagePath='https://i.ibb.co/b6G7gVW/panquecas.png'/>
        </ScrollView>
    )
}