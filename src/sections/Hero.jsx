import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-slate-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-blue-400 font-medium text-lg"
          >
            Hello, I'm
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl font-bold text-white mt-2 mb-4"
          >
            [Your Name]
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl md:text-5xl font-bold text-slate-400 mb-6"
          >
            I build things for the web.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0 mb-8"
          >
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
            >
              View Work <ArrowRight size={20} />
            </a>
            <a
              href="#"
              className="px-8 py-3 border border-slate-700 text-slate-300 rounded-lg font-medium hover:border-blue-400 hover:text-blue-400 transition-colors flex items-center justify-center gap-2"
            >
              Resume <Download size={20} />
            </a>
          </motion.div>
        </div>
        <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
           <motion.div
             initial={{ opacity: 0, scale: 0.8 }}
             animate={{ opacity: 1, scale: 1 }}
             transition={{ delay: 0.4, duration: 0.5 }}
             className="relative w-64 h-64 md:w-96 md:h-96"
           >
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-full h-full bg-slate-800 rounded-full border-2 border-slate-700 flex items-center justify-center overflow-hidden">
                 <span className="text-slate-600 text-xl">Your Image Here</span>
                 {/* <img src="/path/to/image.jpg" alt="Profile" className="w-full h-full object-cover" /> */}
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
