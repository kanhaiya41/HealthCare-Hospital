import patientModel from "../models/patientModel.js";
import nodemailer from 'nodemailer';


export const sendMail = async (req, res) => {
    const { name, email, dept, phone, msj } = req.body;
    //set nodemailer transport
    const transtporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.OURMAIL,
            pass: process.env.MAILPASS
        }
    });
    //body of mail
    const mailBody = {
        from: process.env.OURMAIL,
        to: email,
        subject: 'Healthcare Hospital',
        html: `<h1>Thank you for Contact us</h1>
        <h2>We can Contact you soon</h2>
        <h3>Your Details:</h3>
        <p>${name}</p>
        <p>${email}</p>
        <p>${phone}</p>
        <p>${dept}</p>
        <p>${msj}</p>
        `,
    };
    try {
        let info = await transtporter.sendMail(mailBody);
        res.status(200).json({
            success: true,
            message: 'Thanks! Your request is submited 🤗'
        });
    } catch (error) {
        console.error('error sending mail:' + error);
        res.status(500).send("error sending mail:" + error.message);
    }
};

export const registerPatient = async (req, res) => {
    try {
        const { name, age, gender, phone, dept } = req.body;
        if (!name || !age || !gender || !phone || !dept) {
            return res.status(401).json({
                success: false,
                message: 'Something is missing,Please cheack!'
            });
        }
        const ifExist = await patientModel.findOne({ name, dept });
        if (ifExist) {
            return res.status(500).json({
                success: false,
                message: 'Patient is already registered!'
            });
        }
        else {
            const is = await patientModel({ name, age, gender, phone, dept });
            const ss = await is.save();
            return res.status(200).json({
                success: true,
                message: 'Patient registered successfully 👍'
            });
        }
    } catch (error) {
        console.log("error while register patient ", error);
    }
}

export const getPatients = async (req, res) => {
    try {
        const allStock = await patientModel.find();
        if (!allStock) {
            return res.status(404).json({
                message: 'No record Available!'
            })
        }
        else {
            return res.status(200).json({
                success: true,
                message: 'patient record geted',
                allStock
            })
        }
    } catch (error) {
        console.log("error while getting patient record", error);
    }
}
