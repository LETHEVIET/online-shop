import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

export const addToCart = (products, product) => (dispatch) => {
    console.log("ADD_TO_CAR", products, product)
    // console.log(products.push(product))
    const addedCart = products
    addedCart.push(product)
    return dispatch({
        type: ADD_TO_CART,
        payload: addedCart
    })
}

export const removeFromCart = (products, product) => (dispatch) =>{
    console.log("REMOVE_FROM_CART", products, product)
    const rmovedCart = products
    for (let i = 0; i < rmovedCart.length; i++){
        if (rmovedCart[i] == product){
            rmovedCart = rmovedCart.splice(i,1)
            console.log("hihi")
            break
        }
    }

    console.log("removed", rmovedCart)

    return dispatch({
        type: REMOVE_FROM_CART,
        payload: products
    })
}