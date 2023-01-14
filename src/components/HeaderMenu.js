import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import './Components.css';

import imageLogo from './resources/cortex360logo.jpg';

const HeaderMenuItem = (props) => {  
  const [onMouseOverValue, setOnMouseOverValue] = useState([true])
  
  const className =  "Header-button-class";
  return (
    
        <Link to={props.ruta} className={className} onMouseEnter={() => setOnMouseOverValue(false)} onMouseLeave={() => setOnMouseOverValue(true)}>
          <li >{props.texto}</li>
        </Link>
    
  );
}

const HeaderMenu = () => {

  return (
    <div className="Header-menu-class">
      <a className='Header-menu-logo-class' href="/" aria-current="page" aria-label="home" >
                <img src={imageLogo} loading="lazy" alt="" height={'50px'}/>
            </a>
      <ul className="Header-menu-item-panel-class">
            <li className="Header-menu-item-wrapper-class">
            <a href={'https://bcnvision.es/es?gclid=Cj0KCQiAzeSdBhC4ARIsACj36uF04pB6BdgsBTLgQGcI_-y3DCtNvjoCtkpkcvwjhh2k-HXWJ-V_NZEaAsQ4EALw_wcB'}>
              <span font-color={'#ffffff'} className={'disabled-link'} >Más Info</span>
                </a>
            </li>
            <HeaderMenuItem texto='Cortex Control Panel' ruta={'/CortexCPPage'}/>
            <HeaderMenuItem texto='Deep Learning Tools' ruta={'/DLToolsPage'}/>
            <HeaderMenuItem texto='Vision System Manager' ruta={'/VSConfPage'}/>
            <HeaderMenuItem texto='Home' ruta={'/'}/>
            
      </ul>
    </div>
  );
}

export default HeaderMenu;




