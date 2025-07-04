import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import TestimonialsSection from "./TestimonialsSection";
import TrustBadges from "./TrustBadges";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <FeaturesSection />
      <TestimonialsSection />
      <TrustBadges />
      
      {/* Footer */}
      <footer className="py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h4 className="text-2xl font-bold mb-4 text-transparent bg-gradient-to-r from-neon-green to-neon-lime bg-clip-text">
                QR Security Pro
              </h4>
              <p className="text-muted-foreground mb-6 max-w-md">
                Revolutionary anti-counterfeiting technology that makes product fraud impossible. 
                Protect your brand with unbreakable QR security.
              </p>
              <div className="flex space-x-4">
                <button className="px-6 py-2 bg-gradient-to-r from-neon-green to-neon-lime text-background font-bold rounded-lg hover:shadow-[0_0_20px_hsl(120_100%_50%/_0.5)] transition-all duration-300">
                  Get Started
                </button>
                <button className="px-6 py-2 glass-card border border-white/20 text-foreground hover:bg-white/10 transition-all duration-300 rounded-lg">
                  Learn More
                </button>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-foreground">Solutions</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-neon-green transition-colors cursor-pointer">Anti-Counterfeiting</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">Supply Chain Security</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">Brand Protection</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">Product Authentication</li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-4 text-foreground">Company</h5>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-neon-green transition-colors cursor-pointer">About Us</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">Careers</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">News</li>
                <li className="hover:text-neon-green transition-colors cursor-pointer">Contact</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
            <p className="text-muted-foreground text-sm">
              © 2024 QR Security Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors text-sm">Terms of Service</a>
              <a href="#" className="text-muted-foreground hover:text-neon-green transition-colors text-sm">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;