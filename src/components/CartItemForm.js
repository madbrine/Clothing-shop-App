import React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity, Modal} from "react-native";

const CartItemForm = (props) => {
    const [modalVisible, setModalVisible] = useState(false)
    let modalPositionLeft
    let modalPositionTop
    const ModalCreator = () => {
        setModalVisible(!modalVisible)
    }
    const primaryColor = 'red'
    const modalPosition = {
        position: 'absolute',
        left: 50,
        top: 100,
    }
    const handlePress=(evt)=>{
        Alert.alert(`x coord = ${evt.nativeEvent.locationX}`);
        Alert.alert(`y coord = ${evt.nativeEvent.locationY}`);
      }
    return (
        <TouchableOpacity onPress={(evt) => handlePress(evt)}>
        <TouchableOpacity 
        onPress={()=>setModalVisible(!modalVisible)}
        activeOpacity={1}>
            <View style={styles.container}>
                <Modal
                    visible={modalVisible}
                    animationType="fade"
                    transparent={true}>
                        <View style={modalPosition}>
                        <TouchableOpacity 
                        style={styles.modalWindow} 
                        onPress={ModalCreator}>
                            <Text>Модалка</Text>
                        </TouchableOpacity>
                        </View>
                </Modal>
                <Image source={props.cartItem.img} style={styles.image}/>
                <Text style={styles.text}>{props.cartItem.name}</Text>
            </View>
        </TouchableOpacity>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    container: {
        margin: 4,
        backgroundColor: '#fff',
        borderRadius: 7,
        padding: 5,
        width: 100,
    },
    text: {
        fontSize: 10,
        marginTop: 10,
    },
    image: {
        width: 90,
        height: 120,
    },
    modalWindow: {
        backgroundColor: 'white',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    }
})

export default CartItemForm;
