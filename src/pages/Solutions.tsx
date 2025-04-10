
import { ArrowRight, Lightbulb, PenTool, LayoutGrid, FileCode, Target, Rocket, Shield, Zap, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      icon: <PenTool size={24} />,
      title: "Design Solutions",
      description: "Comprehensive design solutions that focus on user experience, aesthetics, and functionality to create exceptional products.",
      features: [
        "User-centered design",
        "Industrial design",
        "Interaction design",
        "Visual design"
      ]
    },
    {
      icon: <Rocket size={24} />,
      title: "Innovation Solutions",
      description: "Cutting-edge innovation services to help you develop new ideas and bring them to market effectively.",
      features: [
        "Idea validation",
        "Concept development",
        "Rapid prototyping",
        "Market testing"
      ]
    },
    {
      icon: <FileCode size={24} />,
      title: "Development Solutions",
      description: "Technical development services to transform concepts into functional products with precision and quality.",
      features: [
        "Engineering solutions",
        "Software development",
        "Hardware integration",
        "Quality assurance"
      ]
    },
    {
      icon: <Target size={24} />,
      title: "Manufacturing Solutions",
      description: "Streamlined manufacturing solutions for efficient production of paper products and printed materials.",
      features: [
        "Custom manufacturing",
        "Production optimization",
        "Quality control",
        "Supply chain management"
      ]
    }
  ];

  const caseStudies = [
    {
      title: "Custom Packaging Design",
      client: "Consumer Electronics Brand",
      challenge: "Creating distinctive packaging that enhances brand recognition while providing optimal protection.",
      solution: "Developed eco-friendly packaging design with custom inserts and premium finishes.",
      results: "Increased brand visibility and reduced shipping damage by 40%.",
      image: "/custom_packaging_design.png"
    },
    {
      title: "Corporate Rebranding",
      client: "Financial Services Firm",
      challenge: "Refreshing an outdated brand identity while maintaining recognition from existing customers.",
      solution: "Created a modern, cohesive branding system with comprehensive implementation guidelines.",
      results: "Enhanced brand perception and increased client engagement by 25%.",
      image: "/corporate_rebranding.jpg"
    },
    {
      title: "Product Prototype Development",
      client: "Healthcare Startup",
      challenge: "Developing a functional prototype for a medical device with strict regulatory requirements.",
      solution: "Engineered a fully functional prototype with integrated testing capabilities.",
      results: "Secured additional funding and passed initial regulatory assessments.",
      image: "/product_prototype.png"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-kalra-blue text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/solutions.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Solutions</h1>
            <p className="text-xl text-gray-100 mb-8">
              Comprehensive solutions tailored to meet your specific needs and challenges.
            </p>
          </div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 right-10 w-40 h-40 bg-kalra-gold rounded-full filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-10 w-60 h-60 bg-kalra-navy rounded-full filter blur-3xl opacity-10"></div>
        </div>
      </section>
      
      {/* Solutions Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Innovation Solutions</h2>
            <p className="text-gray-600 text-lg">
              We specialize in developing tailored solutions that address your unique challenges and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-kalra-gold">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full inline-block mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-kalra-navy">{solution.title}</h3>
                <p className="text-gray-600 mb-6">
                  {solution.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {solution.features.map((feature, idx) => (
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
            ))}
          </div>
        </div>
      </section>
      
      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Approach</h2>
            <p className="text-gray-600 text-lg">
              Our systematic approach ensures effective and efficient solutions that meet your objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-kalra-navy text-white rounded-full flex items-center justify-center font-bold">1</div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Analyze</h3>
                <p className="text-gray-600">
                  We start by thoroughly analyzing your needs, challenges, and objectives to gain a comprehensive understanding of your requirements.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-kalra-navy text-white rounded-full flex items-center justify-center font-bold">2</div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Design</h3>
                <p className="text-gray-600">
                  Our team designs tailored solutions that align with your goals, leveraging our expertise and industry best practices.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-kalra-navy text-white rounded-full flex items-center justify-center font-bold">3</div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Implement</h3>
                <p className="text-gray-600">
                  We execute the solution with precision, ensuring quality at every step of the implementation process.
                </p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-kalra-navy text-white rounded-full flex items-center justify-center font-bold">4</div>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Optimize</h3>
                <p className="text-gray-600">
                  We continuously evaluate and refine the solution to enhance performance and ensure long-term success.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/contact" className="btn-primary inline-flex items-center">
              Discuss Your Project <ArrowRight size={16} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Case Studies */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Case Studies</h2>
            <p className="text-gray-600 text-lg">
              Real-world examples of how our solutions have helped clients overcome challenges.
            </p>
          </div>
          
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`${index % 2 !== 0 ? 'lg:order-2' : ''}`}>
                  <h3 className="heading-md text-kalra-navy mb-4">{study.title}</h3>
                  <p className="text-kalra-gold font-medium mb-4">Client: {study.client}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-800">Challenge</h4>
                      <p className="text-gray-600">{study.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Solution</h4>
                      <p className="text-gray-600">{study.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Results</h4>
                      <p className="text-gray-600">{study.results}</p>
                    </div>
                  </div>
                </div>
                <div className={`relative ${index % 2 !== 0 ? 'lg:order-1' : ''}`}>
                  <div className={`absolute ${index % 2 === 0 ? '-top-6 -right-6' : '-top-6 -left-6'} w-full h-full rounded-tl-3xl rounded-br-3xl ${index % 2 === 0 ? 'bg-kalra-gold/20' : 'bg-kalra-blue/20'}`}></div>
                  <img 
                    src={study.image}
                    alt={study.title} 
                    className="rounded-tl-3xl rounded-br-3xl shadow-xl relative z-10 w-full h-80 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Key Benefits */}
      <section className="section-padding bg-kalra-navy text-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg mb-4">Key Benefits</h2>
            <p className="text-gray-300 text-lg">
              Why choose our solutions to bring your ideas to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Lightbulb size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Innovative Approach</h3>
              <p className="text-gray-300">
                We leverage the latest technologies and methodologies to deliver cutting-edge solutions.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Shield size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Assurance</h3>
              <p className="text-gray-300">
                We maintain rigorous quality standards to ensure exceptional results in every project.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Efficient Execution</h3>
              <p className="text-gray-300">
                Our streamlined processes ensure timely delivery without compromising on quality.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-white/10 hover:transform hover:-translate-y-1 transition-all">
              <div className="bg-kalra-gold text-kalra-navy p-3 rounded-full inline-block mb-4">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Customized Solutions</h3>
              <p className="text-gray-300">
                We tailor our solutions to meet your specific requirements and business objectives.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about our solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">How long does it take to develop a custom solution?</h3>
              <p className="text-gray-600">
                The timeline varies based on project complexity. We provide detailed timelines during the initial consultation, ensuring transparency throughout the process.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">What industries do you serve?</h3>
              <p className="text-gray-600">
                We serve a wide range of industries including retail, healthcare, technology, education, and more. Our solutions are adaptable to various sectors.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">How do you ensure quality in your solutions?</h3>
              <p className="text-gray-600">
                We implement rigorous quality control measures throughout the development process, with regular testing and evaluation to ensure our solutions meet the highest standards.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Do you offer ongoing support after implementation?</h3>
              <p className="text-gray-600">
                Yes, we provide comprehensive post-implementation support to ensure the continued success of our solutions. We offer various support packages tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-kalra-navy to-kalra-blue rounded-lg p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="heading-lg mb-6">Ready to Convert Your Ideas into Reality?</h2>
                <p className="text-gray-100 text-lg mb-8">
                  Contact us today to discuss your requirements and discover how our solutions can help you achieve your goals.
                </p>
                <Link to="/contact" className="btn-secondary inline-flex items-center">
                  Get Started <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="hidden lg:block">
                <img 
                  src="/innovation_solutions.jpg"
                  alt="Innovation Solutions" 
                  className="rounded-lg shadow-xl float-right me-8"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
