import {Component} from 'react'
import {int2VND} from "../utils/function"
import Image from 'next/image'

export default class OrderDetails extends Component {

    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props.data)
    }
    
    render(){
        
        let res = 0
        for(let i of this.props.data.items){
            res += i.productDetails.price * i.orderDetails.quantity
        }

        return (<>
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shopping Cart</h4>
                                <div className="breadcrumb__links">
                                    <a href="/">Home</a>
                                    <span>Order Details</span>
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
                                        {this.props.data.items.map((product, key) =>(
                                            <tr key={key}>
                                                <td className="product__cart__item">
                                                    <div class="product__cart__item__pic">                                                 
                                                        <Image src={product.productDetails.images[0]} width={90} height={90} />                    
                                                    </div>
                                                    
                                                    <div className="product__cart__item__text">
                                                        <h6>{product.productDetails.name}</h6>
                                                        <h5>{int2VND(product.productDetails.price)} VND</h5>
                                                    </div>
                                                </td>
                                                <td className="quantity__item">
                                                    <div className="quantity">
                                                    {product.orderDetails.quantity}
                                                        {/* <div className="pro-qty-2"> */}
                                                            {/* <input type="text" value={product.orderDetails.quantity}/> */}
                                                        {/* </div> */}
                                                    </div>
                                                </td>
                                                <td className="cart__price">{int2VND(product.productDetails.price * product.orderDetails.quantity)} VND </td>
                                                
                                            </tr>
                                        ))}
                                        
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                        

                        <div className="col-lg-4 col-md-6">
                                <div className="checkout__order">
                                    <h4 className="order__title">Your order</h4>
                                    <ul className="checkout__total__products">
                                        <li>Name: {this.props.data.billingDetails.name}</li>
                                        <li>City: {this.props.data.billingDetails.city}</li>
                                        <li>District: {this.props.data.billingDetails.district}</li>
                                        <li>Street: {this.props.data.billingDetails.street}</li>
                                        <li>Phone: {this.props.data.billingDetails.phone}</li>
                                        <li>Email: {this.props.data.billingDetails.email}</li>
                                    </ul>
                                    <ul className="checkout__total__all">
                                        <li>Total <span>{int2VND(res)} VND</span></li>
                                    </ul>
                                    
                                    
                                </div>
                            </div>
                    </div>
                </div>
            </section>
        </>)
    }
}