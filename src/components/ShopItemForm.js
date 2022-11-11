import React from 'react';
import {View, StyleSheet, Text, Image, TouchableOpacity} from "react-native";
import ButtonCart from "./ButtonCart";

const ShopItemForm = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <View style={styles.imageContainer}>
                    <Image source={props.item.img} style={styles.image}/>
                </View>
                <View style={styles.info}>
                    <View>
                        <Text>{props.item.name}</Text>
                        <Text>${props.item.cost}</Text>
                    </View>
                    <View style={styles.bottomCart}>
                        <ButtonCart item={props.item}/>
                    </View>
                </View>

            </View>
        </View>
    );
};

export default ShopItemForm;

const styles = StyleSheet.create({
    container: {
        width: "50%",
        padding: 3,
    },
    box: {
        padding: 5,
        borderRadius: 7,
        backgroundColor: "#fff",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    image: {
        height: 210,
        width: 154,
    },
    imageContainer: {
        alignItems: 'center',
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: 5,
        paddingRight: 5,
    },
    bottomCart: {
        flexDirection: 'column-reverse',
        justifyContent: 'space-around'
    },
})
