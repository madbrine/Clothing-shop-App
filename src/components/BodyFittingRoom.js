import React from 'react';
import {Image, Text, View, StyleSheet, ScrollView, ScrollViewComponent} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import CartItem from "./CartItem";

const BodyFittingRoom = (props) => {
    const dispatch = useDispatch()

    return (
        <View>
        <View style={styles.container}>
            <View style={styles.personPosition}>
                <Image source={require('../../assets/clothing/person.png')} style={styles.person}></Image>
            </View>
        </View>
            <Text style={styles.cart}>Ваш выбор</Text>
            <CartItem/>

        </View>
    );
};

export default BodyFittingRoom;

const styles = StyleSheet.create({
    container: {
        padding: 4,
        backgroundColor: '#fff',
    },
    personPosition: {
        alignItems: 'center'
    },
    person: {
        height: 400,
        width: 130,
    },
    cart: {
        marginLeft: 10,
        marginVertical: 6,
        fontSize: 18,
        fontFamily: 'sans-serif-light',
    }
})
