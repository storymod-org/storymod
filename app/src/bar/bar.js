import React, {Component} from "react"
import './bar.scss'

import Header from "./bar/main-bar/header/header"
import Body from "./bar/main-bar/body/body";
import AccountSet from "./bar/settings/account-set/account-set";
import ProjectSet from "./bar/settings/project-set/project-set";

export default class Bar extends Component {

    constructor(state) {
        super(state);
        this.state = {
            isPages: true,
            nav: 0, // pages = 0, modules = 1, modul = 2
            page: 0,
            modul: 0,
            section: 0,

            setAccount: false,
            setProject: false,
        }
        this.updateNav = this.updateNav.bind(this)
        this.openPage = this.openPage.bind(this)
        this.openModul = this.openModul.bind(this)
        this.showSetAccount = this.showSetAccount.bind(this)
        this.showSetProject = this.showSetProject.bind(this)
        
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

    showSetAccount() {
        this.setState({setAccount: !this.state.setAccount})
        console.log(this.state.setAccount)
    }

    showSetProject() {
        this.setState({setProject: !this.state.setProject})
        console.log(this.state.setProject)
    }

    render() {

        const {page, modul, nav, isPages, setAccount, setProject} = this.state;
        const config = this.props.config;
        
        return (
            <div className="stm-bar">
                <Header
                    config={config}
                    nav={nav}
                    page={page}
                    modul={modul}
                    isPages={isPages}
                    updateNav={this.updateNav}
                    showSetAccount={this.showSetAccount}/>
                <Body
                    nav={nav}
                    pages={config.pages}
                    page={page}
                    modul={modul}
                    openPage={this.openPage}
                    openModul={this.openModul}/>
                {setAccount ? <AccountSet close={this.showSetAccount}/> : null}
                {setProject ? <ProjectSet close={this.showSetProject}/> : null}
            </div>
        )

    }

}