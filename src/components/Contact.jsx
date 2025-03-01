import { useState } from 'react';
import { motion } from 'framer-motion';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for reaching out! We’ll get back to you soon.');
  };

  return (
    <section className="py-16 bg-gradient-to-b from-blue-900 to-purple-900 text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-8 text-shadow">Let’s Connect—Transform Your Vision Today</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Fill out the form below, and our team will get back to you within 24 hours to discuss your digital needs.
        </p>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-white text-black placeholder-gray-500"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-white text-black placeholder-gray-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 mb-4 rounded-lg bg-white text-black placeholder-gray-500 h-32"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, backgroundColor: 'var(--teal)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-black text-white p-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Send
          </motion.button>
        </form>
      </div>
    </section>
  );
}

export default Contact;