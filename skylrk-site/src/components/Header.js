import React, { useState } from 'react';
import { categories } from '../data/products';

const Header = ({ cartItemsCount, onCartClick, onCategorySelect, selectedCategory }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>      
      <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 bg-black/50 backdrop-blur-md">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="w-10 h-10 flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all"
          >
            <span className="text-xl">+</span>
          </button>
          <a href="/" className="text-2xl font-display tracking-widest">SKYLRK</a>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button className="text-sm hover:text-skylrk-blue-light transition-colors">
            [$ USD]
          </button>
          <button 
            onClick={onCartClick}
            className="relative text-sm hover:text-skylrk-blue-light transition-colors"
          >
            Cart ({cartItemsCount})
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-lg">
          <div className="h-full flex flex-col p-8">
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-display tracking-widest">SKYLRK</span>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="text-2xl hover:rotate-90 transition-transform"
              >
                ×
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-6">
                <li>
                  <button 
                    onClick={() => {
                      onCategorySelect(null);
                      setIsMenuOpen(false);
                    }}
                    className={`text-4xl font-display tracking-wide hover:text-skylrk-blue-light transition-colors ${!selectedCategory ? 'text-skylrk-blue-light' : ''}`}
                  >
                    Shop
                  </button>
                </li>
                <li>
                  <a href="#contact" className="text-4xl font-display tracking-wide hover:text-skylrk-blue-light transition-colors block">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#policies" className="text-4xl font-display tracking-wide hover:text-skylrk-blue-light transition-colors block">
                    Policies
                  </a>
                </li>
                <li>
                  <a href="#wallpapers" className="text-4xl font-display tracking-wide hover:text-skylrk-blue-light transition-colors block">
                    Wallpapers
                  </a>
                </li>
                <li>
                  <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-4xl font-display tracking-wide hover:text-skylrk-blue-light transition-colors block">
                    IG
                  </a>
                </li>
              </ul>
            </nav>

            {/* Category Filters */}
            <div className="mt-8 pt-8 border-t border-white/20">
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => (
                  <button
                    key={cat.name}
                    onClick={() => {
                      onCategorySelect(cat.filter);
                      setIsMenuOpen(false);
                    }}
                    className={`px-4 py-2 border border-white/30 text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all ${
                      selectedCategory === cat.filter ? 'bg-white text-black' : ''
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
