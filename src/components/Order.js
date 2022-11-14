import React, { useState } from 'react';
import {motion} from 'framer-motion';

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
      mass: 0.4,
      damping: 8,
      // delay:0.5,
      when: "beforeChildren", // This firsts needs to be animated and then the children go,
      staggerChildren: 0.4
    }
  }
}

const childVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    }
}

const Order = ({ pizza }) => {
  return (
    <motion.div className="container order"
      variants={containerVariants}
      initial="hidden" //Initial animation
      animate="visible" //After we arrive to the animation
    >
      <h2>Thank you for your order :)</h2>
      {/* We do not need to declare them becuase they are being propragrated from the parent. 
      They have the same parent.  */}
      <motion.p variants={childVariants}>You ordered a {pizza.base} pizza with:</motion.p>
      <motion.div variants={childVariants}>
        {pizza.toppings.map(topping => <div key={topping}>{topping}</div>)}
      </motion.div>
    </motion.div>
  )
}

export default Order;