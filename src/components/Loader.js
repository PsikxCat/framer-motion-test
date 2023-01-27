import React from 'react'
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: { // transiciones particulares para x
        yoyo: Infinity,
        duration: .5
      },
      y: {
        yoyo: Infinity,
        duration: .25,
        ease: 'easeOut'
      }
    }
  }
}

function Loader(props) {
  return (
    <>
      <motion.div className="loader"
        variants={loaderVariants}
        animate='animationOne'
      >

      </motion.div>
    </>
  )
}

export default Loader
