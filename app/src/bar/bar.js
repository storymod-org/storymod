import React, {Component} from "react"
import './bar.scss'

import HeaderBar from "./bar/HeaderBar/HeaderBar"
import Button from "./components/buttons/Button"
import CellList from './components/cellList/CellLits'
import SectionList from "./bar/SectionList/SectionList"

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
        this.actionPage = this.actionPage.bind(this)
    }

    actionPage(nav) {
        this.setState({nav})
    }

    render() {

        const {page, modul, section, nav, isPages} = this.state;
        const pages = this.props.config.pages;

        if (nav === 0) {
            return (
                <div className="stm-bar">
                    <HeaderBar firstBtnIcon='action-publish' title={pages[page].name} lastBtnIcon='action-menu'/>
                    <div className="stm-bar__content"><CellList cells={pages} icon='objects-page' action={() => this.actionPage(1)}/></div>
                    <div className="stm-bar__button"><Button text='Добавить страницу' state='default-primary'/></div>
                </div>
            )  
        } else if (nav === 1 && isPages) {
            return (
                <div className="stm-bar">
                    <HeaderBar firstBtnIcon='action-back' title={pages[page].modules[modul].name} lastBtnIcon='action-more' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><CellList cells={pages[page].modules} icon='objects-modul' action={() => this.actionPage(2)}/></div>
                    <div className="stm-bar__button"><Button text='Добавить модуль' state='default-primary'/></div>
                </div>
            )    
        } else if (nav === 1 && !isPages) {
            return (
                <div className="stm-bar">
                    <HeaderBar firstBtnIcon='action-publish' title={pages[page].name} lastBtnIcon='action-menu' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><CellList cells={pages[page].modules} icon='objects-modul' action={() => this.actionPage(2)}/></div>
                    <div className="stm-bar__button"><Button text='Добавить модуль' state='default-primary'/></div>
                </div>
            )    
        } else {
            return (
                <div className="stm-bar">
                    <HeaderBar firstBtnIcon='action-back' title={pages[page].modules[modul].sections[section].name} lastBtnIcon='action-more' action={() => this.actionPage(nav - 1)}/>
                    <div className="stm-bar__content"><SectionList sections={pages[page].modules[modul].sections}/></div>
                    <div className="stm-bar__button"><Button text='Добавить секцию' state='default-primary'/></div>
                </div>
            )    
        }

    }

}
