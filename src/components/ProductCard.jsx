import React from "react";

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden flex flex-col">
      <img
        src={product.img}
        alt={product.title}
        className="w-full h-48 object-cover"
        loading="lazy"
      />
      <div className="p-4 flex-1 flex flex-col">
        <h4 className="font-semibold text-lg">{product.title}</h4>
        <p className="text-sm text-gray-500 mb-2">{product.author} • {product.category}</p>
        <div className="mt-auto flex items-center justify-between">
          <div className="text-indigo-600 font-bold">${product.price.toFixed(2)}</div>
          <button
            onClick={() => onAdd(product)}
            className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
