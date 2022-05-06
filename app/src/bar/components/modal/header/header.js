import React, {Component} from "react";
import './header.scss';
import ButtonIcon from "../button/button-icon";

export default class Header extends Component {

    render() {

        const {firstButton, text, lastButton} = this.props;
        const className = `stm-header-bar`;

        return (

            <div className={className}>
                {<ButtonIcon state='default-secondary' size='small' icon={firstButton}/>}
                <div className='stm-header-bar__text'><h3>{text}</h3></div>
                {<ButtonIcon state='default-secondary' size='small' icon={lastButton}/>}
            </div>

        )

    }

}
