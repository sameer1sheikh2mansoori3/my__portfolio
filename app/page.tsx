'use client'

import { Github, ExternalLink, Mail, Linkedin, ChevronRight, Circle, FileCode, Briefcase, GraduationCap, Trophy, User, Braces, Cpu, Code, Boxes, Award } from 'lucide-react'

export default function Component() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-[#1e1e1e] text-[#d4d4d4] font-mono">
      {/* VS Code Header */}
      <div className="fixed top-0 w-full z-10 bg-[#1e1e1e] border-b border-[#333333]">
        <div className="flex h-9 items-center px-4 bg-[#323233]">
          <div className="flex items-center gap-2 text-sm">
            <FileCode className="w-4 h-4 text-[#5BB4EA]" />
            <span>portfolio.tsx</span>
          </div>
        </div>
      </div>

      {/* VS Code Sidebar + Main Content */}
      <div className="flex pt-9">
        {/* Activity Bar */}
        <div className="fixed w-12 h-full bg-[#333333] flex flex-col items-center py-4 gap-4">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#5BB4EA] transition-colors">
            <User className="w-6 h-6" />
          </button>
          <button onClick={() => scrollToSection('experience')} className="hover:text-[#E06C75] transition-colors">
            <Briefcase className="w-6 h-6" />
          </button>
          <button onClick={() => scrollToSection('projects')} className="hover:text-[#98C379] transition-colors">
            <Code className="w-6 h-6" />
          </button>
          <button onClick={() => scrollToSection('skills')} className="hover:text-[#C678DD] transition-colors">
            <Boxes className="w-6 h-6" />
          </button>
          <button onClick={() => scrollToSection('awards')} className="hover:text-[#61AFEF] transition-colors">
            <Award className="w-6 h-6" />
          </button>
        </div>

        {/* Explorer Sidebar */}
        <div className="fixed left-12 w-64 h-full bg-[#252526] p-4">
          <div className="flex items-center gap-1 text-sm mb-4">
            <ChevronRight className="w-4 h-4" />
            <span>PORTFOLIO</span>
          </div>
          
          <div className="space-y-2 text-sm">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-full flex items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 py-1"
            >
              <Braces className="w-3 h-3 text-[#5BB4EA]" />
              <span>about.tsx</span>
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="w-full flex items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 py-1"
            >
              <Cpu className="w-3 h-3 text-[#E06C75]" />
              <span>experience.cpp</span>
            </button>
            <button 
              onClick={() => scrollToSection('projects')}
              className="w-full flex items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 py-1"
            >
              <Code className="w-3 h-3 text-[#98C379]" />
              <span>projects.js</span>
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="w-full flex items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 py-1"
            >
              <Boxes className="w-3 h-3 text-[#C678DD]" />
              <span>skills.py</span>
            </button>
            <button 
              onClick={() => scrollToSection('awards')}
              className="w-full flex items-center gap-2 hover:bg-[#2a2d2e] rounded px-2 py-1"
            >
              <Award className="w-3 h-3 text-[#61AFEF]" />
              <span>awards.rs</span>
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main className="ml-76 pl-80 pr-4 py-8">
          {/* About Section */}
          <section id="about" className="mb-12 scroll-mt-16">
            <div className="text-[#5BB4EA] mb-2">// About.tsx</div>
            <h1 className="text-2xl font-bold mb-4">Sameer Sheikh Mansoori</h1>
            <p className="text-[#98C379]">Full Stack Developer</p>
            <p className="text-[#ABB2BF] mt-4">
              Building scalable web applications and robust backend systems. 
              Experienced in modern JavaScript frameworks and cloud technologies.
            </p>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12 scroll-mt-16">
            <div className="text-[#E06C75] mb-2">// Experience.cpp</div>
            <div className="space-y-8">
              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#E5C07B]">Full Stack Developer @ Apic Hospital</h3>
                  <span className="text-[#ABB2BF]">2025 - Present</span>
                </div>
                <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                  <li>Improved operational efficiency by 12%</li>
                  <li>Enhanced system reliability by 17%</li>
                </ul>
              </div>

              <div>
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-[#E5C07B]">Backend Developer @ Codynest</h3>
                  <span className="text-[#ABB2BF]">2024</span>
                </div>
                <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                  <li>Boosted response time by 23%</li>
                  <li>Automated 24% of manual tasks</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12 scroll-mt-16">
            <div className="text-[#98C379] mb-2">// Projects.js</div>
            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[#E5C07B]">LoveConnect</h3>
                  <div className="flex gap-2">
                    <a href="https://github.com/sameer1sheikh2mansoori3/dating_application" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://live-dating-application.onrender.com" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-[#56B6C2] mb-2">MongoDB, Express.js, React.js, Socket.io</p>
                <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                  <li>40% increased user engagement</li>
                  <li>25% faster response time</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[#E5C07B]">E-learning LMS</h3>
                  <div className="flex gap-2">
                    <a href="https://github.com/sameer1sheikh2mansoori3/lms_application" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="http://lms-xrs4.onrender.com" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-[#56B6C2] mb-2">MongoDB, Express.js, React.js, Stripe</p>
                <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                  <li>32% user satisfaction increase</li>
                  <li>25% API response optimization</li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-[#E5C07B]">Socially</h3>
                  <div className="flex gap-2">
                    <a href="https://github.com/sameer1sheikh2mansoori3/socailmedia" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="https://socailmedia-vert.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#ABB2BF] hover:text-white">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <p className="text-[#56B6C2] mb-2">MongoDB, Express.js, React.js, Cloudinary</p>
                <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                  <li>15% faster API response</li>
                  <li>25% better user retention</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-12 scroll-mt-16">
            <div className="text-[#C678DD] mb-2">// Skills.py</div>
            <div className="flex flex-wrap gap-2">
              {[
                "Python", "C++", "JavaScript", "TypeScript", "SQL", "MySQL", 
                "MongoDB", "PostgreSQL", "React", "Next.js", "Node.js",
                "Express.js", "Tailwind CSS", "Socket.io", "WebRTC"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="px-3 py-1 bg-[#2c313a] text-[#ABB2BF] text-sm rounded"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Awards & Education */}
          <div className="grid gap-8 md:grid-cols-2">
            <section id="awards" className="scroll-mt-16">
              <div className="text-[#61AFEF] mb-2">// Awards.rs</div>
              <h3 className="text-[#E5C07B] mb-2">Btech Information Technology</h3>
              <p className="text-[#ABB2BF]">University Institute of Engineering and Technology</p>
              <p className="text-[#5C6370]">2021 - 2025</p>
            </section>

            <section>
              <div className="text-[#61AFEF] mb-2">// Achievements</div>
              <ul className="list-disc list-inside text-[#ABB2BF] space-y-1">
                <li>Solved 1200+ coding problems</li>
                <li>AIR 2 in HackerCup</li>
              </ul>
            </section>
          </div>

          {/* Contact Section */}
          <section className="mt-12 pt-8 border-t border-[#333333]">
            <div className="text-[#7F848E] mb-4">// Contact</div>
            <div className="flex gap-4">
              <a 
                href="mailto:sameersheikhmansoori@gmail.com"
                className="text-[#ABB2BF] hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a 
                href="https://github.com/sameer1sheikh2mansoori3"
                className="text-[#ABB2BF] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com/in/sameer-sheikh-mansoori"
                className="text-[#ABB2BF] hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}