import mongoose from "mongoose";

const dbConnect = async () => {
    try {

        await mongoose.connect(process.env.DBURL).then(() => {
            console.log('connected to database');
        })

    } catch (error) {
        console.log("while connecting to db", error);
    }
}

export default dbConnect;