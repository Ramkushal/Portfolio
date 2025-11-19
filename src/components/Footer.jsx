import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-slate-400 text-sm">
          © {new Date().getFullYear()} Portfolio. All rights reserved.
        </div>
        <div className="flex items-center space-x-6">
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
