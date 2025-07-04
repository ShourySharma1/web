import { Star, Quote } from "lucide-react";
import companyLogos from "@/assets/company-logos.png";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Chief Security Officer",
    company: "TechCorp Global",
    rating: 5,
    text: "This anti-counterfeiting solution has revolutionized our product security. We've seen a 99.8% reduction in counterfeit incidents since implementation.",
    avatar: "SC"
  },
  {
    name: "Marcus Rodriguez",
    role: "Brand Protection Director",
    company: "Luxury Brands Inc",
    rating: 5,
    text: "The real-time verification and tamper-proof design have given us complete confidence in our supply chain security. Outstanding technology.",
    avatar: "MR"
  },
  {
    name: "Emily Watson",
    role: "VP of Operations",
    company: "SecureManufacturing",
    rating: 5,
    text: "Implementation was seamless and the results were immediate. Our customers now have 100% trust in our product authenticity.",
    avatar: "EW"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by Industry{" "}
            <span className="text-transparent bg-gradient-to-r from-neon-green to-neon-lime bg-clip-text">
              Leaders
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See why leading brands choose our revolutionary QR security technology 
            to protect their products and maintain customer trust.
          </p>
        </div>
        
        {/* Customer Logos */}
        <div className="flex justify-center mb-16">
          <div className="glass-card p-8 rounded-2xl">
            <img 
              src={companyLogos} 
              alt="Trusted by leading companies" 
              className="h-12 opacity-60 hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="glass-card p-8 hover:border-neon-green/50 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="flex text-neon-green">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-neon-green/30" />
                <p className="text-foreground leading-relaxed italic pl-6">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-neon-green to-neon-lime flex items-center justify-center text-background font-bold mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  <div className="text-sm text-neon-green">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="glass-card p-6">
            <div className="text-3xl font-bold text-neon-green mb-2">500+</div>
            <div className="text-muted-foreground">Enterprise Clients</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold text-neon-lime mb-2">99.9%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold text-emerald mb-2">24/7</div>
            <div className="text-muted-foreground">Global Monitoring</div>
          </div>
          <div className="glass-card p-6">
            <div className="text-3xl font-bold text-neon-green mb-2">$2B+</div>
            <div className="text-muted-foreground">Products Protected</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;