import React, {Component} from "react";
import './HeaderBar.scss';
import ButtonIcon from "../buttons/ButtonIcon";

export default class HeaderBar extends Component {

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
