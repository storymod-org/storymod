import React, {Component} from "react";
import './button-icon.scss';

export default class ButtonIcon extends Component {

    render() {

        const {state, size, icon, action} = this.props,
              className = `stm-btn-icon stm-btn-icon--${state} stm-btn-icon--${size}`,
              srcIcon = `bar/icons/${icon}.svg`;

        return (

            <button
            className={className}
            onClick={action}>
            <img src={srcIcon} alt='Icon'/>
            </button>

        )

    }

}