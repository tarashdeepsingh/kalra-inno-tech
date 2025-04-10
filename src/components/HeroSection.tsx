
import { ArrowRight, MousePointer } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const HeroSection = () => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }
    }
  };

  return (
    <div className="relative bg-gradient-to-r from-kalra-navy to-kalra-blue min-h-[90vh] flex items-center overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        {/* Mesh gradient */}
        <div className="absolute inset-0 bg-[url('/public/background.jpg')] bg-cover bg-center opacity-20 mix-blend-overlay"></div>
        
        {/* Animated gradient overlay */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-kalra-navy/80 via-transparent to-kalra-blue/60"
          animate={{ 
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 20, 
            ease: "linear" 
          }}
          style={{ backgroundSize: '200% 200%' }}
        />
        
        {/* Dynamic floating elements */}
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
              initial={{ 
                x: Math.random() * 100 + "%", 
                y: Math.random() * 100 + "%",
                scale: Math.random() * 0.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.1
              }}
              animate={{ 
                y: [
                  Math.random() * 100 + "%", 
                  Math.random() * 100 + "%"
                ],
                opacity: [
                  Math.random() * 0.5 + 0.1, 
                  Math.random() * 0.3 + 0.05
                ],
                rotate: [0, 180]
              }}
              transition={{ 
                repeat: Infinity, 
                repeatType: "reverse", 
                duration: Math.random() * 20 + 10,
                ease: "easeInOut"
              }}
              style={{ 
                width: Math.random() * 100 + 10 + "px", 
                height: Math.random() * 100 + 10 + "px",
              }}
            />
          ))}
        </div>

        {/* Large decorative orbs */}
        <motion.div 
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-kalra-blue/20 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1], 
            opacity: [0.3, 0.2, 0.3] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 15,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-kalra-gold/10 blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2], 
            opacity: [0.15, 0.1, 0.15] 
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 12,
            ease: "easeInOut"
          }}
        />
      </div>
      
      <div className="container-custom relative z-10 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-white"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.span 
              className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-sm text-kalra-gold mb-6"
              variants={itemVariants}
            >
              Innovative Solutions for Modern Businesses
            </motion.span>
            
            <motion.h1 
              className="heading-xl mb-6"
              variants={itemVariants}
            >
              Converting Ideas Into{" "}
              <span className="relative inline-block">
                <motion.span 
                  className="absolute inset-0 bg-gradient-to-r from-kalra-gold via-amber-400 to-kalra-gold bg-clip-text text-transparent blur-sm opacity-50"
                  animate={{ 
                    backgroundPosition: ['0% center', '100% center', '0% center'] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "linear" 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Reality
                </motion.span>
                <motion.span 
                  className="relative text-transparent bg-clip-text bg-gradient-to-r from-kalra-gold via-amber-400 to-kalra-gold"
                  animate={{ 
                    backgroundPosition: ['0% center', '100% center', '0% center'] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 8, 
                    ease: "linear" 
                  }}
                  style={{ backgroundSize: '200% auto' }}
                >
                  Reality
                </motion.span>
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl mb-8 text-white/80 leading-relaxed max-w-xl"
              variants={itemVariants}
            >
              Specializing in innovative product design and development. We help transform your concepts into tangible solutions with precision and creativity.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Link to="/services" className="group relative overflow-hidden rounded-md">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-amber-400 to-kalra-gold group-hover:scale-105 transition-transform duration-300"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative bg-gradient-to-r from-kalra-gold to-amber-500 text-kalra-navy hover:bg-opacity-90 px-6 py-3 rounded-md transition-all flex items-center justify-center font-medium">
                  Our Services <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
              
              <Link to="/contact" className="group relative overflow-hidden rounded-md">
                <motion.div 
                  className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="relative backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-md transition-all flex items-center justify-center font-medium">
                  Get in Touch
                </div>
              </Link>
            </motion.div>
            
            <motion.div 
              className="mt-16 hidden sm:flex items-center"
              variants={itemVariants}
            >
              <MousePointer size={20} className="text-kalra-gold mr-2" />
              <span className="text-white/60 text-sm">Scroll down to explore</span>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex justify-center"
            initial={{ opacity: 0, scale: 0.8, rotateY: 25 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ delay: 0.5, duration: 1, type: "spring" }}
          >
            <div className="relative">
              {/* 3D-like effect for the logo */}
              <div className="relative perspective">
                {/* Shadow base */}
                <motion.div 
                  className="absolute left-0 right-0 mx-auto w-64 h-12 bottom-0 bg-black/40 rounded-[100%] blur-xl"
                  animate={{ 
                    scaleX: [1, 1.02, 1], 
                    opacity: [0.4, 0.5, 0.4] 
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Floating card with logo */}
                <Card className="relative mt-4 w-[400px] h-[400px] rounded-2xl border-0 overflow-hidden">
                  <CardContent className="p-0 h-full flex items-center justify-center bg-gradient-to-br from-kalra-navy/80 to-kalra-blue/70 backdrop-blur-xl">
                    {/* Animated background elements */}
                    <div className="absolute inset-0 overflow-hidden">
                      <motion.div 
                        className="absolute top-0 left-0 w-40 h-40 bg-kalra-gold/20 rounded-full filter blur-3xl"
                        animate={{ 
                          x: [0, 100, 0], 
                          y: [0, 50, 0],
                          opacity: [0.2, 0.3, 0.2] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 15,
                          ease: "easeInOut"
                        }}
                      />
                      <motion.div 
                        className="absolute bottom-0 right-0 w-60 h-60 bg-kalra-blue/30 rounded-full filter blur-3xl"
                        animate={{ 
                          x: [0, -50, 0], 
                          y: [0, -30, 0],
                          opacity: [0.3, 0.2, 0.3] 
                        }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 12,
                          ease: "easeInOut"
                        }}
                      />
                    </div>
                    
                    {/* Logo with glow */}
                    <motion.div
                      animate={{ 
                        y: [0, -15, 0],
                        rotateY: [0, 5, 0],
                        rotateX: [0, 3, 0],
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 6,
                        ease: "easeInOut"
                      }}
                      className="relative z-10 w-80 h-80 flex items-center justify-center"
                    >
                      <div className="absolute inset-0 bg-kalra-gold/30 rounded-full filter blur-3xl opacity-70" />
                      <img 
                        src="/homeImage.jpg" 
                        alt="Kalra Inno Tech" 
                        className="w-72 drop-shadow-2xl relative z-10"
                      />
                    </motion.div>
                    
                    {/* Border glow effect */}
                    <div className="absolute inset-0 rounded-2xl border border-white/10" />
                    <motion.div 
                      className="absolute inset-0 rounded-2xl border-2 border-kalra-gold/50 opacity-0"
                      animate={{ opacity: [0, 0.5, 0] }}
                      transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Bottom fade overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: [0.4, 0.8, 0.4], y: [0, 10, 0] }}
        transition={{ delay: 1.5, repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div 
            className="w-1.5 h-1.5 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroSection;
