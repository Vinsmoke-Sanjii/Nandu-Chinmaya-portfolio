import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Instagram, Award, Mail, MapPin, Phone, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Vinsmoke-Sanjii",
      icon: Github,
      username: "@Vinsmoke-Sanji",
      description: "Check out my code repositories and project contributions",
      color: "hover:text-gray-900 dark:hover:text-gray-100"
    },
    {
      name: "LinkedIn", 
      url: "https://www.linkedin.com/in/nandu-chinmaya-346a582b9/",
      icon: Linkedin,
      username: "Raivelluri Chinmaya Nanda",
      description: "Connect with me professionally",
      color: "hover:text-blue-600"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/nandu_chinmaya__",
      icon: Instagram,
      username: "@nandu_chinmaya__",
      description: "Follow my journey and daily updates",
      color: "hover:text-pink-600"
    },
    {
      name: "HackerRank",
      url: "https://www.hackerrank.com/profile/nanduchinmaya456",
      icon: Award,
      username: "nanduchinmaya456",
      description: "View my coding challenges and rankings",
      color: "hover:text-green-600"
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/917674062456",
      icon: MessageCircle,
      username: "+91 7674062456",
      description: "Chat with me instantly on WhatsApp",
      color: "hover:text-green-500"
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "nanduchinmaya456@gmail.com",
      href: "mailto:nanduchinmaya456@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7674062456",
      href: "tel:+917674062456"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dilsukhnagar, India",
      href: "https://www.google.com/maps?q=17.3583987,78.5277635"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Have an idea in mind? I’m ready to help you design, build, and launch it.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Connect</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                I’m open to exploring new opportunities, contributing to innovative projects, and engaging in meaningful conversations about technology. Reach out anytime through the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.a
                    key={index}
                    href={info.href || "#"}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="block"
                  >
                    <div className="flex items-center space-x-4 p-4 rounded-lg hover:bg-accent/50 transition-all duration-300 group">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{info.label}</p>
                        <p className="text-muted-foreground">{info.value}</p>
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>

            {/* Quick Message */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-6 bg-gradient-card border-primary/10">
                <h4 className="text-lg font-semibold text-foreground mb-3">Quick Message</h4>
                <p className="text-muted-foreground mb-4">
                  For immediate responses, connect with me on LinkedIn or drop an email. 
                  I typically respond within 24 hours.
                </p>
                <a href='mailto:nanduchinmaya456@gmail.com'>
                  <Button className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Email
                  </Button>
                </a>
              </Card>
            </motion.div>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Find Me Online</h3>
            <div className="grid gap-4">
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true, amount: 0.3 }}
                  >
                    <Card className="group card-hover bg-gradient-card border-primary/10">
                      <a 
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block p-6 no-underline"
                      >
                        <div className="flex items-center space-x-4">
                          <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                            <IconComponent className={`w-6 h-6 text-primary transition-colors ${link.color}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                              {link.name}
                            </h4>
                            <p className="text-primary font-medium">{link.username}</p>
                            <p className="text-muted-foreground text-sm mt-1">{link.description}</p>
                          </div>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                );
              })}
            </div>

            {/* Collaboration CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <Card className="p-6 bg-gradient-hero text-white border-0 shadow-glow">
                <h4 className="text-xl font-bold mb-3">Open to Collaborations</h4>
                <p className="mb-4 opacity-90">
                  Always interested in working on exciting projects with fellow developers, 
                  startups, and established companies.
                </p>
                <div className="flex gap-3">
                  <Button variant="secondary" size="sm" asChild>
                    <a href="https://github.com/Vinsmoke-Sanji" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="bg-white/10 border-white/30 text-white hover:bg-white/20" asChild>
                    <a href="https://www.linkedin.com/in/nandu-chinmaya-346a582b9/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div 
          className="text-center mt-16 pt-8 border-t border-border"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-muted-foreground">
            © 2024 Raivelluri Chinmaya Nanda.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
