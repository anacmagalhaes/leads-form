import mongoose from "mongoose";

const leadSchema = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    phone: {
        required: true,
        type: String
    }
})

export default mongoose.model('Data', leadSchema);