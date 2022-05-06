import React, {Component} from "react"
import './header.scss'

import ButtonIcon from '../../components/button/button-icon'

export default class Header extends Component {

    render() {

        const {firstBtnIcon, title, lastBtnIcon, action} = this.props;

        return (
            <div className="stm-header">
                <div className="stm-header__publish">
                    <ButtonIcon
                        icon={firstBtnIcon}
                        state='default-secondary'
                        size='big'
                        action={action}/>
                </div>
                <div className="stm-header__title">
                    <p>{title}</p>
                </div>
                <div className="stm-header__menu">
                    <ButtonIcon
                        icon={lastBtnIcon}
                        state='default-secondary'
                        size='big'/>
                </div>
            </div>
        )
    }

}