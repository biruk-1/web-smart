import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="py-8 bg-black text-white text-center">
      <div className="container mx-auto px-4">
        <img src="/path-to-logo.png" alt="Your Company Logo" className="w-32 mb-4 mx-auto" />
        <p className="mb-4 text-gray-300">Email: contact@yourcompany.com | Phone: (123) 456-7890</p>
        <div className="flex justify-center gap-4 mb-4">
          <motion.a
            href="https://facebook.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <i className="fab fa-facebook"></i> {/* Use Font Awesome or similar */}
          </motion.a>
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <i className="fab fa-twitter"></i>
          </motion.a>
          <motion.a
            href="https://instagram.com"
            target="_blank"
            whileHover={{ scale: 1.1 }}
            className="text-2xl text-gray-300 hover:text-yellow-500 transition-colors"
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
        </div>
        <p className="text-gray-300">© 2025 [Your Company Name]. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;