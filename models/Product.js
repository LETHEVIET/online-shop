
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
        name: String,
        rating: {
            total: Number,
            count: Number
        },
        price: Number,
        clan: String,
        description: String,
        sale: Boolean,
        images: [{
            type: String
        }]
    },{ timestamps: true });

    productSchema.method("toJSON", function() {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);