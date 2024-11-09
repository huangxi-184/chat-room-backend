import { Injectable } from '@nestjs/common';
import { createTransport, Transporter } from 'nodemailer';

@Injectable()
export class EmailService {
  transporter: Transporter;

  constructor() {
    this.transporter = createTransport({
      host: 'smtp.163.com',
      port: 465,
      secure: true,
      auth: {
        user: 'huangxi0226@163.com',
        pass: 'VABOFGUDAOXBOKPQ',
      },
    });
  }

  async sendMail({ to, subject, html }) {
    await this.transporter.sendMail({
      from: {
        name: '聊天室注册',
        address: 'huangxi0226@163.com',
      },
      to,
      subject,
      html,
    });
  }
}
