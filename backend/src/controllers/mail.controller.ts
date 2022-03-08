import {Controller} from "./controller";
import { Request, Response } from 'express';
import nodemailer from "nodemailer";
import {AppConfig} from "../config/config";

export class MaiLController extends Controller {

    public static async sendMailAsync(req: Request, res: Response) {
        try {
            const body = req.body;

            if (body.honey) throw 'You filled it, didnt you?';

            let transporter = nodemailer.createTransport({
                host: AppConfig.MAIL_HOST,
                port: AppConfig.MAIL_PORT,
                secure: AppConfig.MAIL_SECURE, // true for 465, false for other ports
                auth: {
                    user: AppConfig.MAIL_USER, // generated ethereal user
                    pass: AppConfig.MAIL_PASS, // generated ethereal password
                },
            });

            let info = await transporter.sendMail({
                from: `Vuekyne <${AppConfig.MAIL_USER}>`, // sender address
                to: AppConfig.MAIL_TO, // list of receivers
                subject: body.subject, // Subject line
                text: "New Message", // plain text body
                html: `
                    <b>New Message from "${body.email}"</b>
                    <p>${body.message}</p>
                    `,
            });

            res.status(200).send("OK");
        } catch (error: any) {
            console.error(error);
            res.status(400).send("failed");
        }
    }

}
