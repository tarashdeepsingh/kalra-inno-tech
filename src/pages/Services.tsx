
import { ArrowRight, Lightbulb, PenTool, LayoutGrid, FileCode, Printer, Book, Settings, TrendingUp, FileEdit, Package, Palette, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const mainServices = [
    {
      icon: <PenTool size={24} />,
      title: "Product Design",
      description: "Our product design services focus on creating innovative, functional, and aesthetically pleasing designs that meet user needs and market demands.",
      features: [
        "User-centered design approach",
        "Concept development and ideation",
        "3D modeling and prototyping",
        "Design for manufacturability"
      ]
    },
    {
      icon: <FileCode size={24} />,
      title: "Product Development",
      description: "We transform concepts into reality through comprehensive product development services, ensuring high-quality outcomes at every stage.",
      features: [
        "Technical requirement analysis",
        "Engineering and implementation",
        "Quality assurance and testing",
        "Production support"
      ]
    },
    {
      icon: <LayoutGrid size={24} />,
      title: "Paper Products",
      description: "We specialize in manufacturing a wide range of paper products tailored to your specific requirements and industry standards.",
      features: [
        "Custom packaging solutions",
        "Stationary and office supplies",
        "Marketing materials",
        "Sustainable paper options"
      ]
    },
    {
      icon: <Printer size={24} />,
      title: "Printing Services",
      description: "Our premium printing services deliver exceptional quality for all your business and marketing needs with attention to detail.",
      features: [
        "Digital and offset printing",
        "Large format printing",
        "Variable data printing",
        "Specialty finishes and effects"
      ]
    },
  ];

  const additionalServices = [
    {
      icon: <Book size={24} />,
      title: "Publishing Solutions",
      description: "Comprehensive publishing services from manuscript preparation to final production and distribution."
    },
    {
      icon: <FileEdit size={24} />,
      title: "Content Creation",
      description: "Professional content creation services tailored to enhance your brand messaging and engagement."
    },
    {
      icon: <Package size={24} />,
      title: "Packaging Design",
      description: "Creative and functional packaging solutions that protect your products and enhance brand appeal."
    },
    {
      icon: <Palette size={24} />,
      title: "Branding & Identity",
      description: "Strategic branding services to help establish a strong and recognizable market presence."
    },
    {
      icon: <Settings size={24} />,
      title: "Technical Consulting",
      description: "Expert technical advice and solutions for optimizing your product development processes."
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Market Research",
      description: "In-depth market analysis to identify opportunities and inform product development strategies."
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your requirements, objectives, and vision for the project."
    },
    {
      number: "02",
      title: "Concept Development",
      description: "Our team creates initial concepts and designs based on your requirements and feedback."
    },
    {
      number: "03",
      title: "Prototyping",
      description: "We develop prototypes to test functionality, appearance, and overall user experience."
    },
    {
      number: "04",
      title: "Production",
      description: "Upon approval, we move to full production with rigorous quality control measures."
    },
    {
      number: "05",
      title: "Delivery",
      description: "We deliver the final product, ensuring it meets all specifications and requirements."
    },
    {
      number: "06",
      title: "Support",
      description: "We provide ongoing support and maintenance to ensure long-term satisfaction."
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-kalra-navy to-kalra-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Services</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive solutions to transform your ideas into reality through innovative design and quality execution.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Core Services</h2>
            <p className="text-gray-600 text-lg">
              Our primary service offerings focus on product design, development, and high-quality printing solutions.
            </p>
          </div>
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full inline-block mb-4">
                    {service.icon}
                  </div>
                  <h3 className="heading-md text-kalra-navy mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 text-lg">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="bg-kalra-gold/20 p-1 rounded-full mr-3 mt-1">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-kalra-gold" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className={`absolute ${index % 2 === 0 ? '-top-6 -right-6' : '-top-6 -left-6'} w-full h-full rounded-tr-3xl rounded-bl-3xl ${index % 2 === 0 ? 'bg-kalra-gold/20' : 'bg-kalra-blue/20'}`}></div>
                  <img 
                    src={`${index % 4 === 0 ? '/design_img.jpg' : index % 4 === 1 ? '/product_development_img.jpg' : index % 4 === 2 ? 'paper_products_img.jpg' : 'printing_img.jpg'}`}
                    alt={service.title} 
                    className="rounded-tr-3xl rounded-bl-3xl shadow-xl relative z-10 w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Additional Services</h2>
            <p className="text-gray-600 text-lg">
              Complementary services to enhance your product design and development experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full inline-block mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Process</h2>
            <p className="text-gray-600 text-lg">
              A systematic approach to ensure successful project outcomes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-4 top-0 text-6xl font-bold text-kalra-gold opacity-20">
                  {step.number}
                </div>
                <div className="bg-white p-8 rounded-lg border border-gray-200 relative">
                  <div className="bg-kalra-gold text-kalra-navy text-xl font-bold w-12 h-12 flex items-center justify-center rounded-full mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-kalra-navy">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Industries We Serve */}
      <section className="section-padding bg-kalra-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Industries We Serve</h2>
            <p className="text-gray-300 text-lg">
              Our services cater to a diverse range of industries and sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Retail</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a2 2 0 012-2h6a2 2 0 012 2v5m-4-2v2m-2-4v4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Corporate</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Healthcare</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Technology</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">E-commerce</h3>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-kalra-gold/20 p-4 rounded-full mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-kalra-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="font-semibold mb-1">Education</h3>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-kalra-navy to-kalra-blue rounded-lg p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6">Ready to Transform Your Ideas?</h2>
              <p className="text-gray-100 text-lg mb-8">
                Contact us today to discuss your project requirements and see how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/contact" className="btn-secondary inline-flex items-center justify-center">
                  Get a Quote <ArrowRight size={16} className="ml-2" />
                </Link>
                <Link to="/projects" className="bg-transparent border border-white text-white hover:bg-white hover:text-kalra-navy px-6 py-3 rounded-md transition-all inline-flex items-center justify-center">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
