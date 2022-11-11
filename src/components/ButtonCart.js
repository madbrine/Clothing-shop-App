import React, {useState} from 'react';
import {Text, TouchableOpacity, View, StyleSheet, Image, Button} from "react-native";
import {useDispatch, useSelector} from "react-redux";

const ButtonCart = (props) => {

    const generatorRandomKey= function (length= 6){
        return Math.random().toString(20).substr(2, length)
    }
    const dispatch = useDispatch()
    const cartItems = useSelector(state => state.cartItems)
    const plusButton = require('../../assets/plus-icon.png')
    const markButton = require('../../assets/checkmark-icon.png')
    const [buttonImage, setButtonImage] = useState(plusButton)
    const ButtonChange = () => {
        if(buttonImage === plusButton){
            setButtonImage(markButton)
            dispatch(
                {
                    type: 'ADD_CART', payload:
                    {
                        new: {
                            img: props.item.img,
                            name: props.item.name,
                            cost: props.item.cost,
                            key: generatorRandomKey(),
                        }
                    }
                }
            )
            console.log(cartItems)
        }
        if(buttonImage === markButton) {
            setButtonImage(plusButton)
            dispatch({type: 'REMOVE_CART', payload: cartItems.key})
        }
    }
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={ButtonChange}>
                <Image source={buttonImage} style={styles.image}></Image>
            </TouchableOpacity>
        </View>
    );
};

export default ButtonCart;

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        height: 20,
        width: 20,
    }
})
