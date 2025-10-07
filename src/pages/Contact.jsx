import { useState } from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    recipeSubmission: false
  });

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "contact@culinarycrossroads.com",
      description: "Send us your questions or recipe ideas"
    },
    {
      icon: "🏫",
      title: "University",
      details: "University of Jyväskylä",
      description: "Information Systems Department"
    },
    {
      icon: "👥",
      title: "Project Team",
      details: "5 Student Team",
      description: "Multicultural collaboration"
    }
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
      recipeSubmission: false
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have questions, want to contribute, or share your culinary stories? We'd love to hear from you.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Let's Connect</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our multicultural team is here to help you explore global cuisines, 
              share your family recipes, or answer any questions about our project.
            </p>

            {/* Contact Methods */}
            <div className="space-y-6 mb-8">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lime-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl">{method.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg mb-1">{method.title}</h3>
                    <p className="text-lime-600 font-medium mb-1">{method.details}</p>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Project Info */}
            <div className="bg-gray-100 rounded-2xl p-6">
              <h3 className="font-semibold text-gray-800 mb-3">About Our Project</h3>
              <p className="text-gray-600 text-sm mb-4">
                CulinaryCrossroads is a student-led initiative from the University of Jyväskylä, 
                created by a diverse team of five Master's students passionate about cultural exchange through food.
              </p>
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <span>🌍</span>
                <span>Multicultural Team</span>
                <span>•</span>
                <span>🎓</span>
                <span>Student Project</span>
                <span>•</span>
                <span>👥</span>
                <span>5 Members</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200"
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200"
                  >
                    <option value="">Select a subject</option>
                    <option value="recipe-submission">Recipe Submission</option>
                    <option value="general-question">General Question</option>
                    <option value="cultural-inquiry">Cultural Information</option>
                    <option value="technical-support">Technical Support</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-lime-500 focus:border-lime-500 transition duration-200 resize-vertical"
                    placeholder="Tell us about your recipe idea, question, or collaboration proposal..."
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="recipeSubmission"
                    name="recipeSubmission"
                    checked={formData.recipeSubmission}
                    onChange={handleChange}
                    className="w-4 h-4 text-lime-600 border-gray-300 rounded focus:ring-lime-500"
                  />
                  <label htmlFor="recipeSubmission" className="ml-3 text-sm text-gray-700">
                    I'd like to submit a family recipe for consideration
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-lime-600 text-white py-4 rounded-xl font-semibold hover:bg-lime-500 transition duration-300 shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>

                <p className="text-gray-500 text-sm text-center">
                  We typically respond within 24-48 hours
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CTA */}
      <section className="bg-white border-t border-gray-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Quick Questions?
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Check out our FAQ section for quick answers to common questions about recipes, cultural stories, and our project.
          </p>
          <Link
            to="/"
            className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-500 transition duration-200 text-lg"
          >
            <span>Visit FAQ Section</span>
            <span className="ml-2">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Contact;