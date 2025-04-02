'use client'

import { motion } from "framer-motion";
import React from "react";

export default function Rotate() {
  
  return (
    // <div>
    //   <motion.div
    //     style={{ width: 100, height: 100, backgroundColor: 'blue' }}
    //     animate={{ rotate: 360 }}
    //     transition={{ duration: 1 }}
    //   />  
    //   <motion.div />
    // </div>

    //effet de rebond 
    // <motion.div
    //   initial={{ x: 0 }}
    //   animate={{ x: [0, -50, 0] }}
    //   transition={{ 
    //     duration: 1.5, 
    //     repeat: Infinity,
    //     ease: "easeInOut" 
    //   }}
    //   style={{ width: 100, height: 100, backgroundColor: 'purple', borderRadius: '50%' }}
    // />
  
  //effet d'arrondissement de bord 
  // <motion.div
  //   initial={{ borderRadius: "0%" }}
  //   animate={{ borderRadius: ["0%", "50%", "10%", "50%", "0%"], rotate: 180 }}
  //   transition={{ duration: 3, repeat: Infinity }}
  //   style={{ width: 100, height: 100, backgroundColor: 'green' }}
  // />

  // <motion.div
  //   animate={{ 
  //     scale: [1, 1.2, 1],
  //     opacity: [1, 0.8, 1]
  //   }}
  //   transition={{ 
  //     duration: 2, 
  //     repeat: Infinity 
  //   }}
  //   style={{ width: 100, height: 100, backgroundColor: 'blue' }}
  // />

  // <motion.div
  //   animate={{ 
  //     rotateY: 360,
  //   }}
  //   transition={{ 
  //     duration: 2,
  //     repeat: Infinity,
  //     ease: "linear"
  //   }}
  //   style={{ 
  //     width: 150, 
  //     height: 150, 
  //     backgroundColor: 'purple',
  //     perspective: "1000px"
  //   }}
  // />

  // <motion.div
  //   drag
  //   dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
  //   whileDrag={{ scale: 1.2 }}
  //   style={{ width: 100, height: 100, backgroundColor: 'orange', borderRadius: 10 }}
  // />
  // );

  // <motion.div
  //   whileHover={{ 
  //     scale: 1.2,
  //     rotate: 90,
  //     backgroundColor: "#ff0055"
  //   }}
  //   style={{ width: 100, height: 100, backgroundColor: 'teal' }}
  // />

  // <motion.div
  //   initial={{ opacity: 0, y: 50 }}
  //   whileInView={{ opacity: 1, y: 0 }}
  //   transition={{ duration: 0.8 }}
  //   viewport={{ once: true }}
  //   style={{ 
  //     width: 200, 
  //     height: 200, 
  //     backgroundColor: 'purple',
  //     borderRadius: 10
  //   }}
  // >
  //   Contenu visible au défilement
  // </motion.div>

  );
}
