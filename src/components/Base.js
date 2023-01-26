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
            <li key={base} onClick={() => addBase(base)}>
              <span className={spanClass}>{ base }</span>
            </li>
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
            <button>Next</button>
          </Link>
        </motion.div>
      )}

    </motion.div>
  )
}

export default Base;
