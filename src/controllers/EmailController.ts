import { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import configMail from '../config/mailsender';

export default {
    async sendMail(req: Request, res: Response) {
        const transporter =  await nodemailer.createTransport(configMail);
        const { name, email, tel, message } = req.body;
        
        const content = `Interesse de apartamento \nCliente: ${name} \ntelefone: ${tel} \nemail: ${email} \nmensagem: ${message}`;

        const mailOptions = {
            from: 'cruvineltestmailsender@gmail.com',
            to: `allan.cruvinel@gmail.com`,
            subject: `Site CorretorTanaka`,
            text: `${content}`
        };


        await transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                transporter.close(); //exclui as confiruações de usuario remetente
                return res.status(401).json({ message: "ERROR " + error });

            } else {
                console.log('sucess ' + info);
                transporter.close();
                return res.json({ message: "SUCESS  sended" });
            }
        });


    }
}