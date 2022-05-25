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
			nav: 0,
			page: 0,
			modul: 0,
			section: 0
		}
		this.updateNav = this.updateNav.bind(this)
		this.usePage = this.usePage.bind(this)
		this.useModul = this.useModul.bind(this)
	}

	updateNav(nav) {
		this.setState({nav})
	}

	usePage(page) {
		this.setState({
			page: page,
			nav: 1
		})
	}

	useModul(modul) {
		this.setState({
			modul: modul,
			nav: 2
		}) 
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
						updateNav={this.updateNav}
						config={config}
						usePage={this.usePage}
						useModul={this.useModul}/>
				</div>

			</div>

		)
	}
}