import React, {Component} from "react"
import './bar.scss'

import Header from "./bar/header/header"
import Button from "./components/button/button"
import Cells from './components/cells/cells'

import Sections from "./bar/sections/sections"
import Pages from './bar/pages/pages'

export default class Bar extends Component {

    constructor(state) {
        super(state);
        this.state = {
            isPages: true,
            nav: 0, // pages = 0, modules = 1, modul = 2
            page: 0,
            modul: 0,
            section: 0
        }
        this.openPage = this.openPage.bind(this)
    }

    openPage(page) {
        this.setState({
            nav: 1,
            page: page
        })
    }

    render() {

        const {page, modul, section, nav, isPages} = this.state;
        const pages = this.props.config.pages;

        if (nav === 0) {
            return (
                <div className="stm-bar">
                    <Header firstBtnIcon='action-publish' title={pages[page].name} lastBtnIcon='action-menu'/>
                    <div className="stm-bar__content"><Pages pages={pages} action={this.openPage}/></div>
                    <div className="stm-bar__button"><Button text='Добавить страницу' state='default-primary'/></div>
                </div>
            )  
        } else if (nav === 1 && isPages) {
            return (
                <div className="stm-bar">
                    <Header firstBtnIcon='action-back' title={pages[page].modules[modul].name} lastBtnIcon='action-more' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><Cells cells={pages[page].modules} icon='objects-modul' action={() => this.actionPage(2)}/></div>
                    <div className="stm-bar__button"><Button text='Добавить модуль' state='default-primary'/></div>
                </div>
            )    
        } else if (nav === 1 && !isPages) {
            return (
                <div className="stm-bar">
                    <Header firstBtnIcon='action-publish' title={pages[page].name} lastBtnIcon='action-menu' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><Cells cells={pages[page].modules} icon='objects-modul' action={() => this.actionPage(2)}/></div>
                    <div className="stm-bar__button"><Button text='Добавить модуль' state='default-primary'/></div>
                </div>
            )    
        } else {
            return (
                <div className="stm-bar">
                    <Header firstBtnIcon='action-back' title={pages[page].modules[modul].sections[section].name} lastBtnIcon='action-more' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><Sections sections={pages[page].modules[modul].sections}/></div>
                    <div className="stm-bar__button"><Button text='Добавить секцию' state='default-primary'/></div>
                </div>
            )    
        }

    }

}
