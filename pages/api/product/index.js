import dbConnect from "../../../utils/dbConnect";
import Product from "../../../models/Product"

dbConnect();

const getPagination = (page, size) => {
    var limit = size ? size : 9;
    
    var offset = page ? page * limit : 0;
  
    return { limit, offset };
};

export default async (req, res) => {
    const {method} = req;
    console.log(process.version)
    switch (method) {
        case 'GET':
            try{
                // const { page, size, clan, sort } = req.query;

                // if (page){
                //     var condition = clan
                //     ? {clan}
                //     : {};
                //     //console.log(condition);  
                    
                //     const { limit, offset } = getPagination(page, size);
                //     console.log("sort", sort)
                //     var options = {}
                //     if (sort){
                //         options = {
                //             sort: {[sort]: -1},
                //             populate: 'result',
                //             lean: true,
                //             offset: offset, 
                //             limit: limit
                //         }
                //     }
    
                //     const persons = await Person.paginate(condition, options)
                //     res.status(200).json({
                //         totalPersons: persons.totalDocs,
                //         person: persons.docs,
                //         totalPages: persons.totalPages,
                //         currentPage: persons.page - 1,
                //     })                           
                // }else{
                    const products = await Product.find()
                    res.send(products)
                // }

            }catch (e) {
                res.status(500).json({ message: e.message || "Some error occurred while retrieving tutorials."})
            }
            break;
        case 'POST':
            try{
                if (!req.body.name) {
                    res.status(400).send({ message: "Content can not be empty!" });
                    return;
                }
                console.log(req.body)
                const product = new Product({
                    name: req.body.name,
                    rating: req.body.rating,
                    price: req.body.price,
                    clan: req.body.clan,
                    description: req.body.description,
                    sale: req.body.sale,
                    images: req.body.images
                });

                product
                    .save(product)
                    .then(data => {
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