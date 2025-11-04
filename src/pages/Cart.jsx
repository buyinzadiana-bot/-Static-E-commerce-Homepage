import React, { useEffect, useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart") || "[]");
    setItems(cart);
  }, []);

  function updateQty(id, delta) {
    const next = items.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i);
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
  }

  function removeItem(id) {
    const next = items.filter(i => i.id !== id);
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
  }

  const subtotal = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      {items.length === 0 ? (
        <p className="text-gray-600">Your cart is empty. Add some items from the products page.</p>
      ) : (
        <div className="grid gap-4">
          {items.map((i) => (
            <div key={i.id} className="flex items-center gap-4 p-4 bg-white rounded shadow-sm">
              <img src={i.img} alt={i.title} className="w-20 h-20 object-cover rounded" />
              <div className="flex-1">
                <div className="font-medium">{i.title}</div>
                <div className="text-sm text-gray-500">{i.category} • {i.author}</div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQty(i.id, -1)} className="px-2 py-1 border rounded">-</button>
                <div className="w-8 text-center">{i.qty}</div>
                <button onClick={() => updateQty(i.id, 1)} className="px-2 py-1 border rounded">+</button>
              </div>
              <div className="w-24 text-right font-semibold">${(i.price * i.qty).toFixed(2)}</div>
              <button onClick={() => removeItem(i.id)} className="text-sm text-red-600 hover:underline">Remove</button>
            </div>
          ))}

          <div className="flex justify-end items-center gap-6 mt-4">
            <div className="text-xl font-bold">Subtotal: ${subtotal.toFixed(2)}</div>
            <button className="px-4 py-2 bg-pink-600 text-white rounded">Checkout</button>
          </div>
        </div>
      )}
    </section>
  );
}
