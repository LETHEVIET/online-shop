import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order"

dbConnect();

export default async (req, res) => {
    const {method} = req;
    console.log(process.version)
    switch (method) {
        case 'GET':
            try{
                console.log('hihi')
                const orders = await Order.find()
                res.send(orders)
            }catch (e) {
                res.status(500).json({ message: e.message || "Some error occurred while retrieving tutorials."})
            }
            break;
        case 'POST':
            try{
                if (!req.body) {
                    res.status(400).send({ message: "Content can not be empty!" });
                    return;
                }
                console.log("body", req.body)
                const order = new Order(
                    {
                        items : req.body.items,
                        billingDetals:req.body.billingDetals
                    }
                );

                order
                    .save(order)
                    .then(data => {
                        console.log(data)
                        res.send(data);
                    })
                    .catch(err => {
                        res.status(500).send({
                            message: 
                                err.message || "Some error occurred while creating the Person."
                        });
                    });
            }catch (e){
                
            }
            break;
    }
}