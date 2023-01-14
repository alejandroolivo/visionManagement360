import React, {useState} from 'react';
import {Route, Routes, Link} from "react-router-dom";
import './HeaderStyle.css';

import imgSource from './resources/treeview.png';
import imgEnterSource from './resources/move.png';

const MainButton = (props) => {
    const [btnImage, setBtnImage] = useState([imgSource])
    const [onMouseOverValue, setOnMouseOverValue] = useState([true])
    const className = onMouseOverValue ? "Main-button-class" : "Main-button-class-highlighted"

    return(
        <Link className={className} to={props.ruta}>
            <picture  onMouseEnter={() => setOnMouseOverValue(false)} onMouseLeave={() => setOnMouseOverValue(true)}>            
                <img  src={props.source} width={'280px'} height={'auto'} className="Main-button-img-class"/>
                <h4 className="Main-button-text-class">{props.title}</h4>         
                <img  src={imgEnterSource} width={'80px'} height={'auto'}/>         
            </picture>
        </Link>        
    );
};

export default MainButton;
