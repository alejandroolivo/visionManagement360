import React, {useState} from 'react'
import './VSConfPageStyle.css';
import './Components.css';

import imgSource from './resources/treeview.png';
import imgEnterSource from './resources/move.png';

import SettingDisplay from './SettingDisplay'

const SettingsPanel = (props) => {
    
    return(
        <div  className={"VSConfigPage-panel-global"}> 
            <div className={"VSConfigPage-panel"}>
                <form class="form">
                    <h2>App.Config Settings</h2>
                    <SettingDisplay name='Vision Library:' descripcion={'Nombre del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Communications::' descripcion={'N/S del vision system...'}></SettingDisplay>
                    <SettingDisplay name='IP:' descripcion={'IP del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Port:' descripcion={'Puerto del vision system...'}></SettingDisplay>
                    
                    <h4></h4>
                    <button className="Button-VSConfPage" >Save App.Config</button>
                    <h4></h4>
                </form>
            </div>      
            <div className={"VSConfigPage-panel"}>
                <form class="form">
                    <h2>VisionSystem</h2>
                    <SettingDisplay name='Vision System name:' descripcion={'Nombre del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Serial Number:' descripcion={'N/S del vision system...'}></SettingDisplay>
                    <SettingDisplay name='IP:' descripcion={'IP del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Port:' descripcion={'Puerto del vision system...'}></SettingDisplay>
                    <h4></h4>
                    <button className="Button-VSConfPage" >Save Vision System</button>
                    <h4></h4>
                    <button className="Button-VSConfPage" >Add new</button>
                    <h4></h4>
                </form>
                <form class="form">
                    <h2>VisionSystem</h2>
                    <SettingDisplay name='Vision System name:' descripcion={'Nombre del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Serial Number:' descripcion={'N/S del vision system...'}></SettingDisplay>
                    <SettingDisplay name='IP:' descripcion={'IP del vision system...'}></SettingDisplay>
                    <SettingDisplay name='Port:' descripcion={'Puerto del vision system...'}></SettingDisplay>
                    <h4></h4>
                    <button className="Button-VSConfPage" >Save Vision System</button>
                    <h4></h4>
                    <button className="Button-VSConfPage" >Add new</button>
                    <h4></h4>
                </form>
            </div>          
            <div className={"VSConfigPage-panel"}>
                <form class="form">
                    <h2>Information</h2>
                    <h4></h4>
                    <button className="Button-VSConfPage" >More info</button>
                    <h4></h4>
                </form>
            </div>    
        </div>
    );
};

export default SettingsPanel;