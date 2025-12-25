import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  Github,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  BarChart3,
  GraduationCap,
  Briefcase,
  User
} from "lucide-react";

export default function Index() {
  const technicalSkills = [
    "Excel",
    "SQL (Beginners Level)",
    "Python (Pandas, NumPy)",
    "Data Collection",
    "Power BI",
    "Data Cleaning & Preprocessing",
    "Dashboard Development"
  ];

  const softSkills = [
    "Analytical Thinking",
    "Problem-Solving",
    "Attention to Detail",
    "Effective Communication",
    "Time Management"
  ];

  const handleResumeDownload = () => {
    // Create a temporary link to trigger download
    const link = document.createElement('a');
    link.href = '/api/resume/download';
    link.download = 'Mehul_Dindorkar_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        
        {/* Geometric Grid */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
        
        {/* Floating Particles */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>
        
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="hexagons" x="0" y="0" width="100" height="87" patternUnits="userSpaceOnUse">
                <polygon fill="none" stroke="currentColor" strokeWidth="1" points="50,1 95,25 95,75 50,99 5,75 5,25"/>
              </pattern>
            </defs>
            <rect fill="url(#hexagons)" width="100%" height="100%"/>
          </svg>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 w-full border-b border-white/20 bg-black/20 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-white">Mehul Dindorkar</div>
              <div className="hidden md:flex items-center space-x-6">
                <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
                <a href="#education" className="text-white/80 hover:text-white transition-colors">Education</a>
                <a href="#skills" className="text-white/80 hover:text-white transition-colors">Skills</a>
                <a href="#projects" className="text-white/80 hover:text-white transition-colors">Projects</a>
                <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white">
                    Hi, I'm{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Mehul Dindorkar</span>
                  </h1>
                  <p className="text-xl text-white/90">
                    MCA Student & Data Analytics Enthusiast
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    MCA student with strong skills in cleaning, organizing, and analyzing data. Experienced with Power BI, Tableau, SQL, and Python (Pandas, NumPy). I enjoy turning raw data into clear insights and visuals, with a problem-solving and adaptable approach.
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" className="gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                    <Mail className="h-4 w-4" />
                    Get in Touch
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 border-blue-400/30 text-white hover:from-blue-600 hover:to-cyan-600"
                    onClick={handleResumeDownload}
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </Button>
                </div>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon" className="bg-gradient-to-r from-gray-700 to-gray-900 text-white hover:from-gray-600 hover:to-gray-800" asChild>
                    <a href="https://github.com/mehuldindorkar" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white hover:from-blue-500 hover:to-blue-700" asChild>
                    <a href="https://www.linkedin.com/in/mehul-dindorkar/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 backdrop-blur-sm border border-white/10 flex items-center justify-center animate-shimmer overflow-hidden">
                    <img
                      src="https://cdn.builder.io/api/v1/image/assets%2F36066ed775c34d10bee511bc842f7339%2F5a5fac1f4b974a019083caecd9716fc7?format=webp&width=800"
                      alt="Mehul Dindorkar - Profile Picture"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full p-3 shadow-lg">
                    <Code className="h-6 w-6" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full p-3 shadow-lg">
                    <Database className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">About Me</h2>
              <p className="text-white/80 text-lg max-w-2xl mx-auto">
                Let me introduce myself and my journey in technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-purple-400" />
                    Summary
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 leading-relaxed">
                    MCA student at LJ University with a BCA from ITM (SLS) Baroda, skilled in data cleaning, preprocessing, visualization, and analysis. Proficient in Power BI, Tableau, SQL, and Python libraries (Pandas, NumPy, Matplotlib). Experienced in working with real-world datasets, improving data quality, and preparing structured datasets for accurate reporting and insights. Known for adaptability, integrity, and strong problem-solving skills, with a growing interest in data-driven decision-making.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    Current Focus
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Right now, I'm working on improving my skills in Excel, SQL, and web scraping. I'm focusing on learning the advanced parts of Excel and SQL in a simple, practical way. I also download real datasets from Kaggle and other websites and practice cleaning and organizing them every day to get better at understanding data.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Education</h2>
              <p className="text-white/80 text-lg">
                My academic journey and qualifications
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <GraduationCap className="h-5 w-5 text-purple-400" />
                        Masters Qualification
                      </CardTitle>
                      <CardDescription className="text-white/60">2024 - 2026</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Ongoing</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2 text-white">Master of Computer Applications (MCA)</h3>
                  <p className="text-white/80">LJ (Lok Jagruti) University</p>
                  <p className="text-sm text-white/70 mt-2">
                    Focusing on advanced computer science concepts, software development, and data analytics.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <GraduationCap className="h-5 w-5 text-blue-400" />
                        Bachelors Qualification
                      </CardTitle>
                      <CardDescription className="text-white/60">2021 - 2024</CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-white/20 text-white">Completed</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold text-lg mb-2 text-white">Bachelor of Computer Applications (BCA)</h3>
                  <p className="text-white/80">ITM (SLS) Baroda University</p>
                  <p className="text-sm text-white/70 mt-2">
                    Foundation in programming, database management, and software development principles.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Technical Skills</h2>
              <p className="text-white/80 text-lg">
                Technologies and tools I work with
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <Code className="h-5 w-5 text-purple-400" />
                    Technical Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {technicalSkills.map((skill, index) => (
                      <Badge key={index} className="mb-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <User className="h-5 w-5 text-blue-400" />
                    Soft Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {softSkills.map((skill, index) => (
                      <Badge key={index} variant="outline" className="mb-2 border-white/20 text-white">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Hands On Projects</h2>
              <p className="text-white/80 text-lg">
                Selected projects and data initiatives
              </p>
            </div>
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-orange-400" />
                    Rohit Sharma Performance Analysis Dashboard
                  </CardTitle>
                  <CardDescription className="text-white/60">Cricket Performance Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Created the entire dataset manually and analyzed it using Power BI. Covers Rohit Sharma's performance from 2019 to 2025. Visualizes key stats like runs, batting average, strike rate, centuries, and half-centuries. Designed the dashboard to be simple, clear, and easy for anyone to understand. Converts raw cricket numbers into meaningful insights and highlights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Power BI</Badge>
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Data Collection</Badge>
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Data Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Sports Analytics</Badge>
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Dashboard Design</Badge>
                    <Badge className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border-orange-400/30 text-white">Cricket Stats</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    India’s Population Analyst Till 2021
                  </CardTitle>
                  <CardDescription className="text-white/60">Power BI Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Developed a Power BI dashboard for India's population, analyzing state-wise literacy, gender ratio, and growth trends. Cleaned and transformed data using Power Query for accurate insights. Designed charts, maps, and slicers for intuitive state-level visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Power BI</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Power Query</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Data Cleaning</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Data Visualization</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Maps</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">State-wise Analysis</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-cyan-400" />
                    Electric Vehicle Analysis
                  </CardTitle>
                  <CardDescription className="text-white/60">Power BI Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Built an interactive Power BI dashboard analyzing 150K+ EV registrations. Cleaned and modeled the dataset using Power Query and DAX to ensure accurate metrics. Discovered that 78% of registrations were BEVs, with Tesla leading at ~69K vehicles (~46% market share). Visualized strong adoption growth from 2010–2023 using time-series charts, regional maps, and slicers for deep drill-downs.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">Power BI</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">Power Query</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">DAX</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">150K+ Records</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">BEV Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border-cyan-400/30 text-white">Growth Trends</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-emerald-400" />
                    ElectroHub Sales & Profit Analysis Dashboard
                  </CardTitle>
                  <CardDescription className="text-white/60">Power BI Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Created a Power BI dashboard using ElectroHub sales data to understand business performance. Shows top and bottom 5 products, sales and profit trends over time, and their correlation. Compares different time periods and includes average discount, total orders, and detailed order breakdowns (sales, profit, discounts, net sales). Features interactive filters by product, date, customer ID, and promotion type. Identifies top-contributing cities by sales. Demonstrates ability to clean data, analyze sales metrics, and transform numbers into actionable business insights.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">Power BI</Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">Sales Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">Data Cleaning</Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">Profit Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">Interactive Filters</Badge>
                    <Badge className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border-emerald-400/30 text-white">KPI Dashboard</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-yellow-400" />
                    Global Profit Analysis – Excel Dashboard (My First Excel Project)
                  </CardTitle>
                  <CardDescription className="text-white/60">Excel Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    This was my first project in Excel where I created a complete dashboard from scratch. Cleaned the data, built pivot tables, and visualized the profit performance of different regions and product categories. The dashboard shows which areas are doing well, which ones need improvement, and the overall profit distribution. This project helped me understand how raw data can be turned into clear, simple insights using only Excel.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Excel</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Pivot Tables</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Data Cleaning</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Dashboard Design</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Regional Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-yellow-400/30 text-white">Profit Visualization</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-red-400" />
                    Task Tracking System In Google Sheet
                  </CardTitle>
                  <CardDescription className="text-white/60">Google Sheets Automation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Engineered an intelligent task management system in Google Sheets that transforms raw task data into real-time, decision-ready insights. Built a dynamic dashboard to instantly track priorities, progress, and overdue tasks. Enabled business owners to spot execution gaps early and drive faster, data-backed actions with confidence. Features automated status updates, priority tracking, and deadline monitoring.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Google Sheets</Badge>
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Task Management</Badge>
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Dashboard</Badge>
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Data Automation</Badge>
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Real-time Tracking</Badge>
                    <Badge className="bg-gradient-to-r from-red-500/20 to-rose-500/20 border-red-400/30 text-white">Priority Management</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-violet-400" />
                    Product Sales Management Analysis In Excel
                  </CardTitle>
                  <CardDescription className="text-white/60">Excel Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Built a smart Excel-based sales management system that transforms raw product data into actionable insights. The dashboard provides real-time visibility into sales performance by product, region, and time period, enabling quick analysis of top-selling and underperforming items through interactive slicers and visuals. Designed for fast decision-making and efficient sales tracking with comprehensive KPI metrics.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">Excel</Badge>
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">Sales Analysis</Badge>
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">Pivot Tables</Badge>
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">Interactive Slicers</Badge>
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">KPI Metrics</Badge>
                    <Badge className="bg-gradient-to-r from-violet-500/20 to-purple-500/20 border-violet-400/30 text-white">Regional Performance</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-black/20 backdrop-blur-sm">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Get In Touch</h2>
              <p className="text-white/80 text-lg">
                Ready to collaborate? Let's connect and build something amazing together
              </p>
            </div>
            <div className="flex justify-center">
              <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-md w-full">
                <CardHeader>
                  <CardTitle className="text-white text-center">Contact Information</CardTitle>
                  <CardDescription className="text-white/60 text-center">
                    Feel free to reach out for opportunities or collaboration
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-purple-400" />
                    <span className="text-white">+91 7096179673</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-400" />
                    <span className="text-white">mehuldindorkar3107@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Linkedin className="h-5 w-5 text-blue-400" />
                    <a href="https://www.linkedin.com/in/mehul-dindorkar/" target="_blank" rel="noopener noreferrer" className="text-white underline">linkedin.com/in/mehul-dindorkar</a>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-green-400" />
                    <span className="text-white">Gujarat, India</span>
                  </div>
                  <Separator className="bg-white/20" />
                  <div className="flex gap-4 justify-center">
                    <Button variant="outline" size="sm" className="gap-2 bg-gradient-to-r from-gray-700 to-gray-900 border-gray-600 text-white hover:from-gray-600 hover:to-gray-800" asChild>
                      <a href="https://github.com/mehuldindorkar" target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2 bg-gradient-to-r from-blue-600 to-blue-800 border-blue-500 text-white hover:from-blue-500 hover:to-blue-700" asChild>
                      <a href="https://www.linkedin.com/in/mehul-dindorkar/" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-4 border-t border-white/20">
          <div className="container mx-auto text-center">
            <p className="text-white/80">
              © Mehul Dindorkar
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
