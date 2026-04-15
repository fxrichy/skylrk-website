import React, { useState } from 'react';

const ProductDetail = ({ product, onClose, onAddToCart }) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[2] || 'M');
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || product.colors?.[0]);
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(product, selectedSize, selectedColor);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-skylrk-gray w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all"
        >
          ×
        </button>

        <div className="grid md:grid-cols-2">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-b from-skylrk-blue-dark/30 to-black/50">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="p-6 md:p-8 flex flex-col">
            <h2 className="text-3xl font-display tracking-wider mb-2">{product.name}</h2>
            <p className="text-2xl mb-6">${product.price.toFixed(2)} USD</p>

            {product.status === 'soldout' && (
              <div className="mb-4 text-sm tracking-wider border border-white/30 inline-block px-4 py-2">
                Sold out
              </div>
            )}

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-6">
                <label className="text-xs tracking-wider text-white/60 mb-3 block">
                  COLOR [{selectedColor}]
                </label>
                <div className="flex gap-3">
                  {product.colors.map(color => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 border text-xs tracking-wider transition-all ${
                        selectedColor === color 
                          ? 'bg-white text-black border-white' 
                          : 'border-white/30 hover:border-white'
                      }`}
                    >
                      {color}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-xs tracking-wider text-white/60">
                    SIZE [{selectedSize}]
                  </label>
                  <button className="text-xs underline text-white/60 hover:text-white">
                    View Sizing Info
                  </button>
                </div>
                <div className="grid grid-cols-6 gap-2">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 border text-sm transition-all ${
                        selectedSize === size 
                          ? 'bg-white text-black border-white' 
                          : 'border-white/30 hover:border-white'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            <div className="mb-6">
              <button
                onClick={() => setIsDescriptionOpen(!isDescriptionOpen)}
                className="flex items-center gap-2 text-sm mb-2"
              >
                <span>Description</span>
                <span className="text-lg">{isDescriptionOpen ? '−' : '+'}</span>
              </button>
              
              {isDescriptionOpen && (
                <p className="text-sm text-white/70 leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              disabled={product.status === 'soldout'}
              className={`w-full py-4 font-display tracking-wider transition-all ${
                product.status === 'soldout'
                  ? 'bg-white/20 text-white/40 cursor-not-allowed'
                  : 'bg-white text-black hover:bg-skylrk-blue-light'
              }`}
            >
              {product.status === 'soldout' ? 'SOLD OUT' : 'ADD TO CART'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
