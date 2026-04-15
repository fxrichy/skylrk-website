import React from 'react';
import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Github, href: '#', label: 'GitHub' },
  ];
  const footerLinks = [
    { title: 'Company', links: ['About', 'Careers', 'Press'] },
    { title: 'Product', links: ['Features', 'Pricing', 'Documentation'] },
    { title: 'Resources', links: ['Blog', 'Help Center', 'Community'] },
    { title: 'Legal', links: ['Privacy', 'Terms', 'License'] },
  ];
  return (
    <footer className="py-16 px-6 lg:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#home" className="inline-block text-2xl font-bold tracking-tighter text-white mb-4">SKYLRK</a>
            <p className="text-white/50 mb-6 max-w-sm">Elevating experiences through exceptional design and premium quality.</p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href} className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors" aria-label={social.label}>
                  <social.icon size={18} className="text-white/70" />
                </a>
              ))}
            </div>
          </div>
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold text-white mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="text-white/50 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between">
          <p className="text-white/30 text-sm">© {currentYear} SKYLRK. All rights reserved.</p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-white/30 hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-sm text-white/30 hover:text-white/50 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;