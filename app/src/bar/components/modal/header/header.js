import React, {Component} from "react";
import './header.scss';
import ButtonIcon from "../../button/button-icon";

export default class Header extends Component {

    render() {

        const {firstButton, title, close} = this.props;
        const firstBtn = firstButton ? <ButtonIcon state='default-secondary' size='small' icon={firstButton.icon}/> : null

        return (

            <div className='stm-header-bar'>
                {firstBtn}
                <div className='stm-header-bar__text'><h3>{title}</h3></div>
                {<ButtonIcon state='default-secondary' size='small' icon='action-close' action={close}/>}
            </div>

        )

    }

}
