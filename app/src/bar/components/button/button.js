import React, {Component} from "react";
import './button.scss';

export default class Button extends Component {

    render() {

        const {state, text, action} = this.props;
        const className = `stm-btn stm-btn--${state}`;

        return (
            <button
            className={className}
            onClick={action}>
            {text}</button>
        )

    }

}