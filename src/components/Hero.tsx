import { Button } from '@/components/ui/button';
import { Download, Mail, Eye } from 'lucide-react';
import profilePicture from '@/assets/profile-picture.jpg';

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    // This would typically link to an actual resume PDF
    console.log('Download resume clicked');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        {/* Profile Picture */}
        <div className="mb-8 animate-fade-in">
          <div className="relative inline-block animate-float">
            <img
              src={profilePicture}
              alt="Raivelluri Chinmaya Nanda"
              className="w-50 h-50 sm:w-50 sm:h-50 lg:w-72 lg:h-72 rounded-full object-cover mx-auto shadow-glow border-4 border-primary/20"
            />
            <div className="absolute inset-0 rounded-full opacity-20 animate-pulse"></div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-slide-up">
          <span className="gradient-text">Raivelluri Chinmaya Nanda</span>
        </h1>
        
        <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Engineering Student | Aspiring Web Developer
        </h2>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed animate-slide-up" style={{ animationDelay: '0.4s' }}>
          Ambitious engineering student eager to apply Python, Web Framework, and Web Development skills in real-world projects.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{ animationDelay: '0.6s' }}>
          <Button variant="premium" size="lg" onClick={() => scrollToSection('portfolio')} className="w-full sm:w-auto">
            <Eye className="w-5 h-5 mr-2" />
            View Portfolio
          </Button>
          
          <Button variant="outline" size="lg" onClick={handleDownloadResume} className="w-full sm:w-auto" asChild>
            <a href='https://drive.google.com/file/d/1XbQlapz6z7fzoGei_OW1VWTD-NVt6dUJ/view?usp=drive_link' target='_blank' rel="noopener noreferrer">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </Button>
          
          <Button variant="outline" size="lg" onClick={() => scrollToSection('contact')} className="w-full sm:w-auto">
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;