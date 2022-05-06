import React, {Component} from "react";
import './label-info.scss';

export default class LabelInfo extends Component {

    render() {

        const {text} = this.props;

        return (

            <div className='stm-label-info'>
                <div className='stm-label-info__tooltip'>{text}</div>
                <div className="stm-label-info__button">
                    <img src='/bar/icons/action-info.svg' alt='info'/>
                </div>
            </div>

        )

    }

}