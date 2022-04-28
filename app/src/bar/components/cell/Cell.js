import React, {Component} from "react";
import './Cell.scss';

export default class Cell extends Component {

    render() {

        const {icon, text, options} = this.props;
        const className = `stm-btn}`;

        return (

            <div className={className}>
                <div><img src='' alt=''/></div>
                <div>{text}</div>
                {options}  
            </div>

        )

    }

}