import React, {Component} from "react";
import './Link.scss';

export default class Link extends Component {

    render() {

        const {size, text, link} = this.props,
              className = `stm-link stm-link--${size}`;

        return (

            <a
            href={link}
            className={className}>
            {text}
            </a>

        )

    }

}