import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from "@/components/ui/tabs"

export default function ResumePage() {
  return (
    <div className="container-margin py-12 pt-32">
      <h1 className="text-4xl font-bold mb-2 shadow-text">Resume</h1>
      <p className="text-muted-foreground mb-8">
        My professional experience and qualifications
      </p>

      <Tabs defaultValue="experience" className="w-full">
        <TabsList className="mb-8">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="certifications">Certifications</TabsTrigger>
        </TabsList>

        {/* Experience Section */}
        <TabsContent value="experience" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>
                Junior IT Officer (Support & Maintenance)
              </CardTitle>
              <CardDescription>
                Rupali Life Insurance Company Ltd | July 2023 – Present
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Maintained internal web applications and systems.</li>
                <li>
                  Diagnosed and repaired PC hardware, motherboards, and related
                  devices.
                </li>
                <li>
                  Configured network services (FTP, DHCP, Proxy, VPN) and user
                  permissions via AD.
                </li>
                <li>
                  Managed VMware ESXi VMs and optimized LAN performance across
                  departments.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Executive Engineer</CardTitle>
              <CardDescription>
                Carlcare Service | August 2021 – June 2023
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Performed Level 1–4 PCBA repairs on mobile and electronic
                  devices.
                </li>
                <li>
                  Installed and maintained IT infrastructure and software
                  systems.
                </li>
                <li>
                  Handled escalated customer support cases and improved service
                  workflows.
                </li>
                <li>
                  Collaborated with client teams to refine hardware solutions.
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Education Section */}
        <TabsContent value="education" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>B.Sc. in Computer Science & Engineering</CardTitle>
              <CardDescription>
                Manarat International University | 2022 – 2025
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>
                Relevant Courses: Software Development, Cybersecurity, Database
                Systems
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Diploma in Electronics Engineering</CardTitle>
              <CardDescription>
                Ulipur Science and Technology Institute | 2015 – 2019
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Dakhil</CardTitle>
              <CardDescription>
                Balar Char Nasiria Fazil Madrasah | 2015
              </CardDescription>
            </CardHeader>
          </Card>
        </TabsContent>

        {/* Skills Section */}
        <TabsContent value="skills" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Technical Skills</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Programming Languages & Frameworks</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>C#</Badge>
                    <Badge>.NET & ASP.NET Core </Badge>
                    <Badge>Entity Framework</Badge>
                    <Badge>JavaScript</Badge>
                    <Badge>Python</Badge>
                    <Badge>React</Badge>
                    <Badge>Razor Pages</Badge>
                    <Badge>Blazor</Badge>
                    <Badge>Embedded C/C++</Badge>
                    <Badge>MQTT</Badge>
                    <Badge>REST APIs</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Web & Full Stack Development</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Full Stack Web Application Development</Badge>
                    <Badge>Microservices Architecture</Badge>
                    <Badge>Responsive UI</Badge>
                    <Badge>API Development & Integration</Badge>
                  </div>
                </div>

                {/* Databases */}
                <div>
                  <h3 className="font-medium mb-2">Database Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>MongoDB</Badge>
                    <Badge>MySQL</Badge>
                    <Badge>LINQ</Badge>
                    <Badge>Database Schema Design</Badge>
                    <Badge>Query Optimization and Data Modeling</Badge>
                  </div>
                </div>

                {/* DevOps/Cloud */}
                <div>
                  <h3 className="font-medium mb-2">Cloud & DevOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>AWS</Badge>
                    <Badge>Microsoft Azure</Badge>
                    <Badge>Docker</Badge>
                    <Badge>Kubernetes</Badge>
                    <Badge>Infrastructure as Code & Cloud Security</Badge>
                  </div>
                </div>

                {/* Cybersecurity */}
                <div>
                  <h3 className="font-medium mb-2">Cybersecurity & DevSecOps</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Penetration Testing</Badge>
                    <Badge>Vulnerability Assessment</Badge>
                    <Badge>Secure Coding Practices</Badge>
                    <Badge>Privilege Escalation</Badge>
                    <Badge>Digital Forensics</Badge>
                    <Badge>Network Security</Badge>
                    <Badge>MAC/Token-Based Device Authentication</Badge>
                  </div>
                </div>

                {/* Operating Systems & Administration */}
                <div>
                  <h3 className="font-medium mb-2">Operating Systems & Administration</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Linux Server Administration (Ubuntu, CentOS, Red Hat)</Badge>
                    <Badge>Windows Server Setup & Maintenance</Badge>
                    <Badge>Bash/Shell Scripting</Badge>
                    <Badge>System Monitoring</Badge>
                  </div>
                </div>

                {/* IoT & Embedded Systems */}
                <div>
                  <h3 className="font-medium mb-2">IoT & Embedded Systems</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Sensor Integration</Badge>
                    <Badge>Embedded System Design</Badge>
                    <Badge>Microcontrollers Programming</Badge>
                    <Badge>PCBA Repair (L1–L4)</Badge>
                    <Badge>MQTT Communication</Badge>
                    <Badge>Secure IoT Device Management</Badge>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-2">Tools & Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Visual Studio</Badge>
                    <Badge>VS Code</Badge>
                    <Badge>Postman</Badge>
                    <Badge>Git</Badge>
                    <Badge>GitHub</Badge>
                    <Badge>Swagger</Badge>
                    <Badge>Wireshark</Badge>
                    <Badge>Nmap</Badge>
                    <Badge>OWASP</Badge>
                    <Badge>Burp Suite</Badge>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Languages */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span>Bengali</span>
                  <span className="text-muted-foreground">Native</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>English</span>
                  <span className="text-muted-foreground">Fluent</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Certifications Section */}
        <TabsContent value="certifications" className="space-y-6">
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle>Certifications & Training</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Server Administration (Windows, Linux & AWS) – PencillBox
                  Institute
                </li>
                <li>
                  PCBA Repair (Level 1–4) – Dream Technology Institute
                </li>
                <li>
                  Electrical & House Wiring – Ministry of Youth and Sports
                </li>
                <li>
                  TryHackMe CTF Participation – Self-paced ethical hacking
                  practice
                </li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
