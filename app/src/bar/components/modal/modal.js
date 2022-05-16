import React, {Component} from "react"
import './modal.scss'
import Header from "./header/header"
import Button from "../button/button"

export default class Modal extends Component {

    render() {

        const {
            title,
            big,
            headerBtn,
            activeBtn,
            show,
            close,
            children} = this.props

        let className = 'modal'
        big ? className += ' modal--big' : className += ' modal--small'



        return (

            <div className={`modal__overlay ${show ? 'modal__overlay--show' : ''}`}>
                <div className={className}>

                    <Header
                        title={title}
                        firstButton={headerBtn}
                        close={close}/>

                    {children}

                    <div className="modal__buttons">
                        <Button
                            state='default-secondary'
                            text='Отмена'
                            action={close}/>
                        <Button
                            state='accent'
                            text={activeBtn.text}/>
                    </div>

                </div>
            </div>
        )
    }

}