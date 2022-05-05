import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

const initalSate = {
    server: "",
    client: "",
    products: []
}

export default function reducer(state = initalSate, action) {
    switch (action.type) {
        case ADD_TO_CART:
            console.log("action.payload", action.payload)
            return {...state, products: action.payload};
        case REMOVE_FROM_CART:
            return {...state, products: action.payload};
        default:
            return state
    }
}