const Lead = require("../models/Lead");
const nodemailer = require("nodemailer");

exports.sendContactMessage = async (req, res) => {
  try {
    const { name, email, phone, company, service, message } = req.body;

    if (!email || !message || !name) {
      return res.status(400).json({ error: "Name, email, and message are required." });
    }

    // Save lead in DB
    await Lead.create({
      name,
      email,
      phone,
      company,
      service,
      message,
      source: "contact-form",
      createdAt: new Date(),
    });

    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: Number(process.env.SMTP_PORT) === 465,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: 10000,
        greetingTimeout: 10000,
        socketTimeout: 10000,
      });

      transporter.sendMail({
        from: process.env.FROM_EMAIL,
        to: process.env.TO_EMAIL,
        subject: "New Contact Form Submission",
        html: `
          <h2>New Contact Message</h2>

          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Service Interested:</b> ${service || "N/A"}</p>

          <p><b>Message:</b><br>${message}</p>

          <hr>
          <p style="font-size:12px;color:#777;">Lead source: Website Contact Form</p>
        `,
      }).catch((mailError) => {
        console.error("SMTP ERROR:", mailError);
      });
    }

    return res.json({ success: true, message: "Message sent successfully!" });

  } catch (error) {
    console.error("FULL ERROR:", error);
    return res.status(500).json({ error: error.message });
  }
};
