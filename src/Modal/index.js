import React from "react";
import * as ReactDOM from 'react-dom'; 
import "./Modal.css"

function Modal ({children, setModal}){
    return ReactDOM.createPortal(
        <div className="DivModal">
            <div className="InnerModal">
            <i class="gg-close" onClick={() => setModal(false)}></i>
            {children}
            </div>
            
        </div>,
        document.getElementById('modal')
    )
}

export{ Modal}