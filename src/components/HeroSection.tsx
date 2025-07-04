import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-background/80"></div>
      </div>
      
      {/* Cyber Grid Overlay */}
      <div className="absolute inset-0 cyber-grid opacity-30"></div>
      
      {/* Animated Scanning Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-neon-green to-transparent animate-scan opacity-60"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-neon-lime rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-32 left-16 w-6 h-6 border-2 border-neon-green rounded-full animate-float"></div>
      <div className="absolute top-1/3 left-10 w-3 h-3 bg-emerald rounded-full animate-pulse-slow"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6">
            <Zap className="w-4 h-4 text-neon-green" />
            <span className="text-sm font-medium">Revolutionary Anti-Counterfeiting Technology</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 neon-text">
          Protect Your Products with{" "}
          <span className="text-transparent bg-gradient-to-r from-neon-green to-neon-lime bg-clip-text">
            Unbreakable QR Security
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
          Our revolutionary QR code technology makes counterfeiting impossible with 
          quantum-encrypted verification, real-time authentication, and tamper-proof design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="neon" size="xl" className="group">
            Request a Demo
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="glass" size="xl">
            Get Started Now
          </Button>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-green mb-2">99.9%</div>
            <div className="text-muted-foreground">Counterfeit Detection</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-neon-lime mb-2">&lt;0.1s</div>
            <div className="text-muted-foreground">Verification Time</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-emerald mb-2">10M+</div>
            <div className="text-muted-foreground">Products Protected</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;