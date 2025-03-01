import { motion } from 'framer-motion';

function Work() {
  const projects = [
    { title: "Casting Website", image: "/path-to-casting-image.png" },
    { title: "Event Organizers App", image: "/path-to-event-app-image.png" },
    { title: "Personal Portfolios", image: "/path-to-portfolio-image.png" },
    { title: "Study Abroad Consultancy", image: "/path-to-study-image.png" },
    { title: "Admin Dashboards", image: "/path-to-dashboard-image.png" },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-shadow">Our Work Speaks for Itself</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          At [Your Company Name], we take pride in delivering exceptional results for our clients. Explore a few examples of the projects we’ve worked on and the impact they’ve made.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-64 object-cover" />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                <span className="text-white text-xl font-semibold">{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Work;