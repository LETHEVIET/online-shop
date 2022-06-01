import OrderDetails from "../../components/orderDetails"

export default function OrderDetail(props) {    
    
    console.log("kkk", props)
    return (<>
        {props.data && 
            <OrderDetails data= {props.data} />
        }
    </>)
};


OrderDetail.getInitialProps = async ({ query: { id } }) => {
    console.log("hiii")

    const res = await fetch(`http://localhost:9000/api/order/${id}`)

    const { data } = await res.json();
    console.log(data)
    
    return {data: data}
}