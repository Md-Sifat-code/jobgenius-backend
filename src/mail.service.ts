// src/mail.service.ts
import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
  private transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  async sendVerificationCode(to: string, code: string) {
    const html = `
      <h2>Verify Your Email</h2>
      <p>Your verification code is:</p>
      <h1>${code}</h1>
      <p>This code expires in 10 minutes.</p>
    `;

    await this.transporter.sendMail({
      to,
      from: `"JobGenius" <${process.env.GMAIL_USER}>`,
      subject: 'Your JobGenius verification code',
      html,
    });
  }
}
