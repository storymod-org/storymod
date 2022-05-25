// Навигация по проекту

import React, {Component} from 'react'
import Project from './project/project'
import Bar from './bar/bar'
import config from './user/config.json'
import './app.scss'

export default class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			page: 0,
			modul: 0,
			section: 0
		}
		this.usePage = this.usePage.bind(this)
	}

	updateProject(projectNav) {
		console.log(projectNav)
	}

	changeProject(projectNav, element, value) {
		console.log(projectNav, element, value)
	}

	usePage(page) {
		this.setState({page})
	}

	useModul(modul) {
		this.setState({modul}) 
	}

	render() {

		const {page} = this.state

		return (

			<div className='stm-app'>

				<Project
					modules={config.pages[page].modules}/>

				<div className='stm-app__bar'>
					<Bar
						projectNav={this.state}
						config={config}
						usePage={this.usePage}
						useModul={this.useModul}/>
				</div>

			</div>

		)
	}
}