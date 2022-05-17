import React, {Component} from "react"
import './modal-inputs.scss'

import InputContentText from "../input/input-content-text"
import Button from "../button/button"

export default class ModalInputs extends Component {

    render() {

        const {inputs, activeBtn, close} = this.props

        const renderInputs = inputs.map((input) => {
            return (
                <div key={input.id} className="modal-inputs__input">
                    <div className="modal-inputs__label">
                        <p>{input.label}</p>
                    </div>
                    <InputContentText placeholder={input.placeholder}/>
                </div>
            )
        })

        return (
            <>
                
                <div className="modal__body modal-inputs">
                    {renderInputs}
                </div>

                <div className="modal__buttons">
                    <Button
                        state='default-secondary'
                        text='Отмена'
                        action={close}/>
                    <Button
                        state='accent'
                        text={activeBtn.text}/>
                </div>
            </>
        )
    }

}