import '../styles/Collapse.css'
import arrowTop from '../assets/arrow-top.png';
import React, { useState } from 'react';

function Collapse ({title, text}) {

    const [collapse, setCollapse] = useState(false);
    const clickCollapse = () => setCollapse(!collapse);
    console.log(clickCollapse);

    return (
        <div>
            <div className="collapse" onClick={clickCollapse}>
                <h2>{title}</h2>
                <img className={`arrow ${collapse ? 'rotate' : ''}`} src={arrowTop} alt="arrow-bottom" />
            </div>
            <div>
            <p className={`textCollapse ${collapse ? 'show' : 'hide'}`}>{text}</p>
            </div>
        </div>
    )

}

export default Collapse