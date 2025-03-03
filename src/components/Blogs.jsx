import { motion } from 'framer-motion';

function Blogs() {
  const blogPosts = [
    { 
      title: "Top 5 Trends in Web Development for 2025", 
      date: "March 1, 2025", 
      image: "/path-to-blog1-image.png", 
      excerpt: "Discover the latest trends shaping the future of web development and how WebSmart can help you stay ahead." 
    },
    { 
      title: "Building Scalable Mobile Apps: Best Practices", 
      date: "February 15, 2025", 
      image: "/path-to-blog2-image.png", 
      excerpt: "Learn how WebSmart’s mobile app development strategies ensure scalability and user engagement." 
    },
    { 
      title: "Why Custom Software Boosts Business Growth", 
      date: "January 20, 2025", 
      image: "/path-to-blog3-image.png", 
      excerpt: "Explore how tailored software solutions from WebSmart drive efficiency and innovation for businesses." 
    },
  ];

  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-12 text-shadow">Our Latest Insights</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-300">
          Stay updated with WebSmart’s blog for the latest in technology, design, and digital innovation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-400 text-sm mb-2">{post.date}</p>
              <p className="text-gray-200">{post.excerpt}</p>
              <motion.button
                whileHover={{ scale: 1.1, backgroundColor: 'var(--teal)' }}
                whileTap={{ scale: 0.95 }}
                className="mt-4 bg-yellow-500 text-black px-4 py-2 rounded-md text-md font-semibold shadow-md hover:shadow-lg transition-all"
                onClick={() => window.location.href = `/blog/${post.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                Read More
              </motion.button>
            </motion.div>
          ))}
        </div>
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: 'var(--teal)' }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-yellow-500 text-black px-8 py-4 rounded-lg text-xl font-semibold shadow-md hover:shadow-lg transition-all"
          onClick={() => window.location.href = '#contact'}
        >
          Contact Us for Expert Advice
        </motion.button>
      </div>
    </section>
  );
}

export default Blogs;