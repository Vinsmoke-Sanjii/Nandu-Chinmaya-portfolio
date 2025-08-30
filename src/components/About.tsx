import { Card } from '@/components/ui/card';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const education = [
    {
      degree: "B.Tech (2021–2025)",
      field: "Computer Science & Engineering (AIML)",
      institution: "Malla Reddy Engineering College",
      grade: "CGPA 7.19/10",
      icon: GraduationCap,
    },
    {
      degree: "Intermediate (2019–2021)",
      field: "MPC",
      institution: "Sri Gayatri Junior College",
      grade: "Marks 760/1000",
      icon: Award,
    },
    {
      degree: "School (2019)",
      field: "State Secondary Education",
      institution: "G.G High School",
      grade: "GPA 8.8",
      icon: BookOpen,
    },
  ];

  return (
    <section id="about" className="section-padding bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Personal Bio */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Aspiring engineering student seeking internship/job to apply Python,Web framework
              & Web development skills. Eager to contribute web development expertise and learn in a
              dynamic team.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
               Ready to implement programming skills, problem solving abilities in order to contribute to greater projects and enchance my skills.
              Passionate about creating innovative solutions and continuously learning new technologies.
            </p>
            
            <div className="pt-6">
              <h4 className="text-xl font-semibold mb-4 text-foreground">Passion & Purpose</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Continuous Growth and skill enhancement</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Innovation First</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Collaboration and Motivational</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Educational Background */}
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-2xl font-semibold text-foreground mb-6">Educational Background</h3>
            {education.map((edu, index) => {
              const IconComponent = edu.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * index }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <Card className="p-6 card-hover bg-gradient-card border-primary/10">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">{edu.degree}</h4>
                        <p className="text-primary font-medium">{edu.field}</p>
                        <p className="text-muted-foreground mt-1">{edu.institution}</p>
                        <div className="mt-2">
                          <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
