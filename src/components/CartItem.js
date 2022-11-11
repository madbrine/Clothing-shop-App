import React from 'react';
import {Text, View, StyleSheet, ScrollView} from "react-native";
import {useSelector} from "react-redux";
import CartItemForm from "./CartItemForm";

const CartItem = () => {
    const cartItems = useSelector(state => state.cartItems)
    return (

        <View style={styles.container}>
            <ScrollView horizontal={true}>
            {cartItems.map((cartItem, key)=>
                <CartItemForm cartItem={cartItem} key={key}></CartItemForm>)}
            </ScrollView>
        </View>

    );
};

export default CartItem;

const styles = StyleSheet.create({
    container: {
        margin: 7,
    }
})
