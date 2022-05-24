import nodemailer from 'nodemailer'
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "b10dafcd4732ae",
    pass: "5707fd812a137a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({ body, subject }: SendMailData) {
  await transport.sendMail({
    from: 'Equipe Feedget <oi@feedget.com>',
    to: 'Rafael Campos <rafaelscampos15@gmail.com>',
    subject,
    html: body
  })
 }
}