import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser'; // Import EmailJS

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // For success/error messages

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus('error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_eqsx28h', // Replace with your actual Service ID (e.g., 'service_eqsx28h')
        'template_7nkl8um', // Replace with your actual Template ID (e.g., 'template_7nkl8um')
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'Birukchali86@gmail.com', // Your email (replace if needed)
        },
        '7tddNPOadYV9KigoR' // Replace with your actual User ID (e.g., 'user_1234567890')
      );

      console.log('EmailJS Response:', response);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form
    } catch (error) {
      console.error('EmailJS Error:', error.text || error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
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
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </motion.button>
          {submitStatus === 'success' && (
            <p className="mt-4 text-green-500">Thank you! Your message has been sent successfully. We’ll get back to you soon.</p>
          )}
          {submitStatus === 'error' && (
            <p className="mt-4 text-red-500">Oops! Something went wrong. Please try again or contact us directly.</p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;