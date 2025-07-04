import { Shield, Clock, Lock, Eye, Zap, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Impossible to Clone",
    description: "Quantum-encrypted QR codes with unique molecular signatures that cannot be replicated or duplicated by counterfeiters.",
    highlight: "99.9% Protection Rate"
  },
  {
    icon: Clock,
    title: "Real-Time Verification",
    description: "Instant authentication through our global network with millisecond response times and 24/7 monitoring.",
    highlight: "< 100ms Response"
  },
  {
    icon: Lock,
    title: "Tamper-Proof Design",
    description: "Self-destructing codes that automatically invalidate when tampered with, leaving clear evidence of counterfeiting attempts.",
    highlight: "Zero False Positives"
  },
  {
    icon: Eye,
    title: "Supply Chain Transparency",
    description: "Complete product journey tracking from manufacturing to consumer, ensuring authenticity at every step.",
    highlight: "Full Traceability"
  },
  {
    icon: Zap,
    title: "Instant Alerts",
    description: "Immediate notifications when counterfeit attempts are detected, allowing rapid response to threats.",
    highlight: "Real-Time Monitoring"
  },
  {
    icon: CheckCircle,
    title: "Consumer Trust",
    description: "Easy verification for customers using any smartphone, building confidence in your brand's authenticity.",
    highlight: "Universal Access"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 cyber-grid opacity-10"></div>
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Revolutionary{" "}
            <span className="text-transparent bg-gradient-to-r from-neon-green to-neon-lime bg-clip-text">
              Security Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our advanced anti-counterfeiting technology combines quantum encryption, 
            real-time verification, and tamper-proof design to provide unbreakable security.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-neon-green/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 rounded-xl bg-gradient-to-r from-neon-green/20 to-neon-lime/20 mr-4 group-hover:from-neon-green/30 group-hover:to-neon-lime/30 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-neon-green" />
                </div>
                <div className="text-sm font-bold text-neon-lime">
                  {feature.highlight}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4">Ready to Secure Your Products?</h3>
            <p className="text-muted-foreground mb-6">
              Join thousands of brands protecting their products with our unbreakable QR security.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-neon-green to-neon-lime text-background font-bold rounded-lg hover:shadow-[0_0_20px_hsl(120_100%_50%/_0.5)] hover:scale-105 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="px-8 py-3 glass-card border border-white/20 text-foreground hover:bg-white/10 hover:border-white/30 transition-all duration-300 rounded-lg">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;