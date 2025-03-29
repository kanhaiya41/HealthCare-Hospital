import mongoose, { mongo } from "mongoose";



const patientSchema = mongoose.Schema({
    name: String,
    age: String,
    gender: String,
    phone: String,
    dept: String
});

const patientModel = mongoose.model('patients', patientSchema);

export default patientModel;