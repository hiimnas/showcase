import React from 'react';
import Sidebar from './sidebar/Sidebar';

function Navbar() {
  return (
    <div className='navbar'>
        <Sidebar />
        <div className='wrapper'>
            <a className='nav-logo' href='./'><img src='./logo.png' /></a>
            
            <ul className='social'>
                <li><a href='https://www.instagram.com/hiimnas_tea/' target='_blank'><i className='bi bi-instagram'></i></a></li>
                <li><a href='https://github.com/hiimnas' target='_blank'><i className='bi bi-github'></i></a></li>
                <li><a href='https://www.fiverr.com/hiiimnas' target='_blank'><i className='bi bi-shop'></i></a></li>
                <li><a href='https://www.youtube.com/channel/UCXeYoMBug5Suflf2BtCjuhQ' target='_blank'><i className='bi bi-youtube'></i></a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar