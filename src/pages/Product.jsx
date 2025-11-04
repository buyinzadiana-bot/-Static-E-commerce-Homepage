import React, { useEffect, useMemo, useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
import { useLocation, useNavigate } from "react-router-dom";

export default function Products() {
  const [filter, setFilter] = useState("All");
  const location = useLocation();
  const navigate = useNavigate();

  // Read tag from query (?tag=top|new|popular)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tag = params.get("tag");
    if (tag) setFilter(tag);
  }, [location.search]);

  function handleAdd(product) {
    // naive localStorage cart
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    const existing = cart.find((i) => i.id === product.id);
    if (existing) existing.qty += 1; else cart.push({ ...product, qty: 1 });
    localStorage.setItem("cart", JSON.stringify(cart));
    showOverlay(`${product.title} added to cart`);
  }

  function showOverlay(text) {
    const el = document.createElement("div");
    el.className = "fixed left-1/2 -translate-x-1/2 top-6 bg-pink-600 text-white px-4 py-2 rounded shadow";
    el.textContent = text;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 1500);
  }

  const categories = useMemo(() => [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ], []);

  const filteredByCategory = filter === "All"
    ? products
    : ["top", "new", "popular"].includes(filter)
      ? products.filter((p) => p.tags?.includes(filter))
      : products.filter((p) => p.category === filter);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <div className="flex items-center justify-between gap-4 mb-4 flex-wrap">
        <h1 className="text-3xl font-bold">Products</h1>
        <button onClick={() => navigate("/cart")} className="px-3 py-2 bg-pink-600 text-white rounded">Go to Cart</button>
      </div>

      <div className="flex items-center gap-4 mb-6 flex-wrap">
        <label className="text-sm font-medium">Filter:</label>
        <select value={filter} onChange={(e) => setFilter(e.target.value)} className="p-2 border rounded">
          {["All", "top", "new", "popular", ...categories.filter(c=>c!=="All")] .map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        <div className="flex items-center gap-2 text-sm">
          <button onClick={() => setFilter("top")} className={`px-2 py-1 rounded border ${filter==='top'?'bg-pink-600 text-white':'hover:bg-gray-50'}`}>Top pick</button>
          <button onClick={() => setFilter("new")} className={`px-2 py-1 rounded border ${filter==='new'?'bg-pink-600 text-white':'hover:bg-gray-50'}`}>New arrivals</button>
          <button onClick={() => setFilter("popular")} className={`px-2 py-1 rounded border ${filter==='popular'?'bg-pink-600 text-white':'hover:bg-gray-50'}`}>Popular</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredByCategory.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={handleAdd} />)
        )}
      </div>
    </section>
  );
}