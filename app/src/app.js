import React, {Component} from 'react'
import Project from './project/project'
import Bar from './bar/bar'
import config from './user/config.json'
import './app.scss'

export default class App extends Component {

	state = {
		nav: {
			page: 0,
			modul: 0,
			section: 0
		}
	}

	updateProject(nav) {
		console.log(nav)
	}

	changeProject(nav, element, value) {
		console.log(nav, element, value)
	}

	openPage(page) {
		this.setState({page})
	}

	openModul(modul) {
		this.setState({modul}) 
	}

	render() {

		const {nav} = this.state

		return (

			<div className='stm-app'>

				<Project
					modules={config.pages[nav.page].modules}/>

				<div className='stm-app__bar'>
					<Bar
						activeItem={nav}
						config={config}/>
				</div>

			</div>

		)
	}
}