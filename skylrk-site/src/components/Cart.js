import React from 'react';

const Cart = ({ cart, total, onClose, onRemove, onUpdateQuantity }) => {
  return (
    <div className="fixed inset-0 z-50">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Drawer */}
      <div className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-skylrk-gray flex flex-col">
        <div className="p-4 border-b border-white/20 flex justify-between items-center">
          <h2 className="text-xl font-display tracking-wider">Cart</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center border border-white/30 hover:bg-white hover:text-black transition-all"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4">
          {cart.length === 0 ? (
            <div className="text-center py-12 text-white/60">
              Your cart is empty
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map(item => (
                <div key={item.id} className="flex gap-4 border-b border-white/10 pb-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="font-display text-sm mb-1">{item.name}</h3>
                    <p className="text-xs text-white/60 mb-2">
                      {item.color} / {item.size}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                        className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs hover:bg-white hover:text-black"
                      >
                        −
                      </button>
                      <span className="w-8 text-center text-sm">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 border border-white/30 flex items-center justify-center text-xs hover:bg-white hover:text-black"
                      >
                        +
                      </button>
                    </div>
                    
                    <p className="mt-2 text-sm">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                  
                  <button
                    onClick={() => onRemove(item.id)}
                    className="text-white/40 hover:text-white"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-4 border-t border-white/20">
            <div className="flex justify-between mb-4">
              <span className="font-display">Total</span>
              <span>${total.toFixed(2)} USD</span>
            </div>
            
            <button className="w-full py-4 bg-white text-black font-display tracking-wider hover:bg-skylrk-blue-light transition-colors">
              CHECKOUT
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
