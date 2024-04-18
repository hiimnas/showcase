import React from 'react';
import {delay, motion} from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1
    }
  },
  scrollButton: {
    y: 6,
    transition: {
      delay: 1,
      duration: 1.6,
      repeat: Infinity
    }
  }
}

const sliderVariants = {
  initial: {
    x: '200%'
  },
  animate: {
    x: '-930%',
    transition: {
      delay: 1,
      repeat: Infinity,
      duration: 15
    }
  }
}

function Hero() {
  const enitems = [
    'Anastasios Karameros',
    'Web developer and designer',
    'Art is freedom without limits and art is in everything.',
    'PC Specialist and Website Designer & Developer in the game for years, working to the utmost to provide innovative and efficient solutions.',
    'My projects',
    'Contact me',
    'Changing the world by supporting and inspiring.'
  ]

  return (
    <div className='container hero' id='home'>
      <motion.div className='text' variants={textVariants} initial='initial' animate='animate'>
        <motion.h2 className='h1' variants={textVariants}>{enitems[0]}</motion.h2>
        <motion.h1 className='display-1' variants={textVariants}>{enitems[1]}</motion.h1>
        <motion.h3 className='h5' variants={textVariants}>{enitems[2]}</motion.h3>
        <motion.p className='lead' variants={textVariants}>{enitems[3]}</motion.p>
        <motion.div className='btn-group' variants={textVariants}>
          <motion.a href='#portfolio' className='btn btn-light' variants={textVariants}>{enitems[4]}</motion.a>
          <motion.a href='#contact' className='btn btn-primary' variants={textVariants}>{enitems[5]}</motion.a>
        </motion.div>
        <motion.a href='#parallax1' className='next-btn' variants={textVariants} animate='scrollButton'><i className='bi bi-arrow-down-circle-fill'></i></motion.a>
      </motion.div>
      <motion.div className='sliding-text' variants={sliderVariants} initial='initial' animate='animate'>
        {enitems[6]}
      </motion.div>
      <div className='img'>
        <img src='./hero.png' alt='portrait' />
      </div>
    </div>
  )
}

export default Hero