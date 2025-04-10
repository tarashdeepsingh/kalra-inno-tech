
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import { ArrowRight, Lightbulb, PenTool, LayoutGrid, FileCode, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Featured services
  const services = [
    {
      icon: <PenTool size={24} />,
      title: "Product Design",
      description: "We create innovative, user-centered designs that solve real problems and deliver exceptional experiences."
    },
    {
      icon: <FileCode size={24} />,
      title: "Product Development",
      description: "From concept to reality, we develop high-quality products that meet your specifications and market demands."
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Paper Products",
      description: "Custom paper solutions designed to meet your specific needs with attention to quality and sustainability."
    },
    {
      icon: <Target size={24} />,
      title: "Printing Services",
      description: "Premium printing services with precision and attention to detail for all your business requirements."
    }
  ];

  // Featured projects
  const projects = [
    {
      id: 1,
      title: "Custom Packaging Design",
      category: "Product Design",
      imageUrl: "/product_design_icon.png",
      description: "Innovative packaging solution for a consumer electronics brand."
    },
    {
      id: 2,
      title: "Corporate Branding Materials",
      category: "Printing",
      imageUrl: "/printing_icon.png",
      description: "Complete branding collateral for a multinational corporation."
    },
    {
      id: 3,
      title: "Product Prototype Development",
      category: "Development",
      imageUrl: "/development_icon.png",
      description: "Functional prototype for an innovative consumer product."
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg mb-6 text-kalra-navy">
                Converting Innovative <span className="text-kalra-blue">Ideas</span> Into <span className="text-kalra-gold">Reality</span>
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Kalra Inno Tech Private Limited is a dynamic company specializing in product design and development, as well as manufacturing high-quality paper products and providing premium printing services.
              </p>
              <p className="text-gray-600 mb-8">
                Founded in May 2023, our mission is to transform innovative ideas into reality, delivering exceptional products and services that exceed our clients' expectations.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="relative">
              <div className="bg-kalra-gold/20 absolute -top-6 -right-6 w-full h-full rounded-tr-3xl rounded-bl-3xl"></div>
              <img 
                src="/design_img.jpg"
                alt="Team working on design" 
                className="rounded-tr-3xl rounded-bl-3xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Services</h2>
            <p className="text-gray-600 text-lg">
              We offer a comprehensive range of services to help transform your ideas into reality.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary inline-flex items-center">
              View All Services <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="section-padding bg-kalra-navy text-white relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-4">Why Choose Us</h2>
            <p className="text-gray-300 text-lg">
              At Kalra Inno Tech, we're committed to excellence in everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-300">
                We constantly explore new ideas and technologies to deliver innovative solutions that set you apart.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality</h3>
              <p className="text-gray-300">
                We maintain the highest standards in every project, ensuring exceptional quality in all our products and services.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg border border-white/20 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-300">
                We prioritize your needs and work collaboratively to deliver solutions that exceed your expectations.
              </p>
            </div>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-40 h-40 bg-kalra-blue rounded-full filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-10 w-60 h-60 bg-kalra-gold rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
            <div>
              <h2 className="heading-lg text-kalra-navy mb-2">Our Projects</h2>
              <p className="text-gray-600 text-lg">
                Explore some of our recent work
              </p>
            </div>
            <Link to="/projects" className="btn-primary mt-4 md:mt-0 inline-flex items-center">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                category={project.category}
                imageUrl={project.imageUrl}
                description={project.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-kalra-blue py-16">
        <div className="container-custom">
          <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-kalra-gold/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-28 h-28 bg-kalra-blue/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h2 className="heading-md text-kalra-navy mb-4">Ready to convert your ideas into reality?</h2>
                  <p className="text-gray-600 mb-4 lg:mb-0">
                    Contact us today to discuss your project requirements and see how we can help bring your vision to life.
                  </p>
                </div>
                <div className="flex justify-start lg:justify-end">
                  <Link to="/contact" className="btn-secondary inline-flex items-center">
                    Get in Touch <ArrowRight size={16} className="ml-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
