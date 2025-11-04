import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
  return (
    <section
  className="relative bg-cover bg-center text-white py-24"
  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1600&auto=format&fit=crop')" }}
>
  <div className="absolute inset-0 bg-black/40"></div>
  <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2">
      <h1 className="text-3xl sm:text-5xl font-bold leading-tight">
        Elegant Women’s Fashion — curated for you
      </h1>
      <p className="mt-4 text-white/90 max-w-xl">
        Discover clothing, shoes, handbags and accessories from top designers and emerging brands.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          onClick={() => nav("/products")}
          className="px-4 py-2 bg-white text-pink-700 rounded shadow"
        >
          Shop Now
        </button>
        <a
          href="#featured"
          className="px-4 py-2 border border-white rounded text-white"
        >
          Featured
        </a>
      </div>
    </div>
    <div className="md:w-1/2 grid grid-cols-2 gap-3">
      <button onClick={() => nav('/products?tag=top')} className="bg-white/20 p-4 rounded text-left">✨ Top pick</button>
      <button onClick={() => nav('/products?tag=new')} className="bg-white/20 p-4 rounded text-left">🆕 New arrivals</button>
      <button onClick={() => nav('/products?tag=popular')} className="bg-white/20 p-4 rounded text-left">👜 Popular</button>
      <button onClick={() => nav('/')} className="bg-white/20 p-4 rounded text-left">🏠 Home</button>
    </div>
  </div>
</section>
  );
}
