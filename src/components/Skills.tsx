import React from 'react';
import { Brain, Code, BarChart3, Bot, Smartphone, Target } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI-Powered Solutions",
      skills: ["Workflow automation", "AI chatbots", "Data-driven insights", "Predictive analytics"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Web Development", 
      skills: ["Responsive design", "React & Tailwind CSS", "SEO optimization", "Fast-loading web apps"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-green-600" />,
      title: "Digital Marketing",
      skills: ["Paid campaigns", "Content strategy", "Email funnels", "Social media growth", "Conversion optimization"],
      gradient: "from-green-500 to-teal-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What I Bring to the Table
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  {category.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.title}
                </h3>
                
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600">
                      <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${category.gradient} mr-3 flex-shrink-0`}></div>
                      <span className="text-sm">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Icons */}
        <div className="mt-16 grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60">
          <div className="flex flex-col items-center">
            <Bot className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">AI Automation</span>
          </div>
          <div className="flex flex-col items-center">
            <Smartphone className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">Mobile First</span>
          </div>
          <div className="flex flex-col items-center">
            <Target className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">Performance</span>
          </div>
          <div className="flex flex-col items-center">
            <BarChart3 className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">Analytics</span>
          </div>
          <div className="flex flex-col items-center">
            <Code className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">Clean Code</span>
          </div>
          <div className="flex flex-col items-center">
            <Brain className="h-8 w-8 text-gray-400 mb-2" />
            <span className="text-xs text-gray-500">Strategy</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;