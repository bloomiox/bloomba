import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

const CareersPage = () => {
  const salesPositions: JobPosition[] = [
    {
      id: 1,
      title: "Senior Sales Executive",
      location: "Sarajevo, Bosnia",
      type: "Full-time",
      department: "Sales",
      description: "We're looking for an experienced Sales Executive to join our team and drive business growth through new client acquisition and relationship management."
    },
    {
      id: 2,
      title: "Sales Development Representative",
      location: "Remote",
      type: "Full-time",
      department: "Sales",
      description: "Join our sales team as an SDR and help identify and qualify new business opportunities while developing your sales career."
    },
    {
      id: 3,
      title: "Account Manager",
      location: "Rorschach, Switzerland",
      type: "Full-time",
      department: "Sales",
      description: "We're seeking an Account Manager to maintain and grow relationships with our existing client base while identifying expansion opportunities."
    }
  ];

  return (
    <div className="pt-28 pb-20 bg-[#0d1219] min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Be part of a dynamic team driving innovation and excellence in digital transformation.
          </p>
        </div>

        {/* Team Overview Section */}
        <div className="bg-[#121826] rounded-lg p-8 md:p-12 shadow-lg border border-blue-900/10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Our Team</h2>
          <p className="text-gray-300 mb-6">
            At Bloom, we believe in fostering a culture of innovation, collaboration, and continuous learning. Our team consists of passionate professionals who are dedicated to delivering excellence and driving meaningful impact for our clients.
          </p>
          <p className="text-gray-300">
            We offer competitive compensation, comprehensive benefits, and opportunities for professional growth and development. Join us in shaping the future of digital transformation.
          </p>
        </div>

        {/* Open Positions Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">Open Sales Positions</h2>
          <div className="grid gap-6">
            {salesPositions.map((position) => (
              <div 
                key={position.id}
                className="bg-[#121826] rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-blue-900/10 hover:border-blue-900/30"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2 text-blue-400" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-2 text-blue-400" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase size={16} className="mr-2 text-blue-400" />
                        {position.department}
                      </div>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${position.id}`}
                    className="mt-4 md:mt-0 inline-flex items-center bg-blue-800 hover:bg-blue-700 text-white py-2 px-6 rounded-sm font-medium transition-all duration-300 group"
                  >
                    <span>Apply Now</span>
                    <ArrowRight 
                      size={16} 
                      className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    />
                  </Link>
                </div>
                <p className="text-gray-300">{position.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-[#121826] rounded-lg p-8 md:p-12 shadow-lg border border-blue-900/10">
          <h2 className="text-2xl font-bold text-white mb-8">Why Join Bloom?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Professional Growth",
                description: "Continuous learning opportunities and career development paths"
              },
              {
                title: "Work-Life Balance",
                description: "Flexible working hours and remote work options"
              },
              {
                title: "Competitive Package",
                description: "Attractive salary and comprehensive benefits"
              },
              {
                title: "Global Impact",
                description: "Work on projects that make a difference worldwide"
              },
              {
                title: "Innovation Culture",
                description: "Be part of a team that embraces new ideas and technologies"
              },
              {
                title: "Collaborative Environment",
                description: "Work alongside talented professionals in a supportive setting"
              }
            ].map((benefit, index) => (
              <div key={index} className="p-6 bg-[#0d1219] rounded-lg border border-blue-900/20">
                <h3 className="text-lg font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;