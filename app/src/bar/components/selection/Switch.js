import React, {Component} from "react";
import './switch.scss';

export default class Switch extends Component {

    render() {

        const {state} = this.props;
        const className = `stm-switch stm-switch--${state}`;

        return (

            <div
            className={className}/>

        )

    }

}