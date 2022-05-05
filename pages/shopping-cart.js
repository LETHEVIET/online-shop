import {Component} from "react"

import { int2VND } from "../utils/function"

import { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/action"
import Image from "next/image";
import Link from "next/link";

const ShoppingCart = (props) => {


    const globalState = useSelector((state) => state.cart.products);

    const res = useSelector((state) => {
        let tt = 0
        for(let i of state.cart.products){
            tt += i.productDetals.price * i.orderDetals.quantity
        }

        return tt
    })

    console.log("globalState",globalState)
    const dispatch = useDispatch();    


    return (<>
        <section className="breadcrumb-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb__text">
                            <h4>Shopping Cart</h4>
                            <div className="breadcrumb__links">
                                <a href="/">Home</a>
                                <a href="/shop">Shop</a>
                                <span>Shopping Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="shopping-cart spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="shopping__cart__table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {globalState.map((product, key) =>(
                                        <tr key={key}>
                                            <td className="product__cart__item">
                                                <div class="product__cart__item__pic">                                                 
                                                    <Image src={product.productDetals.images[0]} width={90} height={90} />                    
                                                </div>
                                                
                                                <div className="product__cart__item__text">
                                                    <h6>{product.productDetals.name}</h6>
                                                    <h5>{int2VND(product.productDetals.price)} VND</h5>
                                                </div>
                                            </td>
                                            <td className="quantity__item">
                                                <div className="quantity">
                                                    <div className="pro-qty-2">
                                                        <input type="text" value={product.orderDetals.quantity}/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="cart__price">{int2VND(product.productDetals.price * product.orderDetals.quantity)} VND </td>
                                            <td className="cart__close"><i style={{ cursor: "pointer" }} className="fa fa-close" onClick={()=>dispatch(removeFromCart(globalState,product))}></i></td>
                                        </tr>
                                    ))}
                                    
                                </tbody>
                            </table>
                        </div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="continue__btn">
                                    <Link href="/shop">Continue Shopping</Link>
                                </div>
                            </div>
                            {/* <div className="col-lg-6 col-md-6 col-sm-6">
                                <div className="continue__btn update__btn">
                                    <a href="#"><i className="fa fa-spinner"></i> Update cart</a>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {/* <div className="cart__discount">
                            <h6>Discount codes</h6>
                            <form action="#">
                                <input type="text" placeholder="Coupon code"/>
                                <button type="submit">Apply</button>
                            </form>
                        </div> */}
                        <div className="cart__total">
                            <h6>Cart total</h6>
                            <ul>
                                {/* <li>Subtotal <span>$ 169.50</span></li> */}
                                <li>Total <span>{int2VND(res)} VND</span></li>
                            </ul>
                            <Link href="/checkout"> 
                                <a className="primary-btn">Proceed to checkout </a> 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>)
}


export default ShoppingCart