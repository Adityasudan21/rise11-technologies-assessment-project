import React from 'react'
import "./Navbar_Options.css";
function Navbar_Options({Title,Icon,Icon2}) {
  return (
    <div className="options">
        {
            Icon &&
            <Icon className='icon'/>
        }
        {
            Title &&
            <h4>{Title}</h4>
            }
            {
            Icon2 &&
            <Icon2 className='icon2'/>
        }
    </div>
  )
}

export default Navbar_Options