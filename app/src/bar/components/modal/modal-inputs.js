import React, {Component} from "react"
import './modal-inputs.scss'

import Header from "./header/header"
import InputContentText from "../input/input-content-text"
import Button from "../button/button"

export default class ModalInputs extends Component {

    render() {

        const {title, big=true, height, firstButton, inputs, button, show} = this.props

        let className = 'modal'
        let overlay = 'modal__overlay'

        big ? className += ' modal--big' : className += ' modal--small'
        show ? overlay += ' modal__overlay--show' : overlay += ''

        const newHeight = (parseInt(height)/2) + 'px'

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
            <div className="modal__overlay">
                <div className={className} style={{height: `${height}px`, top: `calc(50% - ${newHeight})`}}>

                    <Header title={title} firstButton={firstButton}/>

                    <div className="modal__body modal-inputs">
                        {renderInputs}
                    </div>

                    <div className="modal__buttons">
                        <Button state='default-secondary' text='Отмена'/>
                        <Button state='accent' text={button.text}/>
                    </div>

                </div>
            </div>
        )
    }

}