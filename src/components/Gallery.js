import React from 'react';
const Gallery = () => {
  const projects = [
    { title: 'Project Alpha', category: 'Design', image: '/project-1.jpg' },
    { title: 'Project Beta', category: 'Development', image: '/project-2.jpg' },
    { title: 'Project Gamma', category: 'Branding', image: '/project-3.jpg' },
    { title: 'Project Delta', category: 'Strategy', image: '/project-4.jpg' },
    { title: 'Project Epsilon', category: 'Design', image: '/project-5.jpg' },
    { title: 'Project Zeta', category: 'Development', image: '/project-6.jpg' },
  ];
  return (
    <section id="work" className="py-32 px-6 lg:px-8 bg-gradient-to-b from-black to-zinc-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-lg text-white/50 max-w-xl">Explore our portfolio of exceptional projects delivered with precision and purpose.</p>
          </div>
          <a href="#contact" className="mt-6 md:mt-0 text-white/70 hover:text-white transition-colors">View all projects →</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="group relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-sm text-white/50 mb-2">{project.category}</p>
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Gallery;