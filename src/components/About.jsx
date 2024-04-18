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

function About() {
  return (
    <div className='container' id='about'>
        <motion.a href='#services' className='next-btn' variants={textVariants} animate='scrollButton'><i className='bi bi-arrow-down-circle-fill'></i></motion.a>
        <h2 className='display-3'>Hi, I'm nas 🍵</h2>
        <p className='lead'>My journey in life is unique, take a look for yourself.</p>
        <ul className='nav nav-tabs'>
            <li className='nav-item'>
                <a className='nav-link active' aria-current='page' id='work-tab' data-bs-toggle='tab' href='#work' role='tab'>Experience</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' id='education-tab' data-bs-toggle='tab' href='#education' role='tab'>Education</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' id='skills-tab' data-bs-toggle='tab' href='#skills' role='tab'>Skills</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' id='skills-tab' data-bs-toggle='tab' href='#technical' role='tab'>Technical</a>
            </li>
            <li className='nav-item'>
                <a className='nav-link' id='skills-tab' data-bs-toggle='tab' href='#languages' role='tab'>Languages</a>
            </li>
        </ul>
        <div className='tab-content'>
            <div className='tab-pane fade show active' id='work' role='tabpanel' aria-labelledby='work-tab'>
                <h3>Experience</h3>
                <p className='fs-5'>Work is integral to our society, providing us with ways to support people within communities. I have worked as:</p>
                <ul className='work-list'>
                    <li>An English teacher in Japan at <a href='https://cafeeikaiwa.jp/' target='_blank'>Premium Cafe Eikaiwa</a> for 2 years, managing and supporting students' learning both practically and for exams.</li>
                    <li>A freelancer for almost 1 year,
                        <ul style={{listStyle: 'lower-alpha'}}>
                            <li>Fixing and building computers for individual clients or online sales.</li>
                            <span style={{paddingLeft: '6px'}}>and</span>
                            <li>Creating professional websites from design to code.</li>
                        </ul>
                    </li>
                    <li>A Business Analyst at <a href='https://www.schroders.com/en/global/individual/' target='_blank'>Schroders</a> for 2 years, uncovering the world of investment management and using IT skills to improve and support this.</li>
                    <li>A League of Legends ELO Booster, raising the rank of video game players on their behalf.</li>
                </ul>
            </div>
            <div className='tab-pane fade' id='education' role='tabpanel' aria-labelledby='education-tab'>
                <h3>Education</h3>
                <p className='fs-5'>In my pursuit of knowledge and personal development, my formal education consists of:</p>
                <ul className='education-list'>
                    <li><a href='https://www.open.ac.uk/' target='_blank'>The Open University</a> for a BSc in Computing & IT and Design as a second subject <span>(in progress)</span></li>
                    <li><a href='https://www.tg-group.ac.jp/nihongo/e/top.html' target='_blank'>Kansai College</a> Kansai College of Business and Languages for an Associates Degree in Japanese, where I also passed JLPT N2 Level in Japanese</li>
                    <li><a href='https://softuni.bg/' target='_blank'>Softuni</a> for a C# Web Developer Diploma</li>
                    <li><a href='https://www.schroders.com/en/global/individual/' target='_blank'>Schroders</a> as a full-time Apprentice for a Level 4 Business Analyst Qualification</li>
                    <li><a href='https://ticc.cucas.cn/' target='_blank'>Tianjin International Chinese College</a> online <span>(now defunct)</span>, where I passed HSK Level 6 in Mandarin Chinese</li>
                </ul>
                <p className='fs-6'>Not to mention I self-study and practice independently often.</p>
            </div>
            <div className='tab-pane fade' id='skills' role='tabpanel' aria-labelledby='skills-tab'>
                <h3>Skills</h3>
                <p className='fs-5'>Throughout my journey of life, pursuing education, work and various hobbies, I have accumulated many skills...</p>
                <div className='skills-grid'>
                    <ul className='fs-6 skills-list'>
                        <li>Create Clear, Comprehensive <b>Documentation & Review</b></li>
                        <div className='progress' role='progressbar' aria-label='Documentation' aria-valuenow='95' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '95%'}}>95%</div>
                        </div>
                        <li><b>Analyze situations</b>, forming crucial insights</li>
                        <div className='progress' role='progressbar' aria-label='Analyze' aria-valuenow='81' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '81%'}}>81%</div>
                        </div>
                        <li><b>Manage Time Effectively</b></li>
                        <div className='progress' role='progressbar' aria-label='German' aria-valuenow='73' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '73%'}}>73%</div>
                        </div>
                        <li><b>Work Efficiently</b></li>
                        <div className='progress' role='progressbar' aria-label='German' aria-valuenow='86' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '86%'}}>86%</div>
                        </div>
                        <li><b>Persevere</b> despite any difficulties</li>
                        <div className='progress' role='progressbar' aria-label='Perseverance' aria-valuenow='100' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '100%'}}>100%</div>
                        </div>
                        <li><b>Attention to Detail</b></li>
                        <div className='progress' role='progressbar' aria-label='Attention to Detail' aria-valuenow='91' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '85%'}}>85%</div>
                        </div>
                    </ul>
                    <ul className='fs-6 skills-list'>
                        <li><b>Adapt</b> and be <b>Flexible</b></li>
                        <div className='progress' role='progressbar' aria-label='Flexibility' aria-valuenow='72' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '72%'}}>72%</div>
                        </div>
                        <li><b>Communicate and Collaborate</b></li>
                        <div className='progress' role='progressbar' aria-label='Communication' aria-valuenow='69' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-warning' style={{width: '69%'}}>69%</div>
                        </div>
                        <li>Let <b>Creativity</b> flow and <b>Innovate</b></li>
                        <div className='progress' role='progressbar' aria-label='Creativity' aria-valuenow='96' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '96%'}}>96%</div>
                        </div>
                        <li><b>Think Critically</b> and <b>Solve Problems</b></li>
                        <div className='progress' role='progressbar' aria-label='Critical Thinking' aria-valuenow='78' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '78%'}}>78%</div>
                        </div>
                        <li>Remain <b>Calm under Pressure</b></li>
                        <div className='progress' role='progressbar' aria-label='Calm under Pressure' aria-valuenow='91' aria-valuemin='0' aria-valuemax='100'>
                            <div className='progress-bar bg-success' style={{width: '91%'}}>91%</div>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
        <div className='tab-content'>
            <div className='tab-pane fade show' id='technical' role='tabpanel' aria-labelledby='technical-tab'>
                <h3>Technical Proficiency</h3>
                <p className='fs-5'>Creating websites takes many different skills - I am able to:</p>
                <ul className='fs-6 skills-list'>
                    <li>Create <b>Basic Websites with HTML, CSS, JavaScript</b></li>
                    <div className='progress' role='progressbar' aria-label='Basic Websites' aria-valuenow='82' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '82%'}}>82%</div>
                    </div>
                    <li>Design <b>Graphics with Photoshop</b>, and select <b>color schemes</b> and <b>layouts</b></li>
                    <div className='progress' role='progressbar' aria-label='Design' aria-valuenow='80' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '80%'}}>80%</div>
                    </div>
                    <li>Implement <b>Front-End Frameworks like React and Angular</b></li>
                    <div className='progress' role='progressbar' aria-label='Frameworks' aria-valuenow='92' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '92%'}}>92%</div>
                    </div>
                    <li>Create and Implement APIs using <b>C#, Java, PHP</b></li>
                    <div className='progress' role='progressbar' aria-label='APIs' aria-valuenow='56' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-warning' style={{width: '56%'}}>56%</div>
                    </div>
                    <li><b>Test and Troubleshoot</b> Issues</li>
                    <div className='progress' role='progressbar' aria-label='Test and Troubleshoot' aria-valuenow='42' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-warning' style={{width: '42%'}}>42%</div>
                    </div>
                </ul>
            </div>
        </div>
        <div className='tab-content'>
            <div className='tab-pane fade show' id='languages' role='tabpanel' aria-labelledby='languages-tab'>
                <h3>Languages</h3>
                <p className='fs-5'>Languages help people understand each other, even in different parts of the world. I learned:</p>
                <ol className='sub-list'>
                    <li>English</li>
                    <div className='progress' role='progressbar' aria-label='English' aria-valuenow='97' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '97%'}}>97%</div>
                    </div>
                    <li>Bulgarian</li>
                    <div className='progress' role='progressbar' aria-label='Bulgarian' aria-valuenow='88' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '88%'}}>88%</div>
                    </div>
                    <li>Japanese</li>
                    <div className='progress' role='progressbar' aria-label='Japanese' aria-valuenow='72' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '72%'}}>72%</div>
                    </div>
                    <li>Chinese</li>
                    <div className='progress' role='progressbar' aria-label='Chinese' aria-valuenow='70' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-success' style={{width: '70%'}}>70%</div>
                    </div>
                    <li>German</li>
                    <div className='progress' role='progressbar' aria-label='German' aria-valuenow='32' aria-valuemin='0' aria-valuemax='100'>
                        <div className='progress-bar bg-danger' style={{width: '32%'}}>32%</div>
                    </div>
                </ol>
            </div>
        </div>
        <p className='fs-6 secondary'><a href='#contact'>CV available on-request.</a></p>
    </div>
  )
}

export default About