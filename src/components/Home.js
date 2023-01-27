import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Loader from "./Loader";

const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: .7,
      duration: 3
      // duration solo para type 'tween' (default) // // //
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const buttonVariants = {
  visible: {
    scale: 1.05,
    y: -10,
    boxShadow: '0 3px 9px 1px rgba(255, 255, 255, .6)',
    transition: {
      delay: 1,
      type: 'spring',
      mass: 1.5
    }
  },
  hover: {
    // scale: [1, 1.2, 1.1, 1.2, 1.1],
    // // # keyframes
    scale: 1.1,
    textShadow: '0 1px 4px rgba(255, 255, 255, .8)',
    boxShadow: '0 6px 16px 2px rgba(255, 255, 255, .3)',
    transition: {
      yoyo: 4,
      // # yoyo es similar a los keyframes, con la limitacion de que solo ira del valor inicial al seteado las veces que se configure
      // type: 'spring', // @ no compatible con yoyo
      duration: .15
    }
  }
}

const Home = () => {
  return (
    <motion.div className="home container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      <h2>
        Bienvenido a Pizza Joint
      </h2>

      <Link to="/base">
        <motion.button
          variants={buttonVariants}
          animate='visible'
          whileHover= 'hover'
        >
          Crea Tu Pizza
        </motion.button>
      </Link>

      <Loader />

    </motion.div>
  )
}

export default Home;
