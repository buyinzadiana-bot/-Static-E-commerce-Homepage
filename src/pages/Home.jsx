import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  function handleAdd(product) {
    console.log(`Added ${product.title} to cart`);
    toast("Added to cart");
  }

  function toast(msg) {
    const el = document.createElement("div");
    el.className = "fixed right-4 bottom-6 bg-indigo-600 text-white px-4 py-2 rounded shadow";
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1600);
  }

  // featured = first 4 products
  const featured = products.slice(0, 4);

  return (
    <div>
      <Hero />
      <section id="featured" className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {featured.map(p => (
            <ProductCard key={p.id} product={p} onAdd={handleAdd} />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button onClick={() => navigate("/products")} className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Browse all products</button>
        </div>
      </section>
    </div>
  );
}