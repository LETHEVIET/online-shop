import {Component} from "react"

export default class ProductDetals extends Component{

    constructor(props) {
        super(props)
        this.state = {
            activeImg: 1,
            size: "XL",
            color: "#0b090c",
            quantity: 1
        }
    }

    changeTabs = (index) =>{
        this.setState({
            activeImg: index
        })
    }

    quantityChange = (c) =>{
        let quantity = this.state.quantity
        quantity += c
        if (quantity < 1) quantity = 1
        this.setState({
            quantity: quantity
        })
    }

    addCart = () => {
        this.props.addCart(
            {
                orderDetals:{
                    size: this.state.size,
                    color: this.state.color,
                    quantity: this.state.quantity,
                },                
                productDetals: this.props.product
            }
        )
    }

    render() {

        const {product} = this.props
        const {activeImg} = this.state

        const sizes = ["XXL", "XL", "L", "S"]
        const colors = ["#0b090c", "#20315f", "#f1af4d", "#ed1c24", "#ffffff"]
        
        const str = String(product.price)
        const price = str.slice(0,-3) + "," + str.slice(-3)

        return (<>
            <section className="shop-details">
                <div className="product__details__pic">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="product__details__breadcrumb">
                                    <a href="/">Home</a>
                                    <a href="/shop">Shop</a>
                                    <span>Product Details</span>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-3">
                                <ul className="nav nav-tabs" role="tablist">

                                    {product.images.map((imge, key) =>(
                                        <li key={key} className="nav-item">
                                            <a className="nav-link active" data-toggle="tab" onClick={() => this.setState( {activeImg: key + 1  })} href= {`#tabs-${key+1}`} role="tab">
                                                <div className="product__thumb__pic set-bg" 
                                                    style={{
                                                        backgroundImage: `url(${imge})`
                                                    }} 
                                                >
                                                </div>
                                            </a>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                            <div className="col-lg-6 col-md-9">
                                <div className="tab-content">
                                    {product.images.map((imge, key) =>(
                                        <div  key = {key} className={`tab-pane ${activeImg == key + 1 ? "active" : "" }`} id={`tabs-${key+1}`} role="tabpanel">
                                            <div className="product__details__pic__item">
                                                <img src={imge} alt=""/>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="product__details__content">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                                <div className="product__details__text">
                                    <h4>{product.name}</h4>
                                    <div className="rating">
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star"></i>
                                        <i className="fa fa-star-o"></i>
                                        <span> - 5 Reviews</span>
                                    </div>
                                    <h3>{price} VND</h3>
                                    <p>{product.description}</p>
                                    <div className="product__details__option">
                                        <div className="product__details__option__size">
                                            <span>Size:</span>

                                            {sizes.map((size, key) =>{
                                                return (
                                                    <label key={key} className={this.state.size == size && "active"} for={size}>{size}
                                                        <input onClick={()=>this.setState({size: size})} type="radio" id={size}/>
                                                    </label>
                                                )
                                            })}
                                        </div>
                                        <div className="product__details__option__color">
                                            <span>Color:</span>
                                            {colors.map((color, key) => (
                                                <label key={key} for={`sp-${key+1}`}
                                                    style={{
                                                        backgroundColor: color
                                                    }}

                                                    className={this.state.color == color ? "active" : ""}
                                                >
                                                    <input onClick={()=> this.setState({color: color})} type="radio" id={`sp-${key+1}`} />
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="product__details__cart__option">
                                        <div className="quantity">
                                            <div className="pro-qty">
                                                <span onClick={()=>this.quantityChange(1)} className="fa fa-angle-up dec qtybtn"></span>
                                                <input readOnly type="text" value={String(this.state.quantity)} />
                                                <span onClick={()=>this.quantityChange(-1)} className="fa fa-angle-down inc qtybtn"></span>
                                            </div>
                                        </div>
                                        <div style={{cursor: "pointer"}} onClick={this.addCart} className="primary-btn">add to cart</div>
                                    </div> 
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>)
    }
}