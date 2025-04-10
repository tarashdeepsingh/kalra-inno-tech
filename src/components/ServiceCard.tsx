
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link = "/services" }: ServiceCardProps) => {
  return (
    <motion.div 
      className="relative group overflow-hidden rounded-2xl h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-kalra-navy via-kalra-blue/90 to-kalra-blue/80 rounded-2xl z-0" />
      
      {/* Animated light effect */}
      <motion.div 
        className="absolute -top-20 -left-20 w-40 h-40 bg-kalra-gold/20 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
          rotate: [0, 90, 180]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 12,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute -bottom-20 -right-20 w-40 h-40 bg-white/10 rounded-full blur-3xl z-0"
        animate={{ 
          scale: [1.2, 1, 1.2],
          opacity: [0.1, 0.2, 0.1],
          rotate: [0, -90, -180]
        }}
        transition={{ 
          repeat: Infinity, 
          duration: 10,
          ease: "easeInOut"
        }}
      />
      
      {/* Card content with glass effect */}
      <div className="relative bg-white/10 backdrop-blur-md p-8 h-full z-10 rounded-2xl border border-white/20 transition-all flex flex-col">
        {/* Animated icon container */}
        <div className="relative mb-6 inline-flex">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-kalra-gold to-amber-400/70 rounded-full blur-md"
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.7, 0.9, 0.7] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut" 
            }}
          />
          <div className="bg-gradient-to-br from-kalra-gold to-amber-500 text-kalra-navy p-4 rounded-full relative z-10">
            {icon}
          </div>
        </div>
        
        {/* Title with animated underline effect */}
        <motion.h3 
          className="text-xl font-semibold mb-4 text-white relative inline-block"
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1 }}
        >
          {title}
          <motion.span 
            className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-kalra-gold via-amber-400 to-kalra-gold"
            initial={{ width: "0%" }}
            whileInView={{ width: "30%" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.h3>
        
        {/* Description with subtle animation */}
        <p className="text-gray-100 group-hover:text-white transition-colors mb-6 flex-grow">
          {description}
        </p>
        
        {/* Learn more link */}
        <div className="mt-auto">
          <Link 
            to={link} 
            className="inline-flex items-center text-kalra-gold hover:text-amber-300 transition-colors"
          >
            Learn more 
            <motion.div 
              className="ml-1"
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <ArrowRight size={16} />
            </motion.div>
          </Link>
        </div>
        
        {/* Interactive elements on hover */}
        <HoverCard>
          <HoverCardTrigger asChild>
            <div className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
              <span className="text-white text-xs">i</span>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80 backdrop-blur-lg bg-kalra-navy/90 border border-kalra-gold/20 text-white p-4">
            <div className="flex justify-between items-start">
              <div className="space-y-1">
                <h4 className="text-sm font-semibold text-kalra-gold">{title} Service</h4>
                <p className="text-xs text-gray-200">{description}</p>
                <p className="text-xs text-kalra-gold pt-2">Click to learn more about our {title.toLowerCase()} services.</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -mt-2 -mr-2 w-12 h-12 bg-kalra-gold/10 rounded-full blur-xl group-hover:bg-kalra-gold/20 transition-all"></div>
        <div className="absolute bottom-0 left-0 -mb-4 -ml-4 w-24 h-24 bg-kalra-blue/30 rounded-full blur-xl group-hover:bg-kalra-blue/40 transition-all"></div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
