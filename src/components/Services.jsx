import { motion } from 'framer-motion';

function Services() {
  const services = [
    { title: "Website Development", desc: "We design and develop responsive, user-friendly websites that captivate your audience and drive results—beautifully crafted for any device.", icon: "🌐" },
    { title: "Software Solutions", desc: "Our custom software solutions streamline your operations, enhance productivity, and solve complex challenges with elegance and precision.", icon: "💻" },
    { title: "Mobile App Development", desc: "We create innovative mobile apps that deliver seamless user experiences, connecting you with your audience on the go—stylishly and intuitively.", icon: "📱" },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-shadow">Our Expertise, Your Success</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-700 cursor-pointer"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-300">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;