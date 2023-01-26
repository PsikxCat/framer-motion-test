import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div className="home container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: .5, duration: 2 }}
      // duration solo para type 'tween' (default) // // //
    >
      <h2>
        Bienvenido a Pizza Joint
      </h2>

      <Link to="/base">
        <motion.button
          whileHover={{
            scale: 1.1,
            textShadow: '0 0 8px rgba(255, 255, 255, .8)',
            boxShadow: '0 0 8px rgba(255, 255, 255, 1)'
          }}
        >
          Crea Tu Pizza
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Home;
