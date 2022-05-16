import React from "react"

import InputContentText from "../input/input-content-text"

const ModalInput = ({placeholder}) => {

    return (
        <div className="modal__body modal-input">
            <InputContentText placeholder={placeholder}/>
        </div>
    )
}

export default ModalInput