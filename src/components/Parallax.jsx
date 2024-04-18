import React from 'react';
import {motion} from 'framer-motion';

const textVariants = {
  scrollButton: {
    y: 6,
    transition: {
      delay: 1,
      duration: 1.6,
      repeat: Infinity
    }
  }
};

const Parallax = ({type}) => {
  const enitems = [
    (<>So,<br />What about myself?</>),
    (<>And,<br />What did I do?</>),
  ]

  return (
    <motion.div className='container' id={`parallax${type == 'services' ? '1' : '2'}`} style={{background: type == 'services' ? 'linear-gradient(180deg, #111132, #0c0c1d)' : 'linear-gradient(180deg, #111132, #505064)'}}>
      <motion.h1 className='display-1'>{type == 'services' ? enitems[0] : enitems[1]}</motion.h1>
      <motion.a href={`#${type == 'services' ? 'about' : 'portfolio'}`} className='next-btn' variants={textVariants} animate='scrollButton'><i className='bi bi-arrow-down-circle-fill'></i></motion.a>
      <motion.div className='mountains' />
      <motion.div className='planets' />
      <motion.div className='stars' />
    </motion.div>
  )
}

export default Parallax