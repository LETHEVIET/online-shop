import { Component } from "react";
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import ProductItem from "../components/productItem";
import Products from "../components/products.json"
import productService from "../Services/product.service";

class Shop extends Component{

    constructor(props){
        super(props)
        this.state={
            products: []
        }
    }

    componentDidMount(){
        this.retrieveProducts()
    }

    retrieveProducts = () => {
        productService.getAll()
            .then(response => {
                this.setState({
                    products: response.data
                }, ()=> {console.log(this.state)})
            })
            .catch(e => {
                console.log(e);
            });
    }

    render() {
        return (<>
            
            <section className="breadcrumb-option">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="breadcrumb__text">
                                <h4>Shop</h4>
                                <div className="breadcrumb__links">
                                    <a href="./index.html">Home</a>
                                    <span>Shop</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="shop spad">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-9">
                            <div className="shop__product__option">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__left">
                                            <p>Showing 1–12 of 126 results</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="shop__product__option__right">
                                            <p>Sort by Price:</p>
                                            <select>
                                                <option value="">Low To High</option>
                                                <option value="">$0 - $55</option>
                                                <option value="">$55 - $100</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                {this.state.products.map((product, key) =>(
                                    <div className="col-lg-4 col-md-6 col-sm-6" key={key}>
                                        <ProductItem data={product}/>
                                    </div>
                                ))}
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="product__pagination">
                                        <a className="active" href="#">1</a>
                                        <a href="#">2</a>
                                        <a href="#">3</a>
                                        <span>...</span>
                                        <a href="#">21</a>
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

export default Shop