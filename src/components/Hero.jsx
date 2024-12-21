import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <motion.div
      id="hero"
      className="d-flex flex-column align-items-center justify-content-center text-center vh-100"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="display-4">Hi, I'm a Software Developer</h1>
      <p className="lead">Creating efficient solutions with cutting-edge technology.</p>
    </motion.div>
  );
}

export default Hero;
