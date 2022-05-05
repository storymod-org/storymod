import React, {Component} from "react"
import './HeaderBar.scss'

export default class HeaderBar extends Component {

    render() {

        const {firstBtn, title, lastBtn} = this.props;

        return (
            <div className="stm-header">
                <div className="stm-header__publish">
                    {firstBtn}
                </div>
                <div className="stm-header__title">
                    <p>{title}</p>
                </div>
                <div className="stm-header__menu">
                    {lastBtn}
                </div>
            </div>
        )
    }

}