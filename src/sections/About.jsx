import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout, Server } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'Frontend Development', icon: <Layout className="w-8 h-8 text-blue-400" />, description: 'React, Vue, Tailwind CSS, HTML5, CSS3' },
    { name: 'Backend Development', icon: <Server className="w-8 h-8 text-blue-400" />, description: 'Node.js, Express, Python, Django' },
    { name: 'Database Management', icon: <Database className="w-8 h-8 text-blue-400" />, description: 'PostgreSQL, MongoDB, MySQL' },
    { name: 'Clean Code', icon: <Code className="w-8 h-8 text-blue-400" />, description: 'Git, Testing, CI/CD, Best Practices' },
  ];

  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I am a passionate developer with a strong foundation in web technologies. I love creating efficient, scalable, and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-slate-900 p-6 rounded-xl hover:shadow-xl transition-shadow border border-slate-800 hover:border-blue-500/30 group"
            >
              <div className="mb-4 p-3 bg-slate-800 rounded-lg w-fit group-hover:bg-blue-500/10 transition-colors">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
              <p className="text-slate-400 text-sm">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
