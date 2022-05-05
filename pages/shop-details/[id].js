import ProductDetals from "../../components/productDetails"

export default function ShopDetail(props) {    
    
    console.log("kkk", props)
    return (<>
        {props.product && 
            <ProductDetals addCart={props.addCart} product= {props.product} />
        }
    </>)
};

    

ShopDetail.getInitialProps = async ({ query: { id } }) => {
    console.log("hiii")
    
    // const protocol = req.headers['x-forwarded-proto'] || 'http'
    // const baseUrl = req ? `${protocol}://${req.headers.host}` : ''
    // console.log("kkk", baseUrl)
    // console.log(req.id)
    const res = await fetch(`http://localhost:9000/api/product/${id}`)
    // console.log(res)
    const { data } = await res.json();
    console.log(data)
    
    return {product: data}
}

