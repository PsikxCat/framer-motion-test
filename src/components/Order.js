import React from 'react';
import { Link } from "react-router-dom";
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
      type: 'spring',
      stiffness: 200,
      mass: 3,
      damping: 40,
      when: 'beforeChildren',
      // & when da el orden en el que se animara, en este caso el contenedor se animara y luego se animaran sus hijos
      // ! tambien se tiene la opcion 'afterChildren'
      staggerChildren: 1
      // & profundizar staggerChildren !!
    }
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  }
}

const childrenVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: .8,
  }
}

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: '100vw',
    y: 30
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 30,
    scale: 1.05,
    boxShadow: '0 3px 9px 1px rgba(255, 255, 255, .6)',
    transition: {
      delay: 2,
      mass: 1.5
    }
  },
  hover: {
    scale: 1.1,
    textShadow: '0 1px 4px rgba(255, 255, 255, .8)',
    boxShadow: '0 6px 16px 2px rgba(255, 255, 255, .3)',
    transition: {
      yoyo: 4,
      duration: .1
    }
  }
}


const Order = ({ pizza }) => {
  // const [showTitle, setShowTitle] = useState(true);

  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000);

  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
    >
      {/* // # forma de animar la salida de elementos que se borran del DOM */}
      {/* <AnimatePresence>
        {showTitle && (
          <motion.h2
            exit={{ y: -1000 }}
          >
          &#10003; Gracias por tu compra &#9787;
        </motion.h2>
        )}
      </AnimatePresence> */}

      <h2>&#10003; Gracias por tu compra &#9787;</h2>

      <motion.p
        variants={childrenVariants}
        // @ se supone que los nombres de las propiedades del objeto containerVariants se propagan a los hijos de la etiqueta container, por lo que no es necesario setear las propiedades init y animate
      >
        Ordenaste una pizza {pizza.base} con:
      </motion.p>

      <motion.div
        variants={childrenVariants}
      >
        { pizza.toppings.map(topping =>
          <div key={topping}>{topping}</div>) }
      </motion.div>

      <Link to="/home">
        <motion.button
          variants={buttonVariants}
          initial=''
          whileHover='hover'
        >
          Volver al inicio
        </motion.button>
      </Link>
    </motion.div>
  )
}

export default Order;
