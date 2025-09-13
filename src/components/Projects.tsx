import React from 'react';
import { ExternalLink, TrendingUp, Users, Zap } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "AI-Powered Lead Generation",
      problem: "A startup was struggling to convert website traffic into qualified leads.",
      approach: "Implemented an AI chatbot + automated lead scoring system.",
      impact: "Lead conversions grew by 42% in three months, reducing cost-per-lead by 25%.",
      metrics: [
        { label: "Conversion Increase", value: "42%" },
        { label: "Cost Reduction", value: "25%" },
        { label: "Time Saved", value: "15hrs/week" }
      ],
      icon: <Users className="h-6 w-6" />,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Website Performance Revamp",
      problem: "A digital agency's site was slow and not mobile-optimized.",
      approach: "Rebuilt site using React + Tailwind, optimized images, improved SEO.",
      impact: "Bounce rate dropped by 30%, average session time increased by 1.8 minutes, organic traffic rose 55%.",
      metrics: [
        { label: "Bounce Rate Drop", value: "30%" },
        { label: "Session Time", value: "+1.8min" },
        { label: "Organic Traffic", value: "55%" }
      ],
      icon: <Zap className="h-6 w-6" />,
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Full-Funnel Marketing Campaign",
      problem: "A fashion-tech brand needed visibility for a new product launch.",
      approach: "Designed a cross-channel campaign using paid ads, email automation, and influencer outreach.",
      impact: "Achieved 3x ROI in six weeks and grew brand's social following by 20%.",
      metrics: [
        { label: "ROI", value: "3x" },
        { label: "Timeline", value: "6 weeks" },
        { label: "Social Growth", value: "20%" }
      ],
      icon: <TrendingUp className="h-6 w-6" />,
      gradient: "from-orange-500 to-red-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Case Studies That Deliver Results
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real projects. Real impact. See how I've helped businesses transform challenges into measurable success.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${project.gradient} text-white mr-4 group-hover:scale-110 transition-transform duration-300`}>
                        {project.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Problem:</h4>
                        <p className="text-gray-600">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Approach:</h4>
                        <p className="text-gray-600">{project.approach}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Impact:</h4>
                        <p className="text-gray-600">{project.impact}</p>
                      </div>
                    </div>

                    <button className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                      View Full Case Study
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </button>
                  </div>

                  <div className="lg:w-80">
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Key Metrics</h4>
                      <div className="space-y-4">
                        {project.metrics.map((metric, metricIndex) => (
                          <div key={metricIndex} className="flex justify-between items-center">
                            <span className="text-gray-600 text-sm">{metric.label}</span>
                            <span className={`font-bold text-xl bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                              {metric.value}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Ready to see similar results for your business?
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105">
            Let's Discuss Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;