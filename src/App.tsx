import { 
  Phone, 
  Instagram, 
  MessageCircle, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Clock, 
  ArrowRight, 
  Scissors, 
  Sparkles, 
  Menu, 
  X,
  ExternalLink
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';
import { cn } from './lib/utils';

// --- Constants ---
const BRAND_NAME = "GLOSSY MAKEUP STUDIO & ACADEMY";
const PHONE = "+918303794290";
const INSTAGRAM_URL = "https://instagram.com/glossymakeupstudio_";
const WHATSAPP_URL = "https://wa.me/918303794290?text=Hi%20I%20want%20to%20book%20my%20bridal%20makeup";
const SMS_URL = "sms:+918303794290";

const SERVICES = [
  { name: "Bridal Makeup", description: "Your dream look for your most special day.", icon: <Sparkles className="w-5 h-5" /> },
  { name: "Engagement Makeup", description: "Elegant and glowing look for your ceremony.", icon: <Star className="w-5 h-5" /> },
  { name: "Party Makeup", description: "Glamorous looks for any occasion.", icon: <Star className="w-5 h-5 text-brand-gold" /> },
  { name: "HD Makeup", description: "Camera-ready, flawless, and long-lasting finish.", icon: <Sparkles className="w-5 h-5" /> },
  { name: "Nail Extension", description: "Gel, Acrylic, Cat Eye and custom nail art.", icon: <Sparkles className="w-5 h-5 text-brand-gold" /> },
  { name: "Hair Treatments", description: "Keratin, Smoothening, Botox for healthy hair.", icon: <Scissors className="w-5 h-5" /> },
];

const PACKAGES = [
  {
    name: "PRE-BRIDAL HD PACKAGE",
    price: "₹19,999",
    items: [
      "HD Makeup", "Hair Styling", "Jewellery Set", "Deluxe Manicure & Pedicure", 
      "Facial (O3 + Hydra)", "Full Body Wax", "Scrub", "D-Tan", "Polishing", 
      "Hair Spa", "Hair Cut", "Head Message", "Thread Work", "Nail Art"
    ],
    highlight: true
  },
  {
    name: "PRE-BRIDAL PACKAGE",
    price: "₹14,999",
    items: [
      "Traditional Makeup", "Hair Styling", "Standard Facial", "Body Waxing", 
      "Manicure", "Pedicure", "D-Tan"
    ]
  },
  {
    name: "ENGAGEMENT HD MAKEUP",
    price: "₹9,999",
    items: ["HD Makeup", "Premium Hair Styling", "Draping", "Skin Prep"]
  },
  {
    name: "RECEPTION HD PACKAGE",
    price: "₹8,999",
    items: ["HD Makeup", "Hair Styling", "Draping", "Touch-up kit"]
  }
];

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Packages', href: '#packages' },
    { name: 'Academy', href: '#academy' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-4 px-6 md:px-12 flex items-center justify-between",
      isScrolled ? "bg-brand-black/95 backdrop-blur-md shadow-xl py-2" : "bg-transparent"
    )}>
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="flex flex-col"
      >
        <span className={cn(
          "font-serif font-bold tracking-tighter transition-colors text-brand-gold text-lg"
        )}>
          GLOSSY
        </span>
        <span className={cn(
          "text-[10px] uppercase tracking-[0.2em] font-medium text-brand-gray"
        )}>
          Studio & Academy
        </span>
      </motion.div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href}
            className={cn(
              "text-xs uppercase tracking-[2px] font-semibold transition-colors hover:text-brand-gold text-brand-gray"
            )}
          >
            {link.name}
          </a>
        ))}
        <a 
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-brand-gold text-brand-black px-6 py-2 rounded-sm text-xs font-bold uppercase tracking-widest glossy-effect"
        >
          Book Now
        </a>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        {isMobileMenuOpen ? (
          <X className="w-6 h-6 text-brand-gold" />
        ) : (
          <Menu className="w-6 h-6 text-brand-gold" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-black p-8 flex flex-col items-center gap-6 shadow-2xl border-t border-white/10"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-brand-nude text-lg uppercase tracking-widest font-medium"
              >
                {link.name}
              </a>
            ))}
            <a 
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-gold text-brand-black w-full text-center py-4 rounded-xl font-bold uppercase tracking-widest"
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-brand-black">
      {/* Background with Glow & Image Texture */}
      <div className="absolute inset-0 opacity-40">
        <img 
          src="https://lh3.googleusercontent.com/sitesv/AA5AbUDMhSwmqH3QaRiYSBLB-A9lOBtV4Fpt1fDEANt8YhvbLoS-rTrM-dJR6pcYaQW-nUlj9Tq8E5vfuqZiEgSuhDJMqRThcqNeyElSf8zejbkwCuo-CJo48ptBxwUL6N8ij_s6WznWVEYMjk3hk3hCATh2rogwPvGqoLu9WRoQrGu4KJ3XIjo5788ZH2-HxXuMjlomqnVMnXLG0ZIR7Nv7G8ScjXkqESyvK5-X=w1280"
          className="absolute inset-0 w-full h-full object-cover opacity-10"
          alt=""
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-gold/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center w-full"
        >
          <span className="text-brand-gold uppercase tracking-[3px] md:tracking-[4px] text-[10px] md:text-[11px] mb-4 md:mb-6 font-semibold">
            Luxury Beauty Boutique
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-8xl text-brand-beige font-serif mb-6 md:mb-8 leading-[1.1] accent-glow px-2">
            Your Dream Bridal <br className="hidden sm:block"/> 
            <span className="italic">Look Starts Here</span> ✨
          </h1>
          <p className="text-brand-gray text-base md:text-xl max-w-2xl mx-auto mb-8 md:mb-10 font-light tracking-wide px-4">
            Bridal • Engagement • Party • HD Makeup | Professional Beauty Academy In Bijnor
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-6 sm:px-0">
            <a 
              href="#contact" 
              className="px-8 md:px-10 py-4 md:py-5 bg-brand-gold text-brand-black font-bold uppercase tracking-[0.2em] text-xs md:text-sm rounded-sm glossy-effect shadow-2xl shadow-brand-gold/10"
            >
              Book Appointment
            </a>
            <div className="flex gap-4 w-full sm:w-auto">
               <a 
                href={WHATSAPP_URL}
                className="flex-1 sm:flex-none px-8 md:px-10 py-4 md:py-5 bg-transparent border border-brand-gold text-brand-gold rounded-sm hover:bg-brand-gold/10 transition-all flex items-center justify-center gap-3 backdrop-blur-sm text-xs md:text-sm uppercase font-bold tracking-widest"
              >
                WhatsApp Chat
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Placeholder Banner */}
      <div className="absolute inset-0 z-0 opacity-20 flex items-center justify-center pointer-events-none">
        <div className="w-full h-full border border-brand-gold/10 rounded-[100px] scale-125 rotate-12" />
        <div className="absolute inset-0 bg-linear-to-b from-brand-black via-transparent to-brand-black" />
      </div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-brand-nude/30 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-linear-to-b from-brand-gold/50 to-transparent" />
      </motion.div>
    </section>
  );
};

const SectionHeading = ({ subtitle, title, light = true }: { subtitle: string, title: string, light?: boolean }) => (
  <div className="mb-16">
    <span className="uppercase tracking-[4px] text-[11px] font-semibold mb-4 block text-brand-gold">
      {subtitle}
    </span>
    <h2 className={cn(
      "text-4xl md:text-5xl font-serif accent-glow",
      light ? "text-brand-beige" : "text-white"
    )}>
      {title}
    </h2>
    <div className="w-16 h-px bg-brand-gold/40 mt-8" />
  </div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-brand-black border-y border-brand-gold/10 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-linear-to-l from-brand-gold/5 to-transparent pointer-events-none" />
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <div className="relative">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-brand-glass rounded-lg border border-brand-gold/10 overflow-hidden glossy-effect shadow-2xl relative"
          >
            <img 
              src="https://lh3.googleusercontent.com/sitesv/AA5AbUBnosMMyE9dpg-GoVhENXxYNaNaaVYbXs8oZXcqk-QV2ATM6nIy5o2CWU-e8NriLbMc3-d9HctLMpWUJNNZ-Z55uul0GAiP2COpSq3BdS8PFCE3phyvDDBo-DNlCWCtgwBbWlHh8ChlJtYfF5K06eFyK6D_LspoqzLFPr-iOehvZkzcy1uuIAU4Fj46c-Th8JW4sNT1GbtWy1RmpAs20cpO4Jq-92oE3Bboc_Y=w1280" 
              alt="GLOSSY Luxury Studio Experience - Square Format" 
              className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            {/* Overlay Gradient for Luxury Feel */}
            <div className="absolute inset-0 bg-linear-to-t from-brand-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-8 left-8 z-10">
              <Sparkles className="w-8 h-8 text-brand-gold drop-shadow-lg mb-2 opacity-50" />
              <p className="text-brand-beige font-serif italic text-sm tracking-widest uppercase text-shadow-lg">Luxury Studio Experience</p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="absolute -bottom-10 -right-6 bg-brand-black/90 backdrop-blur-md text-white p-6 rounded-lg border border-brand-gold/20 shadow-2xl hidden lg:block z-20"
          >
            <div className="flex items-center gap-4 mb-2">
              <div className="flex text-brand-gold">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="font-bold text-lg">4.9/5</span>
            </div>
            <p className="text-[10px] font-bold text-brand-gold tracking-[0.3em] uppercase">Bijnor's #1 Rated Studio</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading subtitle="The Art of Perfection" title="Leading Makeup Studio In Bijnor" />
          <p className="text-xl text-brand-beige/80 font-serif italic mb-6">
            Transforming your vision into a stunning reality with a touch of luxury.
          </p>
          <p className="text-lg text-brand-gray font-light leading-relaxed mb-8">
            Glossy Makeup Studio & Academy is Bijnor's most trusted destination for premium beauty services. 
            Located in Sarvan Nagar, we specialize in high-definition bridal transformations and professional makeup artistry that lasts.
          </p>
          
          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "110+", sub: "Verified Reviews" },
              { label: "4.9⭐", sub: "Google Rating" },
              { label: "HD & Airbrush", sub: "Techniques" },
              { label: "Certified", sub: "Global Academy" }
            ].map((stat, i) => (
              <div key={i} className="p-6 bg-brand-glass rounded-lg border border-brand-gold/10 hover:border-brand-gold/30 transition-colors group">
                <div className="text-2xl font-serif text-brand-gold mb-1 group-hover:scale-110 transition-transform origin-left">{stat.label}</div>
                <div className="text-[10px] uppercase tracking-widest text-brand-gray font-bold">{stat.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Our Services" title="Luxury Beauty Services" />
        
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="group p-8 bg-brand-glass rounded-xl border border-white/5 hover:border-brand-gold/20 transition-all duration-500 relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-brand-black border border-brand-gold/20 text-brand-gold rounded-lg flex items-center justify-center mb-6 shadow-xl">
                  {service.icon}
                </div>
                <h3 className="text-xl font-serif mb-4 text-brand-beige">{service.name}</h3>
                <p className="text-brand-gray text-sm font-light mb-8 leading-relaxed">{service.description}</p>
                <a 
                  href={WHATSAPP_URL}
                  className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-[2px] text-brand-gold group-hover:gap-4 transition-all"
                >
                  Enquire <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
          
          <div className="md:col-span-3 grid md:grid-cols-3 gap-8 mt-4">
            {[
              { title: "Nail Extensions", desc: "Gel, Acrylic, Cat Eye Art" },
              { title: "Skin Care", desc: "Hydra Facials & D-Tan treatments" },
              { title: "Waxing", desc: "Rica & Honey Wax services" }
            ].map((ext, i) => (
              <div key={i} className="p-8 border border-white/5 bg-brand-glass rounded-xl flex flex-col justify-between">
                <div>
                  <h4 className="text-lg font-serif mb-2 text-brand-beige">{ext.title}</h4>
                  <p className="text-xs text-brand-gray mb-6 leading-relaxed">{ext.desc}</p>
                </div>
                <button className="text-brand-gold font-bold text-[10px] uppercase tracking-widest text-left">View More Services</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Packages = () => {
  return (
    <section id="packages" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto">
        <SectionHeading subtitle="Premium Packages" title="Curated Beauty Packages" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg, i) => (
            <div 
              key={i} 
              className={cn(
                "p-8 rounded-xl border transition-all h-full flex flex-col justify-between",
                pkg.highlight 
                  ? "bg-linear-to-br from-brand-gold/10 to-transparent border-brand-gold border-l-4" 
                  : "bg-brand-glass border-white/5 hover:border-brand-gold/20"
              )}
            >
              <div>
                <div className="flex flex-col mb-6">
                  <h3 className="text-lg font-serif leading-tight text-brand-beige mb-2">{pkg.name}</h3>
                  <div className="text-xl font-serif text-brand-gold">{pkg.price}</div>
                </div>
                <ul className="space-y-4 mb-10">
                  {pkg.items.slice(0, 8).map((item, j) => (
                    <li key={j} className="flex gap-3 text-[13px] font-light">
                      <CheckCircle2 className="w-3 h-3 shrink-0 text-brand-gold mt-1" />
                      <span className="text-brand-gray">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <a 
                href={WHATSAPP_URL}
                className="w-full py-4 rounded-sm text-[11px] uppercase tracking-[2px] font-bold text-center bg-brand-gold text-brand-black glossy-effect"
              >
                Inquire Slot
              </a>
            </div>
          ))}
        </div>

        {/* Individual Pricing Box */}
        <div className="mt-16 p-10 bg-brand-glass border border-white/5 rounded-xl">
          <h3 className="text-2xl font-serif mb-8 text-brand-gold italic">Party & Casual Pricing</h3>
          <div className="grid md:grid-cols-2 md:gap-x-12 gap-y-2">
            {[
              { name: "HD Party Makeup", price: "₹2,000" },
              { name: "Nude Makeup", price: "₹2,000" },
              { name: "Saree Draping", price: "₹500" },
              { name: "Standard Draping", price: "₹300" },
              { name: "Party Hair Style", price: "₹500+" },
              { name: "Regular Makeup", price: "₹1,500" }
            ].map((p, i) => (
              <div key={i} className="flex justify-between items-center py-4 border-b border-white/5">
                <span className="font-light tracking-wide text-brand-gray">{p.name}</span>
                <span className="font-serif text-brand-gold">{p.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Academy = () => {
  return (
    <section id="academy" className="py-24 px-6 md:px-12 bg-brand-black">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
        <div className="md:w-1/2 order-2 md:order-1">
          <SectionHeading subtitle="Professional Academy" title="Start Your Career In Beauty" />
          <p className="text-lg text-brand-gray font-light mb-10 leading-relaxed">
            Learn from the experts at Bijnor's top-rated academy. Our comprehensive courses are designed to take you from a beginner to a professional makeup artist.
          </p>
          
          <div className="space-y-4 mb-10">
            {[
              { name: "Makeup Mastery Course", price: "₹29,999", meta: "Certificate Provided" },
              { name: "Nail Extension Specialist", price: "₹10,000", meta: "Professional Training" },
              { name: "Skin Care Expert Course", price: "Enquire", meta: "Advanced Certification" },
              { name: "Hair Styling & Botox Course", price: "Enquire", meta: "Career Ready" },
            ].map((course, i) => (
              <div key={i} className="group p-6 bg-brand-glass rounded-xl border border-white/5 flex items-center justify-between hover:bg-brand-gold hover:text-brand-black transition-all cursor-pointer">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-[2px] text-brand-gold group-hover:text-brand-black/60 font-semibold mb-1">{course.meta}</span>
                  <span className="font-medium tracking-wide">{course.name}</span>
                </div>
                <span className="font-serif group-hover:text-brand-black">{course.price}</span>
              </div>
            ))}
          </div>

          <div className="p-8 bg-brand-glass border border-brand-gold/20 rounded-xl">
            <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-4 text-brand-gold">Curriculum Highlights:</h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {["Makeup Techniques", "Skincare Science", "Hair Styling", "Client Handling", "Product Knowledge", "Certification"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-brand-gray font-light">
                  <CheckCircle2 className="w-3 h-3 text-brand-gold" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>

          <div className="md:w-1/2 order-1 md:order-2">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square bg-brand-glass border border-brand-gold/10 rounded-[30px] md:rounded-[60px] relative overflow-hidden flex items-center justify-center glossy-effect"
          >
            <div className="relative z-10 p-20 text-center w-full h-full flex flex-col items-center justify-center">
              <Sparkles className="w-12 h-12 text-brand-gold/20 mb-8" />
              <span className="text-brand-gold uppercase tracking-[4px] text-[10px] mb-4 block font-semibold">Academy</span>
              <h3 className="text-3xl text-brand-beige font-serif mb-6 italic accent-glow">Empowering the <br/> artists of tomorrow</h3>
              <p className="text-brand-gray text-[11px] font-light tracking-[1px] uppercase">Join 50+ successful students from GLOSSY</p>
            </div>
            <div className="absolute inset-4 border border-brand-gold/5 rounded-[50px] pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Gallery = () => {
  const GALLERY_ITEMS = [
    { title: "Bridal Look", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBKhYfmdOTzXObbgTVB9cOLaZhKKefhhyyHzBrEJG6iYmcaLy1OhHB0YWLFAdXBC66DkdiSYm6aLtCy8i0srOK6JapZ3gYXxHIfz70USkY_lQJWlp8GtFMsrFltN8zznA04mSC4LRtIo4jN2K5gmSJadnu0ewubEVHQbzP7za7ubiiYqTguODA7O88=w1280" },
    { title: "Haldi Special", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBj0kYqTlvdKXH6sX6k4SVjYgLYqcY4uDJJJ4JfnsNj7KUNCmZkPb2nh8dny1LJ0ZtMUL5LqRzknWu7sXAXjkc1lA2YYvyYFe6-_h7--SB2lpqHvvDVfUC1ZvjWwAnujF2kOSNX2tITtxpPlyH9qeAq_cqktd6xM_a-7Y_zOipwsb6cYtOiJpXL2Jjdqhc1KNg9dXN01-IsDbq8gFFKfqSeVawWxx1mxSPc=w1280" },
    { title: "Engagement Glow", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUBbHdIa1zeMU4wzX4urRi0LE9BSZferKjiVGQhBkGvopoZSaEpDBWbUzBup5MOKAevhNm3L9M6mZ0S8cHHf3rD2mqEYmlPCf0P3VDi2JSYh5kR5M4iYL5I4BfkuUqHIbXdZMR-4JAe0iSXZaNRVu1D4qOwSM26uHQetJzUXLtNOVsM3tmys1VCKXq0mEN1If3YBDtzx1Ar6-UU7XkcZ16phe9h6TURXdHo7da8=w1280" },
    { title: "Party Glamour", image: "https://lh3.googleusercontent.com/sitesv/AA5AbUDMhSwmqH3QaRiYSBLB-A9lOBtV4Fpt1fDEANt8YhvbLoS-rTrM-dJR6pcYaQW-nUlj9Tq8E5vfuqZiEgSuhDJMqRThcqNeyElSf8zejbkwCuo-CJo48ptBxwUL6N8ij_s6WznWVEYMjk3hk3hCATh2rogwPvGqoLu9WRoQrGu4KJ3XIjo5788ZH2-HxXuMjlomqnVMnXLG0ZIR7Nv7G8ScjXkqESyvK5-X=w1280" },
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-12 bg-brand-black border-y border-white/5">
      <SectionHeading subtitle="Work Gallery" title="Our Work Portfolio" />
     
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-7xl mx-auto">
        {GALLERY_ITEMS.map((item, i) => (
          <motion.div 
            key={i} 
            whileHover={{ scale: 1.02 }}
            className={cn(
              "group bg-brand-glass rounded-xl md:rounded-3xl border border-white/5 transition-all hover:border-brand-gold/50 cursor-pointer glossy-effect relative overflow-hidden shadow-2xl aspect-[3/4]"
            )}
          >
            <img 
              src={item.image} 
              alt={item.title} 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-brand-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-brand-black">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/3">
             <SectionHeading subtitle="Wall of Fame" title="What Our Clients Say" />
             <div className="p-10 bg-brand-glass border border-brand-gold/20 rounded-xl text-white">
                <div className="text-5xl font-serif text-brand-gold mb-4">4.9</div>
                <div className="flex gap-1 mb-4">
                   {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-brand-gold text-brand-gold" />)}
                </div>
                <p className="text-[11px] font-semibold text-brand-gray uppercase tracking-[2px]">Global standard service <br/> right here in Bijnor</p>
             </div>
          </div>
          <div className="md:w-2/3 grid md:grid-cols-2 gap-6">
             {[
               { text: "Good ambiance and service. The makeup was exactly what I wanted for my wedding.", author: "Neha S.", role: "Bridal Client" },
               { text: "Very helpful and friendly staff. Best experience for nail extensions in Bijnor.", author: "Komal V.", role: "Nail Client" },
               { text: "Best experience ✨. Flawless makeup and great hospitality. Highly recommended!", author: "Prerna R.", role: "Engagement Client" },
               { text: "Loved the HD Party Makeup. It stayed for more than 10 hours without any crease.", author: "Simran K.", role: "Party Client" }
             ].map((review, i) => (
                <div key={i} className="p-8 bg-brand-glass rounded-xl border border-white/5">
                   <div className="flex items-center gap-1 mb-6 text-brand-gold/60">
                      {[1,2,3,4,5].map(j => <Star key={j} className="w-3 h-3 fill-current" />)}
                   </div>
                   <p className="text-brand-gray italic mb-8 font-light text-sm leading-relaxed">"{review.text}"</p>
                   <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-brand-black text-xs font-bold">{review.author[0]}</div>
                      <div>
                         <div className="text-xs font-bold uppercase tracking-[2px]">{review.author}</div>
                         <div className="text-[10px] text-brand-gold/60 uppercase tracking-widest">{review.role}</div>
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 bg-brand-black border-t border-white/5">
       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16">
          <div className="md:w-1/2">
             <SectionHeading subtitle="Get In Touch" title="Visit Our Studio" />
             
             <div className="space-y-10">
                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-brand-glass border border-brand-gold/20 rounded-lg flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-brand-gold" />
                   </div>
                   <div>
                      <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-2 text-brand-gold">Location</h4>
                      <p className="text-brand-gray font-light text-lg">Sarvan Nagar, Bijnor Rd, <br/> near Tata Warehouse, Uttar Pradesh</p>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-brand-glass border border-brand-gold/20 rounded-lg flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 text-brand-gold" />
                   </div>
                   <div>
                      <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-2 text-brand-gold">Call For Appointments</h4>
                      <a href={`tel:${PHONE}`} className="text-brand-beige font-serif text-2xl md:text-3xl hover:text-brand-gold transition-colors accent-glow block md:inline">{PHONE}</a>
                   </div>
                </div>

                <div className="flex gap-6">
                   <div className="w-12 h-12 bg-brand-glass border border-brand-gold/20 rounded-lg flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-brand-gold" />
                   </div>
                   <div>
                      <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-2 text-brand-gold">Business Hours</h4>
                      <div className="flex items-center gap-2">
                         <span className="text-brand-gray text-sm">Mon - Sun: 10:00 AM - 08:00 PM</span>
                         <span className="bg-brand-gold text-brand-black px-2 py-0.5 text-[9px] font-bold uppercase rounded-sm">Open Now</span>
                      </div>
                   </div>
                </div>
             </div>
          </div>

          <div className="md:w-1/2">
             <div className="w-full h-full min-h-[300px] md:min-h-[400px] bg-brand-glass rounded-[30px] md:rounded-[40px] border border-brand-gold/10 flex items-center justify-center p-8 md:p-12 text-center group transition-all hover:bg-brand-gold/5 hover:border-brand-gold/30">
                <div className="space-y-6">
                   <MapPin className="w-12 h-12 text-brand-gold/40 mx-auto group-hover:scale-110 transition-transform" />
                   <h3 className="text-2xl font-serif text-brand-beige accent-glow">View On Google Maps</h3>
                   <p className="text-sm font-light text-brand-gray tracking-wide">Find us easily near Sarvan Nagar, Bijnor</p>
                   <a 
                    href="https://www.google.com/maps/search/?api=1&query=Glossy+Makeup+Studio+Sarvan+Nagar+Bijnor" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="px-10 py-4 bg-transparent border border-brand-gold text-brand-gold rounded-sm text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-brand-gold hover:text-brand-black transition-all flex items-center gap-3 mx-auto"
                   >
                      Get Directions <ExternalLink className="w-4 h-4" />
                   </a>
                </div>
             </div>
          </div>
       </div>
    </section>
  );
};

const HighConversionCTA = () => {
  return (
    <section className="py-32 px-6 overflow-hidden relative bg-brand-gold">
       <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 text-9xl font-serif rotate-12 -translate-x-1/2">GLOSSY</div>
          <div className="absolute bottom-0 right-0 text-9xl font-serif -rotate-12 translate-x-1/2">STUDIO</div>
       </div>

       <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="space-y-12"
          >
             <h2 className="text-4xl md:text-7xl font-serif text-brand-black leading-tight px-4">
                Don't Wait, Your <br className="hidden sm:block"/> <span className="italic">Perfect Date Is Near</span>
             </h2>
             <p className="text-lg md:text-2xl font-serif text-brand-black/60 italic px-6">
                Bridal slots are filling up fast for the upcoming wedding season.
             </p>
             
             <div className="flex flex-col md:flex-row justify-center gap-4 px-6 md:px-0">
                <a href={`tel:${PHONE}`} className="bg-brand-black text-brand-nude px-12 py-5 md:py-6 rounded-sm text-xs md:text-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:scale-105 transition-transform min-h-[56px]">
                   <Phone className="w-5 h-5 text-brand-gold" /> Call Now
                </a>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="bg-transparent border border-brand-black text-brand-black px-12 py-5 md:py-6 rounded-sm text-xs md:text-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-4 hover:bg-brand-black hover:text-white transition-all min-h-[56px]">
                   <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </a>
             </div>
          </motion.div>
       </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-black py-24 px-6 md:px-12 text-white border-t border-white/5">
       <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-16">
          <div className="md:col-span-2 space-y-8">
             <div>
                <span className="text-2xl font-serif font-bold tracking-tighter text-brand-gold">GLOSSY</span>
                <p className="text-brand-gray text-[10px] uppercase tracking-widest mt-2">{BRAND_NAME}</p>
             </div>
             <p className="text-brand-gray font-light max-w-sm leading-relaxed text-sm">
                Elevating beauty standards in Bijnor through professional makeup artistry and world-class beauty education. 
                Visit us for bridal, engagement, party makeup and more.
             </p>
             <div className="flex gap-4">
                {[
                  { Icon: Instagram, href: INSTAGRAM_URL, target: "_blank" },
                  { Icon: MessageCircle, href: WHATSAPP_URL, target: "_blank" },
                  { Icon: Phone, href: `tel:${PHONE}` },
                  { Icon: ArrowRight, href: SMS_URL, label: "SMS" }
                ].map((social, i) => (
                   <a 
                    key={i} 
                    href={social.href} 
                    target={social.target} 
                    rel={social.target ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-brand-gold hover:text-brand-black transition-all"
                    title={social.label}
                   >
                      <social.Icon className="w-4 h-4" />
                   </a>
                ))}
             </div>
          </div>

          <div>
             <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-10 text-brand-gold">Quick Links</h4>
             <ul className="space-y-4">
                {['Services', 'Packages', 'Academy', 'Gallery', 'Contact'].map(link => (
                   <li key={link}>
                      <a href={`#${link.toLowerCase()}`} className="text-brand-gray hover:text-brand-gold transition-colors text-xs uppercase tracking-[20%] font-semibold">{link}</a>
                   </li>
                ))}
             </ul>
          </div>

          <div>
             <h4 className="font-bold uppercase tracking-[2px] text-[10px] mb-10 text-brand-gold">Studio Address</h4>
             <p className="text-xs font-light text-brand-gray mb-4 leading-relaxed uppercase tracking-wider">
                Sarvan Nagar, Bijnor Rd, <br/> Near Tata Warehouse, <br/> Uttar Pradesh
             </p>
             <p className="font-serif text-xl tracking-wide text-brand-beige">{PHONE}</p>
          </div>
       </div>

       <div className="max-w-7xl mx-auto pt-16 mt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/20">© 2026 GLOSSY MAKEUP STUDIO. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20 font-bold">
             <a href="#" className="hover:text-brand-gold">Terms</a>
             <a href="#" className="hover:text-brand-gold">Privacy</a>
          </div>
       </div>
    </footer>
  );
};

const FloatingButtons = () => {
   return (
      <div className="fixed bottom-6 right-6 z-[60] flex flex-col gap-4">
         <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={`tel:${PHONE}`}
            className="w-14 h-14 bg-brand-gold rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(212,175,55,0.4)] text-brand-black"
            title="Call Us"
         >
            <Phone className="w-7 h-7" />
         </motion.a>
         <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(34,197,94,0.4)] text-white"
            title="WhatsApp Us"
         >
            <MessageCircle className="w-7 h-7" />
         </motion.a>
         <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={SMS_URL}
            className="w-14 h-14 bg-brand-pink rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(219,39,119,0.3)] text-white"
            title="SMS Us"
         >
            <MessageCircle className="w-7 h-7 rotate-180" />
         </motion.a>
         <motion.a 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-linear-to-tr from-yellow-500 via-pink-600 to-purple-600 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(219,39,119,0.3)] text-white"
            title="Instagram"
         >
            <Instagram className="w-7 h-7" />
         </motion.a>
      </div>
   );
};

export default function App() {
  return (
    <div className="min-h-screen bg-brand-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Packages />
        <Academy />
        <Gallery />
        <Testimonials />
        <HighConversionCTA />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
