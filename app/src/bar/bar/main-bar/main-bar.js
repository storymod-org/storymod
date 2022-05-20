import React, {Component} from 'react'
import './main-bar.scss'

import Header from './bar/main-bar/header/header'
import Pages from './pages/pages'
import Modules from './modules/modules'
import Sections from './sections/sections'

export default class MainBar extends Component {

	state = {
		nav: 0
	}

	updateNav(nav) {
		this.setState({nav})
	}

	render() {

		const {nav} = this.state
		const {config, isPages} = this.props
	
		const body = () => {

			switch(nav) {

			case 0:
				return <Pages/>
			case 1:
				return <Modules/>
			case 3:
				return <Sections/>
			default:
				<div>Placeholder</div>		
			}
		}

		return (

			<div className='stm-main-bar'>

				<Header
					config={config}
					nav={nav}
					isPages={isPages}

					updateNav={this.updateNav}
					usePublishSet={usePublishSet}
					useMainMenu={useMainMenu}/>

				<div className='stm-main-bar__body'>
					{body}
				</div>
	
			</div>

		)

	}

}