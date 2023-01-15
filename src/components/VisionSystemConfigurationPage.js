import React from 'react'
import './Components.css';
import './VSConfPageStyle.css';

import SettingsPanel from './SettingsPanel';

const VisionSystemConfPage = () => {
  return (
    <div className="VSPage-class">
      <div className="Button-div-VSConfigPage">
        <button className="Button-VSConfPage">Create new App.Config</button>
        <button className="Button-VSConfPage">Import App.Config</button>
        <button className="Button-VSConfPage">Export App.Config</button>
      </div>
      <div className="VSPage-class">
        <SettingsPanel></SettingsPanel>
      </div>
    </div>
  );
};

export default VisionSystemConfPage;