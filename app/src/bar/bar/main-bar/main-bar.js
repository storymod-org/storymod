import React, {Component} from 'react'
import './main-bar.scss'

import Header from './header/header'
import Body from './body/body'

export default class MainBar extends Component {

	state = {

		isActionPage: false,
		isActionModul: false,
		isActionSection: false,

		actionPage: [
			{
				id: 0,
				text: 'Изменить название',
				action: null
			},
			{
				id: 1,
				text: 'Изменить адрес',
				action: null
			},
			{
				id: 2,
				text: 'Удалить',
				action: null
			}
		],

		actionModul: [
			{
				id: 1,
				text: 'Изменить название',
				action: null
			},
			{
				id: 2,
				text: 'Изменить адрес',
				action: null
			},
			{
				id: 3,
				text: 'Удалить',
				action: null
			}
		]

	}

	useActionPage() {
		this.setState({isActionPage: !this.state.isActionPage})
	}

	useActionModul() {
		this.setState({isActionModul: !this.state.isActionModul})
	}

	useActionSection() {
		this.setState({isActionSection: !this.state.isActionSection})
	}

	render() {

		const {

			projectNav,
			updateNav,
			config,
			isPages,
			
			usePublishSet,
			useMainMenu,
			usePage,
			useModul

		} = this.props

		return (

			<div className='stm-main-bar'>

				<Header

					config={config}
					projectNav={projectNav}
					isPages={isPages}

					updateNav={updateNav}
					usePublishSet={usePublishSet}
					useMainMenu={useMainMenu}
					useActionModul={this.useActionModul}
					useActionSection={this.useActionSection}/>

				<Body

					projectNav={projectNav}
					updateNav={this.updateNav}

					useActionPage={this.useActionPage}
					usePage={usePage}
					pages={config.pages}
					
					useActionModul={this.useActionModul}
					useModul={useModul}
					modules={config.pages[projectNav.page].modules}
					
					sections={config.pages[projectNav.page].modules[projectNav.modul].sections}/>
	
			</div>

		)

	}

}