const mongoose = require("mongoose");

const CustomproductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true },
  variations: [variationSchema],
  images: [String],
});

module.exports = mongoose.model("CustomProduct", CustomproductSchema);
