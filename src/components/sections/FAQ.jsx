import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const faqs = [
    {
      question: "Are the recipes authentic?",
      answer: "Yes, all recipes are researched and verified with cultural experts and traditional sources."
    },
    {
      question: "Can I substitute ingredients?",
      answer: "Yes, we provide substitution options while maintaining cultural authenticity."
    },
    {
      question: "How are cultural stories verified?",
      answer: "Stories are researched by culinary experts and verified with local cultural organizations."
    },
    {
      question: "Are recipes beginner-friendly?",
      answer: "Yes, we categorize by difficulty and provide step-by-step guidance for all levels."
    },
    {
      question: "Can I add my recipe to your website?",
      answer: "Yes! We welcome authentic family recipes. Contact us to share your cultural dishes."
    },
    {
      question: "Do you offer cooking tips?",
      answer: "Yes, each recipe includes pro tips and traditional cooking techniques."
    },
    {
      question: "Are ingredients available worldwide?",
      answer: "We suggest substitutions for hard-to-find ingredients while keeping dishes authentic."
    },
    {
      question: "How often are new recipes added?",
      answer: "We add new recipes weekly, focusing on seasonal and cultural celebrations."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-lime-600 font-semibold text-sm uppercase tracking-wide mb-2 block">
            FAQ
          </span>
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            Questions & Answers
          </h2>
        </div>

        {/* FAQ Items - 2 Columns with different styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group"
            >
              <button
                className="w-full text-left p-4 rounded-lg bg-gray-50 hover:bg-lime-50 transition duration-200 border-l-4 border-transparent hover:border-lime-500 group-hover:shadow-sm"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <div className="flex items-start justify-between">
                  <h3 className="text-base font-semibold text-gray-800 pr-4 flex-1">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 mt-1">
                    <div className={`w-4 h-4 transform transition duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}>
                      <svg className="w-4 h-4 text-lime-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className={`overflow-hidden transition-all duration-200 ${
                  openIndex === index ? 'max-h-20 mt-3' : 'max-h-0'
                }`}>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Contact */}
        <div className="text-center mt-12 pt-8 border-t border-gray-100">
          <p className="text-gray-600 text-sm mb-3">
            Have a different question?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-lime-600 font-semibold hover:text-lime-500 transition duration-200 text-sm"
          >
            <span>Get in touch</span>
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;