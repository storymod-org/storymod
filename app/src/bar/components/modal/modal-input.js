import React from "react"
import './modal-imput.scss'

import Header from "./header/header"
import InputContentText from "../input/input-content-text"

const ModalInput = ({title, placeholder, big, height, firstButton}) => {

    let className = 'modal'
    big ? className += ' modal--big' : className += ' modal--small'
    const newHeight = (parseInt(height)/2) + 'px'

    return (
        <div className="modal__overlay">
            <div className={className} style={{height: `${height}px`, top: `calc(50% - ${newHeight})`}}>
                <Header title={title} firstButton={firstButton}/>
                <div className="modal__body modal-input">
                    <InputContentText placeholder={placeholder}/>
                </div>
            </div>
        </div>
    )
}

export default ModalInput