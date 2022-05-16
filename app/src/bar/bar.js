import React, {Component} from "react"
import './bar.scss'

import Header from "./bar/main-bar/header/header"
import Body from "./bar/main-bar/body/body";

export default class Bar extends Component {

    constructor(state) {
        super(state);
        this.state = {
            isPages: true,
            nav: 0, // pages = 0, modules = 1, modul = 2
            page: 0,
            modul: 0,
            section: 0,
        }
        this.updateNav = this.updateNav.bind(this)
        this.openPage = this.openPage.bind(this)
        this.openModul = this.openModul.bind(this)
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

        const {page, modul, nav, isPages} = this.state;
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
                <Body
                    nav={nav}
                    pages={config.pages}
                    page={page}
                    modul={modul}
                    openPage={this.openPage}
                    openModul={this.openModul}/>

            </div>
        )

    }

}