import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const backdropVariants = {
  visible: {
    opacity: 1
  },
  hidden: {
    opacity: 0
  }
}

const modalVariants = {
  hidden: {
    opacity: 0,
    y: '-100vh'
  },
  visible: {
    opacity: 1,
    y: 310,
    boxShadow: '0 3px 9px 1px rgba(255, 255, 255, .3)',
    transition: {
      delay: .5,
      type: 'spring',
      mass: .5,
      stiffness: 200,
    }
  }
}

function Modal({ showModal, setShowModal }) {
  return (
    <AnimatePresence mode='wait' >
      { showModal && (
        <motion.section className="backdrop"
          variants={backdropVariants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          >
          {/* // representa el fade del fondo al abrir el modal */}

          <motion.div className="modal"
            variants={modalVariants}
            // initial='hidden' // $ por propagation del padre
            // animate='visible'
          >
            <p>Deseas ordenar otra pizza?</p>

            <Link to="/">
                {/* // sacar el modulo requiere tanto setear el setShowModal como setear el exit del padre (backdrop) */}
                {/* de cualquier modo se cambia por onExitComplete en App */}
              {/* <button onClick={() => setShowModal(false)}> */}
              <button>
                Volver al inicio
              </button>
            </Link>
          </motion.div>
        </motion.section>
      )}

    </AnimatePresence>
  )
}

export default Modal
