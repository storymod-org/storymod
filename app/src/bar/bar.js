import React, {Component} from "react"
import './bar.scss'

import Header from "./bar/header/header"
import Content from "./bar/content/content";

export default class Bar extends Component {

    constructor(state) {
        super(state);
        this.state = {
            isPages: true,
            nav: 1, // pages = 0, modules = 1, modul = 2
            page: 0,
            modul: 0,
            section: 0
        }
        this.openPage = this.openPage.bind(this)
        this.updateNav = this.updateNav.bind(this)
    }

    updateNav(nav) {
        this.setState({nav})
    }

    openPage(id) {
        this.setState({
            nav: 1,
            page: id
        })
    }

    openModul(id) {
        this.setState({
            nav: 2,
            page: id
        }) 
    }

    render() {

        const {page, modul, section, nav, isPages} = this.state;
        const config = this.props.config;
        
        return (
            <div className="stm-bar">
                <Header
                    config={config}
                    nav={nav}
                    page={page}
                    modul={modul}
                    isPages={isPages}
                    updateNav={this.updateNav}/>
                <Content
                    nav={nav}
                    pages={config.pages}
                    page={page}
                    modul={modul}/>
            </div>
        )

    }

}