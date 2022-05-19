import React, {Component} from "react"
import './modal.scss'
import Header from "./header/header"

export default class Modal extends Component {

    render() {

        const {
            title,
            type,
            headerBtn,
            close,
            children} = this.props

        let className = 'modal'
        
        if (type === 'small') {
            className += ' modal--small'
        } else if (type === 'medium') {
            className += ' modal--medium'
        } else {
            className += ' modal--big'
        }

        return (

            <div className='modal__overlay'>
                <div className={className}>

                    <Header
                        title={title}
                        firstButton={headerBtn}
                        close={close}/>

                    {children}

                </div>
            </div>
        )
    }

}