import React, {Component} from "react"
import './header.scss'

import ButtonIcon from '../../../components/button/button-icon'
import MainMenu from '../../../bar/main-menu/main-menu'

export default class Header extends Component {

    constructor(props) {
        super(props)
        this.state = {
            mainMenu: false
        }
        this.showMenu = this.showMenu.bind(this)
    }

    showMenu() {
        this.setState({mainMenu: !this.state.mainMenu})
    }

    render() {

        const {config, nav, page, modul, isPages, updateNav, showSetAccount} = this.props;
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
                    mainMenu={this.state.mainMenu}
                    title={title}
                    firstBtn={{
                        icon: 'action-publish',
                        action: null}}
                    lastBtn={{
                        icon: 'action-menu',
                        action: this.showMenu}}
                    showSetAccount={showSetAccount}/>
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

        const {firstBtn, lastBtn, title, mainMenu, showSetAccount} = this.props;

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

                    {mainMenu ? <MainMenu showSetAccount={showSetAccount}/> : null}
                    
                </div>  

            </div>

        )
    }
}