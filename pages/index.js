import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Component} from 'react'
import Link from 'next/link'
import Script from 'next/script'
import PageWrapper from '../components/pageWrapper'
class Home extends Component{

    render(){
      return (<>
        {/* <PageWrapper> */}
            <div>           
                
                <section className="hero">
                    <div className="hero__slider owl-carousel">
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-1.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                            <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                            <div className="hero__social">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="hero__items set-bg" data-setbg="img/hero/hero-2.jpg">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-5 col-lg-7 col-md-8">
                                        <div className="hero__text">
                                            <h6>Summer Collection</h6>
                                            <h2>Fall - Winter Collections 2030</h2>
                                            <p>A specialist label creating luxury essentials. Ethically crafted with an unwavering
                                            commitment to exceptional quality.</p>
                                            <a href="#" className="primary-btn">Shop now <span className="arrow_right"></span></a>
                                            <div className="hero__social">
                                                <a href="#"><i className="fa fa-facebook"></i></a>
                                                <a href="#"><i className="fa fa-twitter"></i></a>
                                                <a href="#"><i className="fa fa-pinterest"></i></a>
                                                <a href="#"><i className="fa fa-instagram"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="banner spad">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 offset-lg-4">
                                <div className="banner__item">
                                    <div className="banner__item__pic">
                                        <img src="img/banner/banner-1.jpg" alt=""/>
                                    </div>
                                    <div className="banner__item__text">
                                        <h2>Clothing Collections 2030</h2>
                                        <a href="/shop">Shop now</a>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </section>
              
                
                
                
                
                <Script strategy="beforeInteractive" type="text/javascript" src="js/owl.carousel.min.js"></Script>
                <Script strategy="beforeInteractive" type="text/javascript" src="js/jquery-3.3.1.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/bootstrap.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/jquery.nice-select.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/jquery.nicescroll.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/jquery.magnific-popup.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/jquery.countdown.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/jquery.slicknav.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/mixitup.min.js"></Script>
                <Script strategy="afterInteractive" type="text/javascript" src="js/main.js"></Script>
            </div>
        {/* </PageWrapper> */}
      </>)
    }
}


export default Home

