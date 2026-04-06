import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ message: "Missing fields" });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: email,
            to: process.env.EMAIL_USER,
            subject: `Contact Form: ${name}`,
            text: message,
        });

        return res.status(200).json({ message: "Email sent" });
    } catch (error) {
        return res.status(500).json({ message: "Error sending email" });
    }
}