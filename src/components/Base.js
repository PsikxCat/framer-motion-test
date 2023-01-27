import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

// nombres de variable y sus propiedades son random
// hidden corresponde a los valores en initial, visible a los valores en animate & transition
const containerVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: .3,
      type: 'spring'
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const nextVariants = {
  in: {
    x: '-100vw'
  },
  out: {
    x: 0,
    transition: {
      type: 'spring'
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
      duration: .1
    }
  }
}

const Base = ({ addBase, pizza }) => {
  const bases = ['Clasica', 'Delgada & Crujiente', 'Corteza Gruesa'];

  return (
    <motion.div className="base container"
      // initial={{ opacity: 0, x: '100vw' }}
      // animate={{ opacity: 1, x: 0 }}
      // transition={{ delay: .3, type: 'spring' }}
      variants={containerVariants}
      // @ particularmente util cuando muchas propiedades dentro de init o animate
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h3>Paso 1: Elige Tu Base</h3>

      <ul>
        {bases.map(base => {
          let spanClass = pizza.base === base ? 'active' : '';
          return (
            <motion.li key={base} onClick={() => addBase(base)}
              whileHover={{ scale: 1.2, originX: 0,  color: '#f8e112' }}
              // animacion respecto al origen // // //
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{ base }</span>
            </motion.li>
          )
        })}
      </ul>

      {pizza.base && (
        <motion.div className="next"
          // initial={{ x: '-100vw' }}
          // animate={{ x: 0 }}
          // transition={{ type: 'spring' }}
          // // $ stiffness para tipo spring
          variants={nextVariants}
          initial='in'
          animate='out'
        >
          <Link to="/toppings">
            <motion.button
              // whileHover={{
              //   scale: 1.1,
              //   textShadow: '0 0 8px rgba(255, 255, 255, .8)',
              //   boxShadow: '0 0 8px rgba(255, 255, 255, 1)'
              // }}
              variants={buttonVariants}
              initial='visible'
              whileHover='hover'
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
