import {Component} from "react"
import Link from "next/link"

class ProductItem extends Component {

    constructor(props){
        super(props)
    }

    render() {
        const str = String(this.props.data.price)
        const price = str.slice(0,-3) + "," + str.slice(-3)
        return(<>
                <div className={`product__item ${this.props.data.sale ? "sale" : ""}`}>
                    <Link href={`/shop-details/${this.props.data.id}`}>
                        <div className="product__item__pic set-bg" 
                            
                            style={{
                                backgroundImage: `url(${this.props.data.images[0]})`,
                                cursor: "pointer"
                            }}
                        >
                            { this.props.data.sale && <span className="label">Sale</span>}
                            {/* <ul className="product__hover">
                                <li
                                    style={{
                                        cursor: "pointer"
                                    }}
                                ><a href="#"><img src="img/icon/heart.png" alt=""/></a></li>
                                <li
                                    style={{
                                        cursor: "pointer"
                                    }}
                                ><a href="#"><img src="img/icon/compare.png" alt=""/> <span>Compare</span></a>
                                </li>
                                <li
                                    style={{
                                        cursor: "pointer"
                                    }}
                                ><Link href={`/shop-details/${this.props.data.id}`}><img src="img/icon/search.png" alt=""/></Link></li>
                            </ul> */}
                        </div>
                    
                    </Link>
                    <div className="product__item__text">
                        <h6>{this.props.data.name}</h6>
                        <a href="#" className="add-cart">+ Add To Cart</a>
                        <div className="rating">
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <h5>{price} VND</h5>
                        <div className="product__color__select">
                            <label htmlFor="pc-4">
                                <input type="radio" id="pc-4"/>
                            </label>
                            <label className="active black" htmlFor="pc-5">
                                <input type="radio" id="pc-5"/>
                            </label>
                            <label className="grey" htmlFor="pc-6">
                                <input type="radio" id="pc-6"/>
                            </label>
                        </div>
                    </div>
                </div>
        </>)
    }
}

export default ProductItem