import React, {Component} from 'react'
import './main-bar.scss'

import Header from './header/header'
import Body from './body/body'

export default class MainBar extends Component {

	state = {
		nav: 0,
	}

	updateNav(nav) {
		this.setState({nav})
	}

	render() {

		const {nav} = this.state

		const {

			config,
			isPages,
			
			usePublishSet,
			useMainMenu,
			showActions

		} = this.props

		return (

			<div className='stm-main-bar'>

				<Header
					config={config}
					nav={nav}
					isPages={isPages}

					updateNav={this.updateNav}
					usePublishSet={usePublishSet}
					useMainMenu={useMainMenu}
					showActions={showActions}/>

				<Body
					nav={nav}
					updateNav={this.updateNav}/>
	
			</div>

		)

	}

}