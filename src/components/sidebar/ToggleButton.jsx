import React from 'react';

const ToggleButton = ({setOpen}) => {
  return (
    <button className='btn btn-light' onClick={() => setOpen(prev=>!prev)}>
        <i className='bi bi-list'></i>
    </button>
  )
}

export default ToggleButton