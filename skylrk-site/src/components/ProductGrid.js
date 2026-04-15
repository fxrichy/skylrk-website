import React, { useState } from 'react';

const ProductCard = ({ product, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative cursor-pointer group ${
        product.status === 'soldout' ? 'opacity-60' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onClick(product)}
    >
      {/* Product Image */}
      <div className="aspect-square overflow-hidden bg-gradient-to-b from-skylrk-blue-dark/50 to-black/50">
        <img
          src={isHovered && product.hoverImage ? product.hoverImage : product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Sold Out Badge */}
        {product.status === 'soldout' && (
          <div className="absolute bottom-4 left-4 text-xs tracking-wider border border-white/30 px-3 py-1">
            Sold out
          </div>
        )}
        
        {/* View Product Label */}
        {!isHovered && product.status !== 'soldout' && (
          <div className="absolute bottom-4 left-4 text-xs tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
            View {product.name}
          </div>
        )}
      </div>
    </div>
  );
};

const ProductGrid = ({ products, selectedCategory, onProductClick }) => {
  const filteredProducts = selectedCategory 
    ? products.filter(p => p.category === selectedCategory)
    : products;

  // Split products into two sections (blue section and black section)
  const topSection = filteredProducts.slice(0, Math.ceil(filteredProducts.length / 2));
  const bottomSection = filteredProducts.slice(Math.ceil(filteredProducts.length / 2));

  return (
    <>
      {/* Blue Section */}
      <section className="px-4 md:px-8 py-8 relative overflow-hidden">
        {/* Background grain texture */}
        <div className="absolute inset-0 opacity-20 animate-grain" 
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {topSection.map((product, index) => (
            <div 
              key={product.id}
              className={`${
                index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index % 7 === 3 ? 'md:translate-y-8' : ''} ${
                index % 11 === 2 ? 'animate-float' : index % 11 === 7 ? 'animate-float-delayed' : ''
              }`}
            >
              <ProductCard product={product} onClick={onProductClick} />
            </div>
          ))}
        </div>
      </section>

      {/* Black Section */}
      <section className="px-4 md:px-8 py-8 bg-black">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
          {bottomSection.map((product, index) => (
            <div 
              key={product.id}
              className={`${
                index % 5 === 2 ? 'md:col-span-2 md:row-span-2' : ''
              } ${index % 7 === 1 ? 'md:translate-y-8' : ''}`}
            >
              <ProductCard product={product} onClick={onProductClick} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProductGrid;
