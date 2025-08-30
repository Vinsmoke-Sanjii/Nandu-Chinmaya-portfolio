import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Globe, Database, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java (Basic)"],
    },
    {
      title:"Design",
      icon: Layers,
      skills:["Figma","Bootstrap"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["SQL", "MySQL Workbench"],
    },
    {
      title: "Web Development",
      icon: Globe,
      skills: ["HTML", "CSS", "JavaScript"],
    }
  ];

  return (
    <section id="skills" className="section-padding bg-gradient-card">
      <div className="max-w-6xl mx-auto">
        
        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and frameworks I use to build modern, scalable applications
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.3 }}
              >
                <Card className="p-6 card-hover bg-gradient-card border-primary/10 text-center group">
                  <div className="mb-6">
                    <div className="inline-flex p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex}
                        variant="secondary"
                        className="bg-primary/10 text-primary hover:bg-primary/20 transition-colors w-full justify-center py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Proficiency Levels */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h3 className="text-2xl font-semibold text-center mb-8 text-foreground">Proficiency Levels</h3>
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Python */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="w-24 text-right font-medium text-foreground">Python</span>
              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </motion.div>

            {/* Web Dev */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="w-24 text-right font-medium text-foreground">Web Dev</span>
              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-sm text-muted-foreground">Advanced</span>
            </motion.div>

            {/* Django */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="w-24 text-right font-medium text-foreground">SQL</span>
              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "75%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-sm text-muted-foreground">Intermediate</span>
            </motion.div>

            {/* Java */}
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <span className="w-24 text-right font-medium text-foreground">Java</span>
              <div className="flex-1 bg-muted rounded-full h-3 overflow-hidden">
                <motion.div
                  className="bg-gradient-primary h-full rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "50%" }}
                  transition={{ duration: 1 }}
                />
              </div>
              <span className="text-sm text-muted-foreground">Basic</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
