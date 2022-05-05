import { Component } from "react"
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../store/cart/action"
import { int2VND } from "../utils/function";

import OrderService from "../Services/order.service";

const Checkout = () => {
    const globalState = useSelector((state) => state.cart.products);

    const res = useSelector((state) => {
        let tt = 0
        for(let i of state.cart.products){
            tt += i.productDetals.price * i.orderDetals.quantity
        }

        return tt
    })

    let billingDetails = {
        name:"",
        city:"",
        district:"",
        street:"",
        phone:"",
        email:"",
    }

    const onChange = (event) =>{
        billingDetails[event.target.name] = event.target.value
        console.log(billingDetails)
    }

    const placeOrder = () =>{
        console.log("aaaaaaa")
        let items = []
        for(let product of globalState){
            items.push({
                id: product.productDetals.id,
                orderDetals: product.orderDetals
            })
        }

        let order = {
            items: items,
            billingDetals: billingDetails,
        }
        console.log(order)
        OrderService.create(order).then(response => {
            console.log(response)
        })
        .catch(e => {
            console.log(e);
        });
    }

    return(<>
        <section className="breadcrumb-option">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb__text">
                            <h4>Check Out</h4>
                            <div className="breadcrumb__links">
                                <a href="/">Home</a>
                                <a href="/shop">Shop</a>
                                <span>Check Out</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section className="checkout spad">
            <div className="container">
                <div className="checkout__form">
                        <div className="row">
                            <div className="col-lg-8 col-md-6">
                                <h6 className="checkout__title">Billing Details</h6>
                                <div className="checkout__input">
                                    <p>Name<span>*</span></p>
                                    <input onChange={onChange} name="name" type="text"/>
                                </div>
                                <div className="checkout__input">
                                    <p>Address<span>*</span></p>
                                    <input onChange={onChange} name="city" type="text" placeholder="Thành Phố(tỉnh)/Quận(Huyện)/Phường(Xã)" className="checkout__input__add"/>
                                    <input onChange={onChange} name="district" type="text" placeholder="Đường/Tòa Nhà"/>
                                    <input onChange={onChange} name="street" type="text" placeholder="Số Nhà/Tầng"/>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Phone<span>*</span></p>
                                            <input name="phone" onChange={onChange} type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="checkout__input">
                                            <p>Email<span>*</span></p>
                                            <input onChange={onChange} name="email" type="text"/>
                                        </div>
                                    </div>
                                </div>
                                {/* <div className="checkout__input__checkbox">
                                    <label for="diff-acc">
                                        Note about your order, e.g, special noe for delivery
                                        <input type="checkbox" id="diff-acc"/>
                                        <span className="checkmark"></span>
                                    </label>
                                </div> */}
                                {/* <div className="checkout__input">
                                    <p>Order notes<span>*</span></p>
                                    <input type="text"
                                    placeholder="Notes about your order, e.g. special notes for delivery."/>
                                </div> */}
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4 className="order__title">Your order</h4>
                                    <div className="checkout__order__products">Product <span>Total</span></div>
                                    <ul className="checkout__total__products">
                                        {globalState.map((product, key) =>(
                                            <div key={key}>
                                            <li>{product.productDetals.name}<span>{int2VND(product.productDetals.price* product.orderDetals.quantity)} VND</span></li>
                                            </div>
                                            
                                        ))}
                                    </ul>
                                    <ul className="checkout__total__all">
                                        <li>Total <span>{int2VND(res)} VND</span></li>
                                    </ul>
                                    
                                    <div className="checkout__input__checkbox">
                                        <label for="payment">
                                            Check Payment
                                            <input type="checkbox" id="payment"/>
                                            <span className="checkmark"></span>
                                        </label>
                                    </div>
                                    <button onClick={placeOrder} className="site-btn">PLACE ORDER</button>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
        </section>
    </>)
    
}

export default Checkout