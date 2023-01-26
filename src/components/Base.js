import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ['Clasica', 'Delgada & Crujiente', 'Corteza Gruesa'];

  return (
    <motion.div className="base container"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ delay: .3, type: 'spring' }}
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
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring' }}
          // $ stiffness para tipo spring
        >
          <Link to="/toppings">
            <motion.button
              whileHover={{
                scale: 1.1,
                textShadow: '0 0 8px rgba(255, 255, 255, .8)',
                boxShadow: '0 0 8px rgba(255, 255, 255, 1)'
              }}
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
