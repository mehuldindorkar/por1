import { RequestHandler } from "express";
import nodemailer from "nodemailer";
import { z } from "zod";

// Validation schema for contact form
const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().email("Invalid email format"),
  message: z.string().min(1, "Message is required").max(1000, "Message too long")
});

// Create email transporter
const createEmailTransporter = () => {
  const emailUser = process.env.EMAIL_USER;
  const emailPassword = process.env.EMAIL_PASSWORD;
  
  // Check if we have email credentials
  if (emailUser && emailPassword && 
      !emailUser.includes('your_email') && 
      !emailPassword.includes('your_password')) {
    try {
      return nodemailer.createTransporter({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPassword
        }
      });
    } catch (error) {
      console.warn("Failed to initialize email transporter:", error);
      return null;
    }
  }
  return null;
};

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    // Validate the form data
    const validatedData = ContactFormSchema.parse(req.body);
    const { name, email, message } = validatedData;

    // Your email address
    const yourEmail = "mehuldindorkar6472@gmail.com";

    // Get email transporter
    const transporter = createEmailTransporter();
    
    if (!transporter) {
      // Fallback: Log the message (for development)
      console.log("📧 New Contact Form Submission:");
      console.log("From:", name, `<${email}>`);
      console.log("Message:", message);
      console.log("Email would be sent to:", yourEmail);
      
      return res.json({ 
        success: true, 
        message: "Message received successfully! (Email service not configured - check server logs)" 
      });
    }

    // Email content
    const emailSubject = `Portfolio Contact: Message from ${name}`;
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333; border-bottom: 2px solid #6366f1; padding-bottom: 10px;">New Contact Form Submission</h2>
        
        <div style="background-color: #f8fafc; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #6366f1; margin-top: 0;">Contact Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
        </div>
        
        <div style="background-color: #f1f5f9; padding: 15px; border-radius: 5px;">
          <h3 style="color: #333; margin-top: 0;">Message</h3>
          <p style="line-height: 1.6; color: #555;">${message}</p>
        </div>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #ecfdf5; border-radius: 5px; border-left: 4px solid #10b981;">
          <p style="margin: 0; color: #065f46;">
            <strong>Quick Actions:</strong><br>
            Reply to this person: <a href="mailto:${email}?subject=Re: Portfolio Contact" style="color: #10b981;">Click here to reply</a>
          </p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e7eb;">
        <p style="color: #6b7280; font-size: 12px; text-align: center;">
          This message was sent from your portfolio website contact form.<br>
          Sent at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
        </p>
      </div>
    `;

    const emailText = `
New Contact Form Submission

From: ${name}
Email: ${email}

Message:
${message}

Reply to: ${email}
Received: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} (IST)
    `;

    try {
      // Send email
      await transporter.sendMail({
        from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
        to: yourEmail,
        subject: emailSubject,
        text: emailText,
        html: emailHtml,
        replyTo: email // This allows you to reply directly to the sender
      });

      console.log("✅ Email sent successfully to", yourEmail);
      
      res.json({ 
        success: true, 
        message: "Message sent successfully! I'll get back to you soon." 
      });

    } catch (emailError) {
      console.error("❌ Email sending error:", emailError);
      
      // Log the message as fallback
      console.log("📧 Contact Form (Email failed, logged instead):");
      console.log("From:", name, `<${email}>`);
      console.log("Message:", message);
      
      res.json({ 
        success: true, 
        message: "Message received! There was an issue with email delivery, but your message has been logged." 
      });
    }

  } catch (error) {
    console.error("❌ Contact form error:", error);
    
    if (error instanceof z.ZodError) {
      return res.status(400).json({ 
        success: false, 
        message: "Please fill out all fields correctly.",
        errors: error.errors 
      });
    }
    
    res.status(500).json({ 
      success: false, 
      message: "Sorry, there was an error processing your message. Please try again." 
    });
  }
};
