import React, {Component} from "react";
import './_input.scss';
import './InputContentText.scss';

export default class InputContentText extends Component {

    render() {

        const {disabled, placeholder} = this.props;
        const className = 'stm-input stm-input-content-text';

        return (
            <input
                className={className}
                placeholder={placeholder}
                disabled={disabled}/>
        )

    }

}