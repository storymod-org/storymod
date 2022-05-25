import React, {Component} from 'react'
import './account-set.scss'

import ModalSettings from '../../components/modal/modal-settings/modal-settings'
import Account from './account/account'
import Email from './email/email'
import Password from './password/password'
import Subscription from './subscription/subscription'

export default class AccountSet extends Component {

	state = {

		active: 0,
		children: 0,
		elements: [

			{
		
				id: 0,
				name: 'Аккаунт',
				icon: 'menu-account',
				active: true,
				save: true,
				component: <Account setBody={this.setBody} setNav={this.setNav}/>,
		
				children: [
					{
						id: 0,
						name: 'E-Mail',
						save: true,
						component: <Email/>
					},
					{
						id: 1,
						name: 'Пароль',
						save: true,
						component: <Password/>
					},
				]
			},
			{
		
				id: 1,
				name: 'Подписка',
				icon: 'menu-subscription',
				active: false,
				save: false,
				component: <Subscription/>
		
			},
			{
		
				id: 2,
				name: 'Настройки',
				icon: 'menu-settings',
				active: false,
				disable: true,
				save: false,
				component: <div>Placeholder</div>
				
			}
		]

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
			const newCell = [...resetCells.slice(0, id), activeCell, ...resetCells.slice(id + 1)]

			return {
				active: id,
				elements: newCell,
				body: 0
			}
		})
	}

	render() {

		const {active, body, elements} = this.state
		const {useAccountSet} = this.props
		
		return (

			<ModalSettings
				title='Настройки'
				cells={elements}
				body={elements[active].body[body]}
				active={active}
				cellAction={this.setNavigation}
				setBody={this.setBody}
				close={useAccountSet}/>

		)
	}
}