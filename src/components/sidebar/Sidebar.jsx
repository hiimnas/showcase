import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Links from './Links';

const Sidebar = () => {
    const [open, setOpen] = useState(false);
    
    const variants = {
        open: {
            clipPath: `circle(1200px at 6vw 33px)`,
            transition: {
                type: 'spring',
                stiffness: 20
            }
        },
        closed: {
            clipPath: `circle(0 at 6vw 33px)`,
            transition: {
                type: 'spring',
                stiffness: 420,
                damping: 30
            }
        }
    }

  return (
    <motion.div className='sidebar' initial={false} animate={open ? 'open' : 'closed'}>
        <motion.div className='bg' variants={variants}>
            <Links />
        </motion.div>
        <motion.button type='button' className='btn btn-light' onClick={() => setOpen(prev => !prev)}>
            <i className={open ? 'bi bi-x-lg' : 'bi bi-list'}></i>
        </motion.button>
    </motion.div>
  )
}

export default Sidebar