import { Injectable } from "@nestjs/common";
import * as nodemailer from 'nodemailer';

Injectable()
export class MailService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SENDGRID_HOST,
            port: 587,
            auth: {
                user: process.env.SENDGRID_USER,
                pass: process.env.SENDGRID_PASSWORD,
            }
        })
    }

    async sendMail(to: string, subject: string, text: string) {
        const info = await this.transporter.sendMail({
            from: '"NestJS Testing 👻" <camilotesting@outlook.com>',
            to,
            subject,
            text
        })
    }
}