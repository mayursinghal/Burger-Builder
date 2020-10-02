import React from 'react'
import Backdrop from '../Backdrop/Backdrop';
import './Modal.css'

const modal = (props) => (
    <div>
        <Backdrop show={props.show} clicked={props.modelClosed}></Backdrop>
        <div className="Modal">
            {props.children}
        </div>
     </div>
    
);

export default modal;
