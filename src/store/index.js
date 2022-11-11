import {createStore} from "redux";

const defaultState = {
    cartItems: [],
}

const removeCart = (id) => {
    let i = 0
    let newArr = []
    console.log("newArr  DO "+newArr)
    while (i < defaultState.cartItems.length) {
        if(id !== defaultState.cartItems.key) {
            newArr = newArr.push(defaultState.cartItems[i])
        }
        i++
    }
    console.log("POTOM "+newArr)
    return newArr

}

const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case "ADD_CART":
            return {...state,
                cartItems: [...state.cartItems, action.payload.new]}
        case "REMOVE_CART":
            return {...state, cartItems: [removeCart(action.payload)]}
        default:
            return state
    }
}
const store = createStore(reducer)

export default store
