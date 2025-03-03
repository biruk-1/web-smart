import { motion } from 'framer-motion';
// import tech from '../assets/techIterface.png';
import Tech from '../assets/techInterface.png'; 


function About() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-900 to-purple-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 p-6"
        >
          <h2 className="text-4xl font-bold mb-6 text-shadow">Your Trusted Partner in Digital Transformation</h2>
          <p className="text-lg leading-relaxed">
            At [Your Company Name], we specialize in creating custom digital solutions that empower businesses and individuals with innovation. Our team of passionate developers, designers, and tech enthusiasts turns your vision into reality with years of expertise in web development, software engineering, and mobile app creation. Let’s build the future together—stunningly and strategically.
          </p>
        </motion.div>

        {/* Image/Animation */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <img src={Tech} alt="Tech Interface" className="rounded-full w-full max-w-md shadow-lg" />
        </motion.div>
      </div>
    </section>
  );
}

export default About;