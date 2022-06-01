import dbConnect from "../../../utils/dbConnect";
import Order from "../../../models/Order"
import Product from "../../../models/Product"
import NodeMailer from 'nodemailer'

dbConnect();

export default async (req, res) => {
    const {method} = req;
    console.log(process.version)
    console.log("ddd", req.body, method)
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
            if (!req.body) {
                res.status(400).send({ message: "Content can not be empty!" });
                return;
            }

            

            let newOrder = req.body
            // console.log("hihiiiiiii", newOrder.items.length)
            // for (let i = 0; i < newOrder.items.length; i++){
            //     const product = await Product.findOne({id: newOrder.items[i].id})
            //     console.log(product)
            //     newOrder.items[i].id = product
            //     console.log("found")
            // }
            
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

                    let transporter = NodeMailer.createTransport({
                        service: 'gmail',
                        auth: {
                          user: 'letheviet10@gmail.com',
                          pass: '159753Vietle'
                        }
                    });
        
                    let mailOptions = {
                        from: 'letheviet10@gmail.com',
                        to: data.billingDetals.email,
                        subject: `Thanks for ordering`,
                        html: `
                        <table width="100%" cellspacing="0" cellpadding="0">
                            <tr>
                                <td>
                                    <table cellspacing="0" cellpadding="0">
                                        <tr>
                                            <td style="border-radius: 2px;" bgcolor="#ED2939">
                                                <a href="http://localhost:9000/order-details/${data._id.toString()}" target="_blank" style="padding: 8px 12px; border: 1px solid #ED2939;border-radius: 2px;font-family: Helvetica, Arial, sans-serif;font-size: 14px; color: #ffffff;text-decoration: none;font-weight:bold;display: inline-block;">
                                                    Click here to review your order        
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>`
                      };
                      
                    transporter.sendMail(mailOptions, function(error, info){
                        if (error) {
                          console.log(error);
                        } else {
                          console.log('Email sent: ' + info.response);
                        }
                    });

                    res.send(data);
                })
                .catch(err => {
                    res.status(500).send({
                        message: 
                            err.message || "Some error occurred while creating the Person."
                    });
                });
            break;
    }
}