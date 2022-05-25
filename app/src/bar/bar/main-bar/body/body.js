import React from 'react'
import './body.scss'

import Pages from './pages/pages'
import Modules from './modules/modules'
import Sections from './sections/sections'

const Body = ({

	projectNav,

	useActionPage,
	usePage,
	pages,

	useActionModul,
	useModul,
	modules,

	sections

}) => {

	const body = () => {

		switch(projectNav.nav) {

		case 0:
			return (

				<Pages
					useActionPage={useActionPage}
					pages={pages}
					usePage={usePage}/>
				
			)
		case 1:
			return (

				<Modules
					useActionModul={useActionModul}
					modules={modules}
					useModul={useModul}/>
				
			)
		case 2:
			return (

				<Sections
					sections={sections}/>
				
			)
		default:
			<div>Placeholder</div>		
		}
	}

	return (
		<div className='stm-body'>
			{body()}
		</div>
	)

}

export default Body