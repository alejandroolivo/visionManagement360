import React, {useState} from 'react'

import MainButton from './MainButton';

import imgVSManager from './resources/VSManager.png';
import imgDLTools from './resources/DLTools.png';
import imgCortexCP from './resources/CortexCP.png';

const HomePage = (props) => {
    const [onMouseOverValue, setOnMouseOverValue] = useState([true])
    const className = onMouseOverValue ? "Main-button-class" : "Main-button-class-highlighted"

    return(
        <div id='panel' className="App-panel">
          <MainButton source={imgVSManager} title={'Vision System Manager'} />
          <MainButton source={imgDLTools} title={'Deep Learning Tools'} />
          <MainButton source={imgCortexCP} title={'Cortex Control Panel'} />
        </div>
    );
};

export default HomePage;