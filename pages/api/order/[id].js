import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order"
import Product from "../../../models/Product"

dbConnect();

export default async (req, res) => {
    
    const id = req.query.id;
    console.log(id)
    let order = await Order.findOne({_id: id})
    console.log(order)
    let oorder = {
        billingDetails: order.billingDetals,
        items: []
    }
    for (let i=0; i<order.items.length; i++){
        let product = await Product.findOne({_id: order.items[i].id})
        oorder.items.push({
            orderDetails: order.items[i].orderDetals,
            productDetails: product
        })
        // console.log(i, order.items[i].product)
    }
    console.log(oorder)
    res.status(200).json({data: oorder})
}