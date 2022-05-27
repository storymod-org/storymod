import React, {Component} from 'react'

import ModalSet from '../../components/modal/modal-set/modal-set'
import Account from './children/account'
import Email from './children/email'
import Password from './children/password'
import Subscription from './children/subscription'

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
				save: true

			},
			{

				id: 1,
				child: true,
				parentID: 0,
				name: 'E-Mail',
				save: true

			},
			{

				id: 2,
				child: true,
				parentID: 0,
				name: 'Пароль',
				save: true

			},
			{
		
				id: 3,
				name: 'Подписка',
				icon: 'menu-subscription',
				save: false
		
			},
			{
		
				id: 4,
				name: 'Настройки',
				icon: 'menu-settings',
				disable: true,
				save: false
				
			}
		]

	}

	setNav = (active) => {
		this.setState({active})
	}

	render() {

		const {

			active,
			elements

		} = this.state

		const {useAccountSet} = this.props

		const cells = elements.filter(element => element.icon)

		const component = () => {

			switch(active) {

			case 0:
				return (
					<Account
						setNav={this.setNav}
						element={elements[active]}/>
				)
			
			case 1:
				return (
					<Email
						setNav={this.setNav}
						element={elements[active]}/>
				)
			
			case 2:
				return (
					<Password
						setNav={this.setNav}
						element={elements[active]}/>
				)

			case 3:
				return (
					<Subscription
						setNav={this.setNav}
						element={elements[active]}/>
				)

			case 4:
				return <div>Placeholder</div>
				
			default:
				return console.log('Body component error')	

			}

		}
		
		return (

			<ModalSet
			
				title='Настройки'
				close={useAccountSet}

				cells={cells}
				active={active}
				action={this.setNav}>

				{component()}

			</ModalSet>

		)
	}
}