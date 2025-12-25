import { RequestHandler } from "express";
import path from "path";
import fs from "fs";
import PDFDocument from "pdfkit";

export const handleResumeDownload: RequestHandler = (req, res) => {
  try {
    // Define the path to your resume file
    const resumePath = path.join(process.cwd(), 'public', 'Mehul_Dindorkar_Resume.pdf');
    
    // Check if the resume file exists
    if (fs.existsSync(resumePath)) {
      // Set appropriate headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mehul_Dindorkar_Resume.pdf"');
      
      // Stream the file to the response
      const fileStream = fs.createReadStream(resumePath);
      fileStream.pipe(res);
      
      console.log("✅ Resume download initiated");
    } else {
      // Generate PDF with actual resume content
      console.log("📄 Generating PDF resume");
      
      // Set headers for PDF download
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Mehul_Dindorkar_Resume.pdf"');
      
      // Create PDF document
      const doc = new PDFDocument({ margin: 50 });
      
      // Pipe the PDF to the response
      doc.pipe(res);
      
      // Define colors
      const primaryColor = '#6366f1'; // Purple
      const secondaryColor = '#4f46e5'; // Darker purple
      const textColor = '#1f2937'; // Dark gray
      const lightTextColor = '#6b7280'; // Light gray
      
      // Header - Name
      doc.fillColor(primaryColor)
         .fontSize(28)
         .font('Helvetica-Bold')
         .text('MEHUL DINDORKAR', 50, 50);
      
      // Contact Information
      doc.fillColor(textColor)
         .fontSize(11)
         .font('Helvetica')
         .text('+91 7096179673', 50, 90)
         .text('mehuldindorkar3107@gmail.com', 200, 90)
         .text('Gujarat, India', 400, 90);
      
      // Horizontal line
      doc.moveTo(50, 115)
         .lineTo(550, 115)
         .strokeColor(primaryColor)
         .lineWidth(2)
         .stroke();
      
      let yPosition = 140;
      
      // Summary Section
      doc.fillColor(primaryColor)
         .fontSize(16)
         .font('Helvetica-Bold')
         .text('SUMMARY', 50, yPosition);
      
      yPosition += 25;
      doc.fillColor(textColor)
         .fontSize(10)
         .font('Helvetica')
         .text('Passionate and curious MCA student from LJ University with a BCA background from ITM (SLS)', 50, yPosition, { width: 500 })
         .text('Baroda. Experienced in building full-stack MERN projects and creating insightful dashboards', 50, yPosition + 12, { width: 500 })
         .text('through data cleaning and analysis. Known for being adaptive, honest, and consistent. Eager to', 50, yPosition + 24, { width: 500 })
         .text('gain real-world experience and contribute meaningfully to a data-driven environment.', 50, yPosition + 36, { width: 500 });
      
      yPosition += 70;
      
      // Education Section
      doc.fillColor(primaryColor)
         .fontSize(16)
         .font('Helvetica-Bold')
         .text('EDUCATION', 50, yPosition);
      
      yPosition += 25;
      
      // Masters
      doc.fillColor(textColor)
         .fontSize(12)
         .font('Helvetica-Bold')
         .text('MASTERS QUALIFICATION', 50, yPosition);
      
      doc.fillColor(lightTextColor)
         .fontSize(10)
         .font('Helvetica')
         .text('2024 - 2026', 400, yPosition);
      
      yPosition += 15;
      doc.fillColor(textColor)
         .fontSize(11)
         .font('Helvetica')
         .text('LJ (Lok Jagruti) University', 50, yPosition);
      
      yPosition += 25;
      
      // Bachelors
      doc.fillColor(textColor)
         .fontSize(12)
         .font('Helvetica-Bold')
         .text('BACHELORS QUALIFICATION', 50, yPosition);
      
      doc.fillColor(lightTextColor)
         .fontSize(10)
         .font('Helvetica')
         .text('2021 - 2024', 400, yPosition);
      
      yPosition += 15;
      doc.fillColor(textColor)
         .fontSize(11)
         .font('Helvetica')
         .text('ITM (SLS) Baroda University', 50, yPosition);
      
      yPosition += 35;
      
      // Technical Skills Section
      doc.fillColor(primaryColor)
         .fontSize(16)
         .font('Helvetica-Bold')
         .text('TECHNICAL SKILLS', 50, yPosition);
      
      yPosition += 25;
      
      const technicalSkills = [
        'Python for Data Analytics (Pandas, NumPy, Matplotlib)',
        'Interactive Dashboard Development (Power BI / Tableau)',
        'NoSQL & Document Databases (MongoDB)'
      ];
      
      technicalSkills.forEach(skill => {
        doc.fillColor(textColor)
           .fontSize(10)
           .font('Helvetica')
           .text('• ' + skill, 50, yPosition);
        yPosition += 15;
      });
      
      yPosition += 10;
      
      // Soft Skills
      doc.fillColor(primaryColor)
         .fontSize(14)
         .font('Helvetica-Bold')
         .text('SOFT SKILLS', 50, yPosition);
      
      yPosition += 20;
      
      const softSkills = [
        'Open-Minded Team Contributor',
        'Collaborative Problem-Solving Mindset',
        'Quick Learner in Dynamic Environments'
      ];
      
      softSkills.forEach(skill => {
        doc.fillColor(textColor)
           .fontSize(10)
           .font('Helvetica')
           .text('• ' + skill, 50, yPosition);
        yPosition += 15;
      });
      
      yPosition += 15;
      
      // Work Experience Section
      doc.fillColor(primaryColor)
         .fontSize(16)
         .font('Helvetica-Bold')
         .text('WORK EXPERIENCE', 50, yPosition);
      
      yPosition += 25;
      
      // Experience 1
      doc.fillColor(textColor)
         .fontSize(11)
         .font('Helvetica-Bold')
         .text('Built a freelancing website using the MERN stack as part of an internship at', 50, yPosition);
      
      yPosition += 12;
      doc.text('Webbrains Stack', 50, yPosition);
      
      yPosition += 20;
      
      // Experience 2
      doc.fontSize(11)
         .font('Helvetica-Bold')
         .text('Performed data cleaning and created interactive dashboards to track and', 50, yPosition);
      
      yPosition += 12;
      doc.font('Helvetica')
         .text('analyze market trends.', 50, yPosition);
      
      yPosition += 20;
      
      // Experience 3
      doc.font('Helvetica-Bold')
         .text('Currently developing Order Nova, a product comparison tool that shows real-', 50, yPosition);
      
      yPosition += 12;
      doc.font('Helvetica')
         .text('time prices and offers across multiple platforms.', 50, yPosition);
      
      // Footer
      yPosition += 40;
      doc.fillColor(lightTextColor)
         .fontSize(8)
         .font('Helvetica')
         .text('Generated from portfolio website', 50, yPosition)
         .text(`Downloaded on: ${new Date().toLocaleDateString('en-IN')}`, 400, yPosition);
      
      // Finalize the PDF
      doc.end();
      
      console.log("✅ PDF resume generated and sent");
    }
  } catch (error) {
    console.error("❌ Resume download error:", error);
    res.status(500).json({ 
      error: "Sorry, there was an error downloading the resume. Please try again later." 
    });
  }
};
