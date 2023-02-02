const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const capitalSchema = new Schema({
    id: { type: Number, unique: true, required: true },
    country: { type: String },
    capital: { type: String }
});

module.exports = mongoose.model("Capital", capitalSchema);