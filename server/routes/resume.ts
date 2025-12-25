import { RequestHandler } from "express";
import path from "path";
import fs from "fs";

export const handleResumeDownload: RequestHandler = (req, res) => {
  try {
    // Define the path to your resume file
    // You can place your resume PDF in the public folder
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
      // If no resume file exists, create a placeholder response
      console.log("⚠️ Resume file not found, sending placeholder");
      
      // Create a simple text response as placeholder
      const placeholderContent = `
Mehul Dindorkar - Resume

Contact Information:
Email: mehuldindorkar3107@gmail.com
Phone: +91 7096179673
Location: Gujarat, India

Education:
• Master of Computer Applications (MCA) - LJ University (2024-2026)
• Bachelor of Computer Applications (BCA) - ITM (SLS) Baroda University (2021-2024)

Technical Skills:
• Python for Data Analytics (Pandas, NumPy, Matplotlib)
• Power BI / Tableau
• MongoDB
• Data Cleaning & Dashboard Development

Work Experience:
• MERN Stack Development Intern at Webbrains Stack
• Data Analytics Projects - Market Trends Dashboard
• Currently developing Order Nova - Product Comparison Tool

Soft Skills:
• Open-Minded Team Contributor
• Collaborative Problem-Solving
• Quick Learner in Dynamic Environments

---
Note: This is a placeholder text file. 
Please add your actual PDF resume to /public/Mehul_Dindorkar_Resume.pdf
      `.trim();

      res.setHeader('Content-Type', 'text/plain');
      res.setHeader('Content-Disposition', 'attachment; filename="Mehul_Dindorkar_Resume.txt"');
      res.send(placeholderContent);
    }
  } catch (error) {
    console.error("❌ Resume download error:", error);
    res.status(500).json({ 
      error: "Sorry, there was an error downloading the resume. Please try again later." 
    });
  }
};
