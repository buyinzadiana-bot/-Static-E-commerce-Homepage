import React, { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

export default function Products() {
  const [filter, setFilter] = useState("All");

  function handleAdd(product) {
    console.log(`Added ${product.title} to cart`);
    showOverlay(`${product.title} added`);
  }

  function showOverlay(text) {
    const el = document.createElement("div");
    el.className = "fixed left-1/2 -translate-x-1/2 top-6 bg-green-600 text-white px-4 py-2 rounded shadow";
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];

  const visible = filter === "All" ? products : products.filter(p => p.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <label className="text-sm font-medium">Category:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          {categories.map(c => <option key={c} value={c}>{c}</option>)}
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {visible.map(p => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} />
        ))}
      </div>
    </section>
  );
}