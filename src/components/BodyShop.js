import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import ShopItem from "./ShopItem";

const BodyShop = (props) => {

    const [items, setItems] = useState([
        {key: '1', img: require('../../assets/clothing/1.jpg/'), name: 'Свитер Bernadette', description: 'Блаблабла хороший свитер зелёный жизнерадостный', cost: '235'},
        {key: '2', img: require('../../assets/clothing/2.jpg/'), name: 'Свитер Burberry', description: 'Это же барбери ты шо. Палюбому брать надо!', cost: '765'},
        {key: '3', img: require('../../assets/clothing/3.webp/'), name: 'Брюки Черные', description: 'Строгие брюки как у Макимы из аниме Chainsaw man', cost: '199'},
        {key: '4', img: require('../../assets/clothing/4.webp/'), name: 'Туфли Кожаные', description: 'Ну, хорошие туфли. Как еще их похвалить то', cost: '215'},
        {key: '5', img: require('../../assets/clothing/5.webp/'), name: 'Пальто Isabel', description: 'На твоём месте, перед покупкой я посмотрел свои расходы.', cost: '2695'},
    ])

    return (
        <View>
        <ScrollView>
            <ShopItem items={items}/>
        </ScrollView>
        </View>
    );
};

export default BodyShop;



