import React, {Component} from "react";
import './account-set.scss';
import Settings from "../settings";
import account from './account.json';

import Account from "./account";
import Email from "./email";
import Password from "./password";

export default class AccountSet extends Component {

    constructor(props) {
        super(props)
        this.state = {
            active: 0,
            accountPage: 'password'
        }
    }

    render() {

        const {active, accountPage} = this.state
        let content;

        if (active === 0 && accountPage === 'main') {
            content = <Account/>
        } else if (active === 0 && accountPage === 'email') {
            content = <Email/>
        } else if (active === 0 && accountPage === 'password') {
            content = <Password/>
        } else {
            content = <div>Ошибка</div>
        }

        return (

            <Settings
                title='Настройки'
                elements={account}
                id={this.state.active}
                content={content}/>

        )
    }
}