import React from 'react'
import './main-menu.scss'

import user from '../../../user/user/user.json'
import projects from '../../../user/projects/projects.json'

import Button from '../../components/button/button'
import CellBig from '../../components/cells/cell/cell-big'

const MainMenu = ({
	
	useAccountSet

}) => {

	const renderProjects = projects.map((project) => {

		return (

			<CellBig
				key={project.id}
				title={project.name}
				subtitle={project.href}
				logo={'../../../user/projects/storycrafter/media/house.jpg'}
				alt='logo'
				action={useAccountSet}/>

		)

	})

	return (
		
		<div className="stm-main-menu">

			<div className="stm-main-menu__header">

				<CellBig
					title={user.name}
					subtitle={user.email}
					logo={`../../../user/${user.avatar}`}
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

export default MainMenu

// const Projects = ({projects}) => {
// 	return projects.map((item) => {

// 		const active = item.active ? 'stm-main-menu__project--active' : null

// 		return (
// 			<div key={item.id} className={`stm-main-menu__project ${active}`}>
// 				<div className="stm-main-menu__project-logo">
// 					<img src={`${process.env.PUBLIC_URL}/user/${item.logo}`} alt='logo'/>
// 				</div>
// 				<div className="stm-main-menu__project-content">
// 					<h3>{item.name}</h3>
// 					<p>{item.href}</p>
// 				</div>
// 			</div>
// 		)
// 	})
// }




{/* <div
onClick={useAccountSet}
className="stm-main-menu__header">
	
<div className="stm-main-menu__avatar">
	<img src={`${process.env.PUBLIC_URL}/user/${db.user.avatar}`} alt='avatar'/>
</div>
<div className="stm-main-menu__content">
	<h3>{db.user.name}</h3>
	<p>{db.user.email}</p>
</div>
</div> */}