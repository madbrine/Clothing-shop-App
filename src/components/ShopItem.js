import React from 'react';
import {View, StyleSheet} from "react-native";
import ShopItemForm from "./ShopItemForm";

const ShopItem = (props) => {

    return (
        <View style={styles.container}>
            {props.items.map((item, key)=>
                <ShopItemForm item={item} key={key}></ShopItemForm>)}
        </View>
    );
};

export default ShopItem;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
})

