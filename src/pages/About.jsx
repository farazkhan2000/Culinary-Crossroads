import { Link } from 'react-router-dom';

const About = () => {
  const teamMembers = [
    {
      name: "Faraz Khan",
      department: "Information Systems",
      country: "Paksitan",
      languages: ["Pushto", "English", "Urdu", "Finnish"],
      avatar: "👨‍💻"
    },
    {
      name: "Wei Chen",
      department: "Computer Science",
      country: "China",
      languages: ["Mandarin", "English", "Japanese"],
      avatar: "👨‍💻"
    },
    {
      name: "Fatima Al-Mansoori",
      department: "Linguistics",
      country: "UAE",
      languages: ["Arabic", "English", "French", "Urdu"],
      avatar: "👩‍🏫"
    },
    {
      name: "James O'Connell",
      department: "Business Administration", 
      country: "Ireland",
      languages: ["English", "Irish Gaelic", "German"],
      avatar: "👨‍💼"
    },
    {
      name: "Chloe Williams",
      department: "Human-Computer Interaction",
      country: "USA",
      languages: ["English", "Spanish", "ASL"],
      avatar: "👩‍🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gray-900 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About CulinaryCrossroads
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A multicultural project created by students bridging technology, culture, and culinary traditions
          </p>
        </div>
      </section>

      {/* Project Story */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              CulinaryCrossroads was born from a collaboration between five Master's students from different departments 
              at the University of Jyväskylä. United by our passion for cultural exchange and technology, we set out to 
              create a platform that celebrates global culinary diversity.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              As a multicultural team speaking 12+ languages, we understand the power of food as a universal language. 
              Our project combines technical expertise with cultural research to bring authentic recipes and stories 
              from around the world to your kitchen.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Multicultural Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Five students from different departments, united by a shared vision of cultural connection through food
            </p>
          </div>

          {/* Team Members - Flex Layout */}
          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-6 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex-1 min-w-[300px] max-w-[400px] bg-white rounded-2xl p-6 border border-gray-200 hover:border-lime-400 transition duration-300">
                <div className="text-center mb-4">
                  <div className="text-4xl mb-3">{member.avatar}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 mb-2">
                    <span>🌎</span>
                    <span>{member.country}</span>
                  </div>
                  <p className="text-lime-600 font-semibold text-sm mb-2">{member.role}</p>
                  <p className="text-gray-500 text-sm mb-3">{member.department} Department</p>
                </div>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-gray-700 mb-1">Languages:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.languages.map((language, langIndex) => (
                        <span 
                          key={langIndex}
                          className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 bg-lime-50 rounded-2xl p-6 border border-lime-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed">
                To bridge cultural gaps through the universal language of food. We believe that sharing recipes 
                and culinary stories fosters understanding and appreciation between different cultures and communities.
              </p>
            </div>

            <div className="flex-1 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed">
                A world where everyone can explore and appreciate global culinary traditions, preserving cultural 
                heritage while building connections across borders through shared cooking experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Join Our Culinary Journey
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Explore authentic recipes, learn about different cultures, and become part of our global cooking community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/recipes"
              className="bg-lime-600 text-white px-8 py-3 rounded-xl font-semibold hover:bg-lime-500 transition duration-300"
            >
              Explore Recipes
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Share Your Recipe
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;