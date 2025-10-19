import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Contact form submitted", form);
    alert("Thanks — message logged to console (demo)");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-600 mb-6">Have a question? Send us a message and we’ll get back shortly.</p>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-sm grid gap-4">
        <label className="grid">
          <span className="text-sm font-medium">Name</span>
          <input name="name" value={form.name} onChange={handleChange} required className="mt-1 p-2 border rounded" />
        </label>

        <label className="grid">
          <span className="text-sm font-medium">Email</span>
          <input name="email" type="email" value={form.email} onChange={handleChange} required className="mt-1 p-2 border rounded" />
        </label>

        <label className="grid">
          <span className="text-sm font-medium">Message</span>
          <textarea name="message" value={form.message} onChange={handleChange} rows="5" required className="mt-1 p-2 border rounded" />
        </label>

        <div className="text-right">
          <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700">Send message</button>
        </div>
      </form>
    </section>
  );
}