
import { Users, Target, Trophy, ThumbsUp, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-kalra-navy text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/design_img.jpg')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">About Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              We are a team of innovators dedicated to transforming ideas into reality through creative design and technological excellence.
            </p>
          </div>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="heading-lg text-kalra-navy mb-6">Our Company</h2>
              <p className="text-gray-600 mb-4">
                Kalra Inno Tech Private Limited is a dynamic company founded on May 18, 2023, with a vision to revolutionize product design and development, paper manufacturing, and printing services. Despite being relatively new in the industry, we bring fresh perspectives and innovative approaches to every project we undertake.
              </p>
              <p className="text-gray-600 mb-4">
                Our company operates in the manufacturing sector, specifically in paper and paper products, as well as publishing, printing, and reproduction of recorded media. We are committed to delivering high-quality products and services that exceed our clients' expectations.
              </p>
              <p className="text-gray-600">
                The company is led by our directors, Charanjit Singh and Saravjeet, who bring their expertise and vision to guide Kalra Inno Tech towards excellence and innovation.
              </p>
            </div>
            <div className="relative">
              <div className="bg-kalra-gold/20 absolute -top-6 -left-6 w-full h-full rounded-tl-3xl rounded-br-3xl"></div>
              <img 
                src="/team_work_img.jpg"
                alt="Team working together" 
                className="rounded-tl-3xl rounded-br-3xl shadow-xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission, Vision, Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Vision & Mission</h2>
            <p className="text-gray-600 text-lg">
              Guided by our core values, we strive to make a positive impact in the industry.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-kalra-navy">
              <h3 className="text-xl font-semibold mb-4 text-kalra-navy">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading innovator in product design and development, transforming creative ideas into reality while setting new standards for quality and customer satisfaction.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-kalra-blue">
              <h3 className="text-xl font-semibold mb-4 text-kalra-blue">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional product design, development, and printing services that exceed client expectations, foster innovation, and contribute to sustainable business practices.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-kalra-gold">
              <h3 className="text-xl font-semibold mb-4 text-kalra-gold">Our Tagline</h3>
              <p className="text-gray-600 mb-4">
                <span className="italic font-medium">"Kuch nya ho jaye"</span> - Let something new happen
              </p>
              <p className="text-gray-600">
                <span className="italic font-medium">"Convert idea into reality"</span> - Bringing your vision to life
              </p>
            </div>
          </div>
          
          <div className="mt-16">
            <h3 className="heading-md text-center text-kalra-navy mb-8">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                  <Trophy size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Excellence</h4>
                <p className="text-gray-600">
                  We strive for excellence in all aspects of our work, from design to final delivery.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                  <ThumbsUp size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Quality</h4>
                <p className="text-gray-600">
                  We never compromise on quality, ensuring that every product meets the highest standards.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                  <Target size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Innovation</h4>
                <p className="text-gray-600">
                  We embrace creativity and innovation, continuously seeking new ways to improve.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                  <Users size={24} />
                </div>
                <h4 className="text-lg font-semibold mb-2">Teamwork</h4>
                <p className="text-gray-600">
                  We believe in collaboration and the power of working together to achieve common goals.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Our Journey</h2>
            <p className="text-gray-600 text-lg">
              Though we're just beginning our journey, we're committed to making a significant impact.
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-kalra-gold/30 transform md:translate-x-[-50%]"></div>
            
            <div className="relative z-10">
              <div className="timeline-item">
                <div className="md:w-1/2 pr-8 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-kalra-gold">
                    <div className="flex items-center mb-3 justify-start md:justify-end">
                      <Calendar size={20} className="text-kalra-gold mr-2" />
                      <span className="text-kalra-gold font-medium">May 18, 2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Company Founded</h3>
                    <p className="text-gray-600">
                      Kalra Inno Tech Private Limited was officially incorporated in Haryana, India.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-kalra-gold transform md:translate-x-[-50%] flex items-center justify-center mt-6">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              <div className="timeline-item mt-12">
                <div className="md:w-1/2 md:ml-auto pl-0 md:pl-12">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-kalra-gold">
                    <div className="flex items-center mb-3">
                      <Calendar size={20} className="text-kalra-gold mr-2" />
                      <span className="text-kalra-gold font-medium">2023</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Initial Operations</h3>
                    <p className="text-gray-600">
                      Established operations in paper products manufacturing and printing services.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-kalra-gold transform md:translate-x-[-50%] flex items-center justify-center mt-6">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
              
              <div className="timeline-item mt-12">
                <div className="md:w-1/2 pr-8 md:pr-12 md:text-right">
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-kalra-gold">
                    <div className="flex items-center mb-3 justify-start md:justify-end">
                      <Calendar size={20} className="text-kalra-gold mr-2" />
                      <span className="text-kalra-gold font-medium">2024</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Growth & Expansion</h3>
                    <p className="text-gray-600">
                      Expanding services and client base, focusing on innovative product design and development solutions.
                    </p>
                  </div>
                </div>
                <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-kalra-gold transform md:translate-x-[-50%] flex items-center justify-center mt-6">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Info */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="heading-lg text-kalra-navy mb-6">Company Information</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-kalra-navy text-kalra-gold p-2 rounded-md mr-4 flex-shrink-0 mt-1">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Registered Office</h3>
                    <p className="text-gray-600">
                      KHASRA NO. 16/12/1/1 NARIANGARH ROAD NEAR ORION BANQUET HALL, VILLAGE BARNALA, Dhankaur, Ambala, Haryana, India, 134007
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kalra-navy text-kalra-gold p-2 rounded-md mr-4 flex-shrink-0 mt-1">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Directors</h3>
                    <p className="text-gray-600">Charanjit Singh and Saravjeet</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kalra-navy text-kalra-gold p-2 rounded-md mr-4 flex-shrink-0 mt-1">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Established</h3>
                    <p className="text-gray-600">May 18, 2023</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-kalra-navy text-kalra-gold p-2 rounded-md mr-4 flex-shrink-0 mt-1">
                    <Target size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Industry</h3>
                    <p className="text-gray-600">
                      Manufacturing of paper products, publishing, printing, and reproduction of recorded media
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6 text-kalra-navy">Legal Information</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Corporate Identification Number (CIN)</h4>
                  <p className="text-gray-600">U22209HR2023PTC111792</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Company Type</h4>
                  <p className="text-gray-600">Private Limited Company</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Authorized Capital</h4>
                  <p className="text-gray-600">₹1,00,000</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Paid-up Capital</h4>
                  <p className="text-gray-600">₹1,00,000</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Company Status</h4>
                  <p className="text-gray-600">Active</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800 mb-1">Jurisdiction</h4>
                  <p className="text-gray-600">Haryana, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-kalra-navy text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-lg mb-6">Ready to Work With Us?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Partner with Kalra Inno Tech to transform your ideas into reality. Our team of experts is ready to help you bring your vision to life.
              </p>
              <Link to="/contact" className="btn-secondary inline-block">
                Contact Us Today
              </Link>
            </div>
            <div className="relative">
              <div className="bg-kalra-gold/20 absolute -top-6 -right-6 w-full h-full rounded-tr-3xl rounded-bl-3xl"></div>
              <img 
                src="/ready_to_work.jpg"
                alt="img" 
                className="rounded-tr-3xl rounded-bl-3xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
