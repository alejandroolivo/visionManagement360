import React, { useState } from 'react'
import './VSConfPageStyle.css';
import './Components.css';

import imgSource from './resources/treeview.png';
import imgEnterSource from './resources/move.png';

const SettingDisplay = (props) => {

    return (
        <div className={"VSConfigPage-panel-setting"}>
            <p type={props.name}></p>
            <input placeholder={props.description}></input>
        </div>
    );
};

const AppConfigForm = (props) => {
    return (
        <div className={"VSConfigPage-panel"}>
            <form class="form">
                <h2>App.Config Settings</h2>
                <SettingDisplay name='Image Processing Library:' descripcion={' '}></SettingDisplay>
                <SettingDisplay name='Communications Device:' descripcion={' '}></SettingDisplay>
                <SettingDisplay name='Communications Device Count:' descripcion={' '}></SettingDisplay>
                <SettingDisplay name='TcpComs IP:' descripcion={' '}></SettingDisplay>
                <SettingDisplay name='TcpComs Port:' descripcion={' '}></SettingDisplay>
                <SettingDisplay name='HeartBit Enabled:' descripcion={' '}></SettingDisplay>
                <h4></h4>
                <button className="Button-VSConfPage" >Save App.Config</button>
                <h4></h4>
            </form>
        </div>
    );
};

const InfoForm = (props) => {
    return (
        <div className={"VSConfigPage-panel"}>
            <form class="form">
                <h2>Information</h2>
                <h4 className={"Info-text-class"}>{props.text}</h4>
                <button className="Button-VSConfPage" >More info</button>
                <h4></h4>
            </form>
        </div>
    );
};

const VisionSystemConfigForm = (props) => {
    return (
        <form class="form">
            <h2>{props.name}</h2>
            <SettingDisplay name='Name:' descripcion={' '}></SettingDisplay>
            <SettingDisplay name='Acquisition Device:' descripcion={' '}></SettingDisplay>
            <SettingDisplay name='Serial Number:' descripcion={' '}></SettingDisplay>
            <SettingDisplay name='IP:' descripcion={' '}></SettingDisplay>
            <SettingDisplay name='Port:' descripcion={' '}></SettingDisplay>
            <h4></h4>
            <button className="Button-VSConfPage" >Save Vision System</button>
            <h4></h4>
        </form>
    );
};

const ListOfVisionSystemConfigForms = ({ forms }) => {
    return (
        <div className='ListOfVisionSystemConfigForms-class'>
            {
                forms.map(({ id, title, url }) =>
                    <VisionSystemConfigForm
                        id={id}
                        name={title}
                    />
                )
            }
        </div>
    );
};

const SettingsPanel = (props) => {

    return (
        <div className={"VSConfigPage-panel-global"}>
            <AppConfigForm></AppConfigForm>
            <div className={"VSConfigPage-panel"}>
                <VisionSystemConfigForm name='VisionSystem #1'></VisionSystemConfigForm>
                
                <h4></h4>
                <button className="Button-VSConfPage" >Add new</button>
                <h4></h4>
            </div>
            <InfoForm text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempus, quam ut maximus dignissim, ipsum eros pellentesque nisi, vitae dictum elit justo posuere sem. Morbi vitae nisl varius, laoreet nisi vel, tincidunt ante. Aliquam bibendum gravida augue, non egestas mauris blandit ut. Fusce quam massa, auctor non nisl id, rutrum molestie justo. Nam eleifend, nisl ut condimentum convallis, nisl est suscipit tellus, et tincidunt ligula eros vel mi. Quisque varius metus in tortor bibendum viverra. Pellentesque varius, purus ut cursus mollis, enim dui euismod dolor, eget egestas nibh ante ut ex. Phasellus vel purus eget leo pretium facilisis. Cras lacinia erat id metus venenatis, in commodo mauris malesuada. Donec nec mi nibh. Pellentesque nec odio vitae nulla sollicitudin ultrices. In lobortis ullamcorper sem, nec imperdiet velit viverra vitae. Nulla euismod elit id massa molestie accumsan at vitae arcu. Ut finibus justo a euismod blandit. Sed ut porta est, eget suscipit ipsum."></InfoForm>
        </div>
    );
};

export default SettingsPanel;