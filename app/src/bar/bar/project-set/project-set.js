import React, {Component} from "react";
import './project-set.scss';
import Settings from "../settings";

export default class ProjectSet extends Component {

    constructor(props) {
        super(props)
        this.state = {

            active: 0,
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
                            component: <div>fwefwfwfw</div>,
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