import React, { useEffect } from 'react';
// import { Link } from "react-router-dom";
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

const Order = ({ pizza, setShowModal }) => {
  // const [showTitle, setShowTitle] = useState(true);
  // # test inicial de AnimatePresence
  // setTimeout(() => {
  //   setShowTitle(false);
  // }, 4000);

  // @ forma correcta de setTimeOut (limpia el timeOut)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true)
    }, 5000);
    return () => {
      clearTimeout(timer)
    }
  }, [setShowModal])

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

    </motion.div>
  )
}

export default Order;
