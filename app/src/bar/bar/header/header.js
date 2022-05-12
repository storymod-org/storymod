import React, {Component} from "react"
import './header.scss'

import ButtonIcon from '../../components/button/button-icon'

export default class Header extends Component {

    render() {

        const {config, nav, page, modul, isPages, updateNav} = this.props;
        let title = '';

        if (nav === 0) {
            title = config.info.name
        } else if (nav === 1) {
            title = config.pages[page].name
        } else {
            title = config.pages[page].modules[modul].name
        }

        if ((isPages & (nav === 0)) || (!isPages & (nav === 1))) {
            return (
                <View 
                    title={title}
                    firstBtn={{
                        icon: 'action-publish',
                        action: console.log('Publish')}}
                    lastBtn={{
                        icon: 'action-menu',
                        action: console.log('Menu')}}/>
            )
        } else {
            return (
                <View
                    title={title}
                    firstBtn={{
                        icon: 'action-back',
                        action: () => updateNav(nav - 1)}}
                    lastBtn={{
                        icon: 'action-more',
                        action: () => console.log('More')}}/>
            )
        }
    }

}

class View extends Component {

    render() {

        const {firstBtn, lastBtn, title} = this.props;

        return (

            <div className="stm-header">

                <div className="stm-header__first-btn">

                    <ButtonIcon
                        icon={firstBtn.icon}
                        state='default-secondary'
                        size='big'
                        action={firstBtn.action}/>

                </div>

                <div className="stm-header__title">
                    <p>{title}</p>
                </div>

                <div className="stm-header__last-btn">

                    <ButtonIcon
                        icon={lastBtn.icon}
                        state='default-secondary'
                        size='big'
                        action={lastBtn.action}/>

                </div>  

            </div>

        )
    }
}