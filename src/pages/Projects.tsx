
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const [filter, setFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "Custom Packaging Design",
      category: "Product Design",
      imageUrl: "/custom_packaging_design.png",
      description: "Innovative packaging solution for a consumer electronics brand that enhances product presentation and user experience."
    },
    {
      id: 2,
      title: "Corporate Branding Materials",
      category: "Printing",
      imageUrl: "/corporate_rebranding.jpg",
      description: "Complete branding collateral for a multinational corporation including business cards, letterheads, and folders."
    },
    {
      id: 3,
      title: "Product Prototype Development",
      category: "Development",
      imageUrl: "/product_prototype.png",
      description: "Functional prototype for an innovative consumer product, from concept sketches to working model."
    },
    {
      id: 4,
      title: "Annual Report Design",
      category: "Printing",
      imageUrl: "annual_report.jpg",
      description: "Comprehensive design and production of annual reports for a financial institution, highlighting key achievements."
    },
    {
      id: 5,
      title: "Smart Home Device Interface",
      category: "Product Design",
      imageUrl: "/smart_home.png",
      description: "User-centered interface design for a smart home automation system, focusing on intuitive interactions."
    },
    {
      id: 6,
      title: "Medical Device Development",
      category: "Development",
      imageUrl: "/medical_development",
      description: "End-to-end development of a medical monitoring device, from initial concept to functional prototype."
    },
  ];
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category.toLowerCase() === filter.toLowerCase());
  
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-kalra-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/product_background.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Our Projects</h1>
            <p className="text-xl text-gray-200 mb-8">
              Explore our portfolio of innovative design and development projects that showcase our expertise.
            </p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      
      {/* Projects Gallery */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center mb-12 gap-4">
            <button 
              onClick={() => setFilter("all")} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "all" 
                  ? "bg-kalra-navy text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter("product design")} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "product design" 
                  ? "bg-kalra-navy text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Product Design
            </button>
            <button 
              onClick={() => setFilter("development")} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "development" 
                  ? "bg-kalra-navy text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Development
            </button>
            <button 
              onClick={() => setFilter("printing")} 
              className={`px-6 py-2 rounded-full transition-all ${
                filter === "printing" 
                  ? "bg-kalra-navy text-white" 
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Printing
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
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
          
          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-xl font-medium text-gray-600">No projects found in this category.</h3>
              <button 
                onClick={() => setFilter("all")}
                className="mt-4 text-kalra-blue hover:text-kalra-navy underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Project Process</h2>
            <p className="text-gray-600 text-lg">
              A systematic approach that ensures successful outcomes for every project we undertake.
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-kalra-gold/30 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-kalra-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">1</div>
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy text-center lg:text-left">Discovery</h3>
                <p className="text-gray-600">
                  We begin by understanding your requirements, objectives, and vision for the project through in-depth consultations.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-kalra-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">2</div>
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy text-center lg:text-left">Design</h3>
                <p className="text-gray-600">
                  Our team creates conceptual designs and prototypes based on your requirements and feedback.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-kalra-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">3</div>
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy text-center lg:text-left">Development</h3>
                <p className="text-gray-600">
                  We bring the design to life through meticulous development, ensuring quality at every step.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-kalra-navy text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto lg:mx-0">4</div>
                <h3 className="text-xl font-semibold mb-3 text-kalra-navy text-center lg:text-left">Delivery</h3>
                <p className="text-gray-600">
                  The final product is delivered on time and to specification, with ongoing support as needed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Client Testimonials</h2>
            <p className="text-gray-600 text-lg">
              What our clients say about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="absolute -top-4 -left-4 text-6xl text-kalra-gold opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "Kalra Inno Tech delivered an exceptional packaging solution that perfectly aligned with our brand vision. Their attention to detail and innovative approach exceeded our expectations."
              </p>
              <div className="flex items-center">
                <div className="bg-kalra-blue/20 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-kalra-blue">
                  RK
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Rahul Kumar</h4>
                  <p className="text-sm text-gray-500">Marketing Director, Consumer Electronics</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="absolute -top-4 -left-4 text-6xl text-kalra-gold opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "Working with Kalra Inno Tech on our product development project was a seamless experience. Their team's expertise and commitment to quality resulted in a product that has significantly boosted our market presence."
              </p>
              <div className="flex items-center">
                <div className="bg-kalra-blue/20 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-kalra-blue">
                  AJ
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Anjali Joshi</h4>
                  <p className="text-sm text-gray-500">Product Manager, Healthcare</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg relative">
              <div className="absolute -top-4 -left-4 text-6xl text-kalra-gold opacity-20">"</div>
              <p className="text-gray-600 mb-6 relative z-10">
                "The printing services provided by Kalra Inno Tech for our corporate rebranding were impeccable. The quality of materials and attention to detail helped elevate our brand image significantly."
              </p>
              <div className="flex items-center">
                <div className="bg-kalra-blue/20 w-12 h-12 rounded-full flex items-center justify-center font-semibold text-kalra-blue">
                  VS
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">Vikram Singh</h4>
                  <p className="text-sm text-gray-500">CEO, Financial Services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-kalra-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-100 text-lg mb-8">
                Contact us today to discuss your project requirements and see how we can help bring your vision to life.
              </p>
              <Link to="/contact" className="btn-secondary inline-flex items-center">
                Get in Touch <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
              <h3 className="text-2xl font-semibold mb-4">Why Choose Us for Your Next Project</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-kalra-gold text-kalra-navy p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Innovative design and development solutions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-kalra-gold text-kalra-navy p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Quality-focused approach with attention to detail</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-kalra-gold text-kalra-navy p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Experienced team of professionals</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-kalra-gold text-kalra-navy p-1 rounded-full mr-3 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span>Timely delivery and excellent post-project support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
