import React from 'react';
import { Heart, Lightbulb, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Passion Meets Innovation
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-teal-600 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm Magnus W. Awaana, a digital marketing professional and aspiring entrepreneur with a passion 
              for building AI-powered business solutions, responsive web experiences, and results-driven campaigns.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey began with a simple question: <em>How can technology make businesses more human, 
              efficient, and profitable?</em> This curiosity led me to explore AI automation, modern web development, 
              and digital growth strategies — tools I now use to help startups and agencies transform ideas into 
              measurable success.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              I combine creativity with strategy, ensuring every project delivers both innovation and impact.
            </p>

            <div className="pt-6">
              <p className="text-2xl font-bold text-gray-900 mb-2">25+ Projects Completed</p>
              <p className="text-lg text-gray-600">Helping startups and agencies grow since 2022</p>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Heart className="h-8 w-8 text-red-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Passionate Problem Solver</h3>
              </div>
              <p className="text-gray-600">
                Every challenge is an opportunity to create something meaningful and impactful.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <Lightbulb className="h-8 w-8 text-yellow-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Innovation-Driven</h3>
              </div>
              <p className="text-gray-600">
                Constantly exploring emerging technologies to stay ahead of industry trends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <TrendingUp className="h-8 w-8 text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Results-Focused</h3>
              </div>
              <p className="text-gray-600">
                Success is measured by tangible business outcomes and client satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;