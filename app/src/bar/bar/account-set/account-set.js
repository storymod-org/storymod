import React, {Component} from 'react'
import './account-set.scss'

import ModalSettings from '../../components/modal/modal-settings/modal-settings'
import Account from './account/account'
import Email from './email/email'
import Password from './password/password'
import Subscription from './subscription/subscription'

export default class AccountSet extends Component {

	constructor() {
		super()
		this.setNav = this.setNav.bind(this)
	}

	state = {

		active: 0,

		elements: [

			{
		
				id: 0,
				name: 'Аккаунт',
				icon: 'menu-account',
				save: true,
				component: <Account setBody={this.setBody} setNav={this.setNav}/>

			},
			{

				id: 1,
				parentID: 0,
				name: 'E-Mail',
				save: true,
				component: <Email/>

			},
			{

				id: 2,
				parentID: 0,
				name: 'Пароль',
				save: true,
				component: <Password/>

			},
			{
		
				id: 3,
				name: 'Подписка',
				icon: 'menu-subscription',
				save: false,
				component: <Subscription/>
		
			},
			{
		
				id: 4,
				name: 'Настройки',
				icon: 'menu-settings',
				disable: true,
				save: false,
				component: <div>Placeholder</div>
				
			}
		]

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

		const {
			active,
			elements
		} = this.state

		const {useAccountSet} = this.props

		const cells = elements.filter(element => element.icon)
		
		return (

			<ModalSettings
			
				title='Настройки'
				cells={cells}
				body={elements[active].component}
				active={active}
				cellAction={this.setNavigation}
				setBody={this.setBody}
				close={useAccountSet}/>

		)
	}
}