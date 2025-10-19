import React from "react";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const nav = useNavigate();
  return (
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Curated Finds — delivered to your door</h1>
          <p className="mt-4 text-indigo-100 max-w-xl">Minimal, modern goods picked weekly. Browse quality products across electronics, fashion and home essentials.</p>
          <div className="mt-6 flex gap-3">
            <button onClick={() => nav("/products")} className="px-4 py-2 bg-white text-indigo-700 rounded shadow">Shop Now</button>
            <a href="#featured" className="px-4 py-2 border border-white rounded text-white">Featured</a>
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-3">
          <div className="bg-white/20 p-4 rounded"> ✨ Top pick</div>
          <div className="bg-white/20 p-4 rounded"> 🎧 New arrivals</div>
          <div className="bg-white/20 p-4 rounded"> 👜 Popular</div>
          <div className="bg-white/20 p-4 rounded"> 🏠 Home</div>
        </div>
      </div>
    </section>
  );
}
