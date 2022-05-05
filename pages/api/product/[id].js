import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product"

dbConnect();

export default async (req, res) => {
    
    const id = req.query.id;
    console.log(id)
    const product = await Product.findOne({_id: id})
    console.log(product)
    
    res.status(200).json({data: product})
}