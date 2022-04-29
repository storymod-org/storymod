import React, {Component} from "react";
import './Cell.scss';

export default class Cell extends Component {

    render() {

        const {icon, text, option, active, disable} = this.props;
        
        let className = ['stm-cell']

        if (option && option.type.name === 'ButtonIcon') {
            className.push('stm-cell--button');
        }
        if (active) {
            className.push('stm-cell--active');
        }
        if (disable) {
            className.push('stm-cell--disable');
        }        

        const srcIcon = `bar/icons/${icon}.svg`

        return (

        <div className={className.join(' ')}>
            <div className="stm-cell__icon"><img src={srcIcon} alt='Icon'/></div>
            <div className="stm-cell__text"><p>{text}</p></div>
            <div className="stm-cell__option">{option}</div>
        </div>

        )

    }

}