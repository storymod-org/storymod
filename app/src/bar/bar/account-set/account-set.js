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

            active: 1,
            body: 0,

            elements: [
                {
                    id: 0,
                    active: true,
                    name: 'Аккаунт',
                    icon: 'menu-account',

                    body: [
                        {
                            id: 0,
                            name: 'Аккаунт',
                            save: true,
                            component: <Account setBody={this.setBody} setNav={this.setNav}/>,
                        },
                        {
                            id: 1,
                            name: 'E-Mail',
                            save: true,
                            component: <Email/>,
                            back: true
                        },
                        {
                            id: 2,
                            name: 'Пароль',
                            save: true,
                            component: <Password/>,
                            back: true
                        },
                    ]

                },
                {
                    id: 1,
                    active: false,
                    name: 'Подписка',
                    icon: 'menu-subscription',

                    body: [
                        {
                            id: 0,
                            name: 'Подписка',
                            save: false,
                            component: <Subscription/>
                        }
                    ]
                },
                {
                    id: 2,
                    active: false,
                    name: 'Настройки',
                    icon: 'menu-settings',
                    disable: true,

                    body: [
                        {
                            id: 0,
                            name: 'Настройки',
                            save: false,
                            component: <div>Placeholder</div>
                        }
                    ]
                }
            ]
        }
        this.setNavigation = this.setNavigation.bind(this)
        this.setBody = this.setBody.bind(this)
        this.setNav = this.setNav.bind(this)
    }

    setBody = (body) => {
        this.setState({body})
    }

    setNav = (active) => {
        this.setState({active})
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
                elements: newCell,
                body: 0
            }
        })
    }

    render() {

        const {active, body, elements} = this.state
        const {close} = this.props
        
        return (

            <Settings
                title='Настройки'
                cells={elements}
                body={elements[active].body[body]}
                active={active}
                cellAction={this.setNavigation}
                setBody={this.setBody}
                close={close}/>

        )
    }
}