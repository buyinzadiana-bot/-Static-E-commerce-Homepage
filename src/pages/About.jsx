import React from "react";

export default function About() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">About Book Boutique</h1>
      <p className="text-gray-700 mb-6">Book Boutique started as a small curated shop with the mission of making everyday essentials stylish and accessible. We focus on quality, sustainability and thoughtful design.</p>
      <h2 className="text-xl font-semibold mb-3">Why Choose Us</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>Curated selection — only the best products</li>
        <li>Fast & friendly customer service</li>
        <li>Ethically sourced materials</li>
        <li>Easy returns & transparency</li>
      </ul>
    </section>
  );
}