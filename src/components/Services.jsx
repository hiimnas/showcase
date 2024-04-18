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

function Services() {
  return (
    <div className='container services' id='services'>
      <motion.a href='#parallax2' className='next-btn' variants={textVariants} animate='scrollButton'><i className='bi bi-arrow-down-circle-fill'></i></motion.a>

      <div className='tag'>
        <p>With passion and seriousness, I work tirelessly with positivism<br />to create a masterpiece for clients.</p>
        <hr />
      </div>
      <div className='header'>
        <img src='./workspace.png' />
        <div>
        <h2 className='display-2'>Crafting Unique Digital Experiences</h2>
        <p className='lead'>Whether graphics, layout or functionality, the website and all necessary assets are meticulously created with your best interest in mind.</p>
        </div>
        
        
      </div>
      <div className='body'>
        
        <div className='service-list'>
          <motion.div className='box'>
            <h3 className='h5'>Consultation <i className='bi bi-journal-check'></i></h3>
            <p>With skills from my background in Business Analysis, I take time to understand your needs, goals, and vision. Through thoughtful listening and probing questions, I can offer tailored solutions and trusted advice that align with your objectives. Get the guidance and support you need to make informed decisions.</p>
            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#consultation'>
              Learn more
            </button>
            <div className='modal fade' id='consultation' tabindex='-1' aria-labelledby='consultation' aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='consultationTitle'>Consultation</h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>
                    ...
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='box'>
            <h3 className='h5'>Design <i className='bi bi-brush'></i></h3>
            <p>Having understood the context, I can leverage my creativity to bring your vision to life, meticulously crafting each design aspect, from layout and color scheme to the typography, graphics and videos, all with attention to detail and a focus on user experience. Captivate your audience and leave a lasting impression.</p>
            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#design'>
              Learn more
            </button>
            <div className='modal fade' id='design' tabindex='-1' aria-labelledby='design' aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='designTitle'>Design</h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>
                    ...
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div className='box'>
            <h3 className='h5'>Development <i className='bi bi-pc-display'></i></h3>
            <p>The design is then translated into a functional, responsive website. Coding in HTML, CSS, Javascript and <a href='#'>more</a>, I use my knowledge of front-end development and SEO to ensure that your site is responsive, dynamic, and optimized for search engines. Make use of the latest technologies with quality, scalable code.</p>
            <button type='button' className='btn btn-primary' data-bs-toggle='modal' data-bs-target='#development'>
              Learn more
            </button>
            <div className='modal fade' id='development' tabindex='-1' aria-labelledby='development' aria-hidden='true'>
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <h1 className='modal-title fs-5' id='developmentTitle'>Development</h1>
                    <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                  </div>
                  <div className='modal-body'>
                    ...
                  </div>
                  <div className='modal-footer'>
                    <button type='button' className='btn btn-danger' data-bs-dismiss='modal'>Close</button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Services