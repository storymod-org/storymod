import React, { Component } from 'react'
import './main-menu.scss'

import userData from '../../services/userData'

import Button from '../../components/button/button'
import CellBig from '../../components/cells/cell/cell-big'

export default class MainMenu extends Component {

	constructor() {
		super()
		this.updateUser()
	}
	
	userData = new userData()

	state = {

		projects: [],

		name: null,
		id: null,
		email: null,
		avatar: null,
		openProject: null

	}

	updateUser() {

		this.userData.getUser()
			.then((user) => {
				this.setState({
					name: user.name,
					id: user.id,
					email: user.email,
					avatar: user.avatar,
					openProject: user.openProject,
					projects: user.projects
				})
			})

	}

	render() {
		
		const {
			
			useAccountSet
		
		} = this.props

		const {

			name,
			id,
			email,
			avatar,
			openProject,
			projects
		
		} = this.state

		const renderProjects = projects.map((project) => {

			return (
	
				<CellBig
					key={project.id}
					title={project.name}
					subtitle={project.href}
					logo={`${process.env.PUBLIC_URL}/users/${id}/projects/${openProject}/${project.logo}`}
					alt='logo'
					active={project.active}
					action={useAccountSet}/>
	
			)
	
		})
	
		return (
			
			<div className="stm-main-menu">
	
				<div className="stm-main-menu__header">
	
					<CellBig
						title={name}
						subtitle={email}
						logo={`${process.env.PUBLIC_URL}/users/${id}/user/${avatar}`}
						alt='avatar'
						action={useAccountSet}/>
	
				</div>
	
				<div className="stm-main-menu__body">
	
					<div className="stm-main-menu__projects">
						{renderProjects}
					</div>
	
					<div className="stm-main-menu__button">
	
						<Button
							state='default-primary'
							text='Добавить проект'/>
	
					</div>
				</div>
	
			</div>
		)

	}

}