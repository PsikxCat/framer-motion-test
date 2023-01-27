import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

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

const Toppings = ({ addTopping, pizza }) => {
  let toppings = ['champiñones', 'pimientos', 'cebolla', 'aceitunas', 'extra queso', 'tomates'];

  return (
    <motion.div className="toppings container"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >

      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map(topping => {
          let spanClass = pizza.toppings.includes(topping) ? 'active' : '';
          return (
            <motion.li key={topping} onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.2, originX: 0,  color: '#f8e112' }}
              // animacion respecto al origen // // //
              transition={{ type: 'spring', stiffness: 200 }}
            >
              <span className={spanClass}>{ topping }</span>
            </motion.li>
          )
        })}
      </ul>

      <Link to="/order">
        <motion.button
          // whileHover={{
          //   scale: 1.1,
          //   textShadow: '0 0 8px rgba(255, 255, 255, .8)',
          //   boxShadow: '0 0 8px rgba(255, 255, 255, 1)'
          // }}
          variants={buttonVariants}
          whileHover='hover'
        >
          Order
        </motion.button>
      </Link>

    </motion.div>
  )
}

export default Toppings;
