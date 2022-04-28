import React, {Component} from "react";
import './Button.scss';

export default class Button extends Component {

    render() {

        const {state, text} = this.props;
        const className = `stm-btn stm-btn--${state}`;

        return (
            <button
            className={className}>
            {text}</button>
        )

    }

}