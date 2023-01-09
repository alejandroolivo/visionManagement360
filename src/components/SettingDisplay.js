import React, {useState} from 'react'
import './VSConfPageStyle.css';

const SettingsDisplay = (props) => {
    
    return(
        <div className={"VSConfigPage-panel-setting"}>              
            <p type={props.name}></p>
            <input placeholder={props.description}></input>
        </div>
    );
};

export default SettingsDisplay;