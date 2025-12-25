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
    "Python for Data Analytics",
    "Pandas, NumPy, Matplotlib",
    "Power BI / Tableau",
    "MongoDB"
  ];

  const softSkills = [
    "Open-Minded Team Contributor",
    "Collaborative Problem-Solving",
    "Quick Learner",
    "Adaptive",
    "Honest",
    "Consistent"
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
                <a href="#experience" className="text-white/80 hover:text-white transition-colors">Experience</a>
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
                    Passionate about building full-stack applications and creating insightful 
                    data dashboards. Currently pursuing Masters in Computer Applications at LJ University.
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
                      src="https://cdn.builder.io/api/v1/image/assets%2F36066ed775c34d10bee511bc842f7339%2Fd3eef8f4e2c544a39d64522940233b76?format=webp&width=800"
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
                    Passionate and curious MCA student from LJ University with a BCA background from ITM (SLS) Baroda. 
                    Experienced in building full-stack MERN projects and creating insightful dashboards through data 
                    cleaning and analysis. Known for being adaptive, honest, and consistent. Eager to gain real-world 
                    experience and contribute meaningfully to a data-driven environment.
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
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Order Nova Development</h4>
                    <p className="text-white/80 text-sm">
                      Currently developing a product comparison tool that shows real-time prices and offers across multiple platforms.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-white">Learning & Growth</h4>
                    <p className="text-white/80 text-sm">
                      Continuously expanding my knowledge in data analytics and dashboard development.
                    </p>
                  </div>
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
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Current</Badge>
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

        {/* Work Experience Section */}
        <section id="experience" className="py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Work Experience</h2>
              <p className="text-white/80 text-lg">
                Projects and internships that shaped my career
              </p>
            </div>
            <div className="space-y-8">
              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <Briefcase className="h-5 w-5 text-purple-400" />
                        MERN Stack Development Intern
                      </CardTitle>
                      <CardDescription className="text-white/60">Webbrains Stack</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-purple-500 to-pink-500">Internship</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Built a freelancing website using the MERN stack, gaining hands-on experience with 
                    React.js, Node.js, Express.js, and MongoDB. Developed user authentication, project 
                    management features, and responsive UI components. As part of daily routine, I converted 
                    messy datasets into cleaned datasets and created interactive dashboards for data visualization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white">React.js</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white">Node.js</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white">Express.js</Badge>
                    <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-400/30 text-white">MongoDB</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-white">
                    <BarChart3 className="h-5 w-5 text-blue-400" />
                    Data Analytics Project
                  </CardTitle>
                  <CardDescription className="text-white/60">Market Trends Dashboard</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Performed comprehensive data cleaning and created interactive dashboards to track and 
                    analyze market trends. Daily tasks included converting messy and unstructured datasets 
                    into clean, organized formats and developing insightful dashboards. Utilized Python libraries 
                    like Pandas and NumPy for data processing, and created visualizations using Matplotlib and Power BI.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Python</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Pandas</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">NumPy</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Power BI</Badge>
                    <Badge className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-400/30 text-white">Matplotlib</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-md border-white/20">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2 text-white">
                        <ExternalLink className="h-5 w-5 text-green-400" />
                        Order Nova
                      </CardTitle>
                      <CardDescription className="text-white/60">Product Comparison Tool</CardDescription>
                    </div>
                    <Badge className="bg-gradient-to-r from-green-500 to-blue-500">In Development</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-white/80 mb-4">
                    Currently developing a comprehensive product comparison tool that aggregates real-time 
                    prices and offers from multiple e-commerce platforms. The application helps users make 
                    informed purchasing decisions by providing price history and deal alerts.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30 text-white">React.js</Badge>
                    <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30 text-white">API Integration</Badge>
                    <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30 text-white">Real-time Data</Badge>
                    <Badge className="bg-gradient-to-r from-green-500/20 to-blue-500/20 border-green-400/30 text-white">Price Comparison</Badge>
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
