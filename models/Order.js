
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
        items : [{
            orderDetals:{
                size: String,
                color: String,
                quantity: Number
            }, 
            id: String
        }],
        billingDetals:{
            name: String,
            city: String,
            district: String,
            street: String,
            phone: String,
            email: String,
        }
    },{ timestamps: true });

    orderSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.models.Order || mongoose.model('Order', orderSchema);