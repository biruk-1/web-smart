import { motion } from 'framer-motion';
// import logo from '../assets/logo.png'; 

function Hero() {
  return (
    <section className="h-screen bg-gradient-to-b from-darkBlue to-black flex items-center justify-center text-white relative overflow-hidden">
      {/* Background Animation (e.g., particles or illustration) */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-[url('/path-to-illustration')] bg-cover bg-center"
      />

      {/* Content */}
      <div className="text-center z-10 max-w-4xl px-4">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl font-bold mb-6 text-shadow-lg"
        >
          Transform Your Ideas into Digital Brilliance
        </motion.h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-shadow">
          We craft cutting-edge websites, robust software, and innovative mobile apps to drive your business forward—beautifully and efficiently.
        </p>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'var(--teal)' }}
          whileTap={{ scale: 0.95 }}
          className="bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-semibold shadow-md hover:shadow-lg transition-all"
          onClick={() => window.location.href = '#contact'}
        >
          Get Started Today
        </motion.button>
      </div>

      {/* Logo in top-left corner */}
      {/* <img src={logo} alt="Your Company Logo" className="absolute top-4 left-4 w-32 h-auto" /> */}
    </section>
  );
}

export default Hero;