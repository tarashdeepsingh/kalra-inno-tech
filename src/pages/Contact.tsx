
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-kalra-navy text-white py-20">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="heading-xl mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 mb-8">
              Get in touch with our team to discuss your project requirements or learn more about our services.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kalra-navy">Call Us</h3>
              <p className="text-gray-600 mb-4">Have questions? Call us directly.</p>
              <a href="tel:+919988467178" className="text-kalra-blue hover:text-kalra-navy transition-colors">
                +91 9988467178
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kalra-navy">Email Us</h3>
              <p className="text-gray-600 mb-4">Send us an email and we'll get back to you.</p>
              <a href="mailto:kalrainnotech@gmail.com" className="text-kalra-blue hover:text-kalra-navy transition-colors">
                kalrainnotech@gmail.com
              </a>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg shadow-sm flex flex-col items-center text-center">
              <div className="bg-kalra-navy text-kalra-gold p-3 rounded-full mb-4">
                <Clock size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-kalra-navy">Business Hours</h3>
              <p className="text-gray-600 mb-4">Our office hours are:</p>
              <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="heading-lg text-kalra-navy mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you as soon as possible. We're eager to hear about your project and how we can help bring your ideas to reality.
              </p>
              <ContactForm />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="heading-lg text-kalra-navy mb-6">Visit Our Office</h2>
              <div className="bg-gray-50 p-6 rounded-lg mb-8">
                <div className="flex items-start mb-4">
                  <MapPin size={20} className="text-kalra-gold mr-3 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      KHASRA NO. 16/12/1/1 NARIANGARH ROAD NEAR ORION BANQUET HALL, VILLAGE BARNALA, Dhankaur, Ambala, Haryana, India, 134007
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-80 rounded-lg overflow-hidden">
                <iframe 
                  title="Kalra Inno Tech Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3447.8946585592257!2d76.7956813!3d30.207758199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f75fa4cbd2c73%3A0xbea6ff9836731e5b!2sAmbala%2C%20Haryana%2C%20India!5e0!3m2!1sen!2sus!4v1712613098270!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="heading-lg text-kalra-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600 text-lg">
              Find answers to common questions about working with us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">What information should I provide for an initial consultation?</h3>
              <p className="text-gray-600">
                For the most effective initial consultation, please share details about your project requirements, objectives, timeline, and budget. The more information you provide, the better we can understand your needs and provide relevant solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">How long does it typically take to complete a project?</h3>
              <p className="text-gray-600">
                Project timelines vary based on complexity and scope. Simple projects may take a few weeks, while more complex ones could take several months. We'll provide a detailed timeline during our initial consultation and keep you updated throughout the process.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Do you provide post-project support?</h3>
              <p className="text-gray-600">
                Yes, we offer comprehensive post-project support to ensure the continued success of our solutions. We can discuss specific support requirements based on your project needs.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-kalra-navy">Can you work with clients outside of Haryana?</h3>
              <p className="text-gray-600">
                Absolutely! While our office is located in Ambala, Haryana, we work with clients across India and internationally. We use various communication tools to ensure effective collaboration regardless of location.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-kalra-navy to-kalra-blue rounded-lg p-8 md:p-12 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-lg mb-6">Ready to Convert Your Ideas into Reality?</h2>
              <p className="text-gray-100 text-lg mb-8">
                Contact us today to start your journey with Kalra Inno Tech. We're excited to work with you and help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a href="tel:+919988467178" className="btn-secondary inline-flex items-center justify-center">
                  <Phone size={16} className="mr-2" /> Call Us
                </a>
                <a href="mailto:kalrainnotech@gmail.com" className="bg-transparent border border-white text-white hover:bg-white hover:text-kalra-navy px-6 py-3 rounded-md transition-all inline-flex items-center justify-center">
                  <Mail size={16} className="mr-2" /> Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
