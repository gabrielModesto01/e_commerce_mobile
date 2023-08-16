import { ScrollView } from "react-native";
import Produto from "./Produto";

export default function ListaDeProdutos(){

    return(
        <ScrollView showsVerticalScrollIndicator={false} style={{marginTop: 15}}>
            <Produto nome_do_produto='Hamburguer' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/t8WXw6Z/amirali-mirhashemian-sc5s-TPMr-Vfk-unsplash-2.png'/>
            <Produto nome_do_produto='Batata Frita' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/r5Ltqb9/batata-frita.png'/>
            <Produto nome_do_produto='Refrigerante' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/N9BkwtS/refrigerante.png'/>
            <Produto nome_do_produto='Sorvete' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/TqZdG0d/sorvete.png'/>
            <Produto nome_do_produto='Panquecas' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/b6G7gVW/panquecas.png'/>
            <Produto nome_do_produto='Hamburguer' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/Z2DSRd0/hamburguer.png'/>
            <Produto nome_do_produto='Batata Frita' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/r5Ltqb9/batata-frita.png'/>
            <Produto nome_do_produto='Refrigerante' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/N9BkwtS/refrigerante.png'/>
            <Produto nome_do_produto='Sorvete' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/TqZdG0d/sorvete.png'/>
            <Produto nome_do_produto='Panquecas' calorias= {150} amount={1} price={15} ImagePath='https://i.ibb.co/b6G7gVW/panquecas.png'/>
        </ScrollView>
    )
}