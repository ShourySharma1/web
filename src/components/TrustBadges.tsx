import { Shield, ShieldCheck, Award, Globe, Zap, Lock } from "lucide-react";

const badges = [
  {
    icon: ShieldCheck,
    title: "ISO 27001 Certified",
    description: "International security standards compliance"
  },
  {
    icon: Shield,
    title: "Military-Grade Encryption",
    description: "AES-256 quantum-resistant security"
  },
  {
    icon: Award,
    title: "Industry Recognition",
    description: "Winner of Security Innovation Award 2024"
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "99.99% uptime across 50+ countries"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Sub-100ms verification worldwide"
  },
  {
    icon: Lock,
    title: "Zero Breach Record",
    description: "100% security track record since 2020"
  }
];

const TrustBadges = () => {
  return (
    <section className="py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold mb-4">
            Trusted & Certified by Industry Leaders
          </h3>
          <p className="text-muted-foreground">
            Our security standards exceed industry requirements
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {badges.map((badge, index) => (
            <div 
              key={index}
              className="glass-card p-4 text-center hover:border-neon-green/50 transition-all duration-300 group hover:scale-105"
            >
              <div className="flex justify-center mb-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-neon-green/20 to-neon-lime/20 group-hover:from-neon-green/30 group-hover:to-neon-lime/30 transition-all duration-300">
                  <badge.icon className="w-6 h-6 text-neon-green" />
                </div>
              </div>
              <div className="text-sm font-bold mb-1 text-foreground">
                {badge.title}
              </div>
              <div className="text-xs text-muted-foreground">
                {badge.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;