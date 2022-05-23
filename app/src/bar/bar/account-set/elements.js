import React from 'react'

import Account from './account/account'
import Email from './email/email'
import Password from './password/password'
import Subscription from './subscription/subscription'

const elements = [

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

export default elements