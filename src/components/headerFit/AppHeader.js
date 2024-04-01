import React, { useState } from 'react'
import './AppHeader.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

import {Link} from 'react-scroll'


const AppHeader = () => {
  const mobile = window.innerWidth<=768? true: false;
  const [menuOpened, setMenuopened] = useState(false)
  return (
    <div className='header'>
      <img src={Logo} className='logo'/>
      {menuOpened===false && mobile===true ? 
      <div 
      style={{backgroundColor:'var(--appColor)' ,
          padding:'0.5rem',
          borderRadius:'5px'
        }}
        onClick={()=> setMenuopened(true)}
      >
        <img src={Bars} style={{widows: '1rem' , height:'1rem'}} />  
      </div>
    : 
    <ul className='header-menu'>
      <li >
        <Link
          onClick={()=> setMenuopened(false)}
          to='home'
          activeClass='active'
          span={true}
          smooth={true}
        >
          Home
        </Link>
        
      </li>
      <li >
        <Link
          onClick={()=> setMenuopened(false)}
          to='programs'
          span={true}
          smooth={true}
        >
          Programs
        </Link>
        
      </li>
      <li >
        <Link
          onClick={()=> setMenuopened(false)}
          to='reasons'
          span={true}
          smooth={true}
        >
          Why us
        </Link>
        
      </li>
      <li onClick={()=> setMenuopened(false)}>
        <Link
          onClick={()=> setMenuopened(false)}
          to='plans-c'
          span={true}
          smooth={true}
        >
          Plans
        </Link>
        
      </li>
      <li >
        <Link
          onClick={()=> setMenuopened(false)}
          to='testimonials'
          span={true}
          smooth={true}

        >Testimonials</Link>
        
      </li>

    </ul>
    }
      
    </div>
  )
}

export default AppHeader