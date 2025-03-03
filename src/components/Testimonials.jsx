import { motion } from 'framer-motion';

function Testimonials() {
  const testimonials = [
    { 
      name: "Jane Doe", 
      role: "CEO, Tech Innovations", 
      quote: "WebSmart transformed our digital presence with a stunning website and app. Their team is professional, creative, and delivered beyond our expectations!" 
    },
    { 
      name: "John Smith", 
      role: "Marketing Director, Global Events", 
      quote: "The software solutions from WebSmart streamlined our operations, saving us hours of work. Highly recommend their expertise!" 
    },
    { 
      name: "Alice Johnson", 
      role: "Freelance Designer", 
      quote: "Their mobile app development team created an intuitive app that connected me with clients seamlessly. Amazing service!" 
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-shadow">What Our Clients Say</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Hear from our satisfied clients about their experiences with WebSmart’s digital solutions.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-lg italic mb-4 text-gray-200">“{testimonial.quote}”</p>
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-gray-400">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'var(--teal)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-semibold shadow-md hover:shadow-lg transition-all"
          onClick={() => window.location.href = '#contact'}
        >
          Contact Us Today
        </motion.button>
      </div>
    </section>
  );
}

export default Testimonials;