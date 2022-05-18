import React, {Component} from "react";
import './account-set.scss';
import Settings from "../settings";

import Account from "./account";
import Email from "./email";
import Password from "./password";
import Subscription from "./subscription";

export default class AccountSet extends Component {

    constructor(props) {
        super(props)
        this.state = {

            active: 0,

            head: {
                name: 'Аккаунт',
                save: false,
                back: false
            },

            body: <Account activeEmail={this.activeEmail}/>,

            elements: [
                {
                    id: 0,
                    active: true,
                    name: 'Аккаунт',
                    icon: 'menu-account',
                    save: true,
                    body: <Account activeEmail={this.activeEmail}/>,

                    children: [
                        {
                            id: 0,
                            name: 'E-Mail',
                            save: true,
                            body: <Email/>
                        },
                        {
                            id: 1,
                            name: 'Пароль',
                            save: true,
                            body: <Password/>
                        },
                    ]

                },
                {
                    id: 1,
                    active: false,
                    name: 'Подписка',
                    icon: 'menu-subscription',
                    save: false,
                    body: <Subscription/>
                },
                {
                    id: 2,
                    active: false,
                    name: 'Настройки',
                    icon: 'menu-settings',
                    save: false,
                    body: <div>Placeholder</div>
                }
            ]
        }
        this.setNavigation = this.setNavigation.bind(this)
    }

    setNavigation(id) {

        this.setState(({elements}) => {

            const resetCells = elements.map((cells) => {
                const cell = {...cells, active: false}
                return cell
            })

            const activeCell = {...elements[id], active: true}
            const newCell = [...resetCells.slice(0, id), activeCell, ...resetCells.slice(id + 1)];

            return {
                active: id,
                elements: newCell
            }
        })
    }

    render() {

        const {active, accountPage} = this.state
        let content;

        // if (active === 0 && accountPage === 'main') {

        //     content = <Account
        //                 activeEmail={this.activeEmail}/>

        // } else if (active === 0 && accountPage === 'email') {

        //     content = <Email/>

        // } else if (active === 0 && accountPage === 'password') {

        //     content = <Password/>
            
        // }else if (active === 1) {

        //     content = <Subscription/>

        // } else if (active === 2) {
        //     content = <div>Placeholder</div>
        // } else {
        //     content = <div>Ошибка</div>
        // }

        return (

            <Settings
                title='Настройки'
                elements={this.state.elements}
                id={this.state.active}
                content={this.state.body}
                head={this.state.head}
                cellAction={this.setNavigation}/>

        )
    }
}