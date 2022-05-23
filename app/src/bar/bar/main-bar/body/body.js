import React from 'react'
import './body.scss'

import Pages from './pages/pages'
import Modules from './modules/modules'
import Sections from './sections/sections'

const Body = ({nav}) => {

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
		<div className='stm-body'>
			{body}
		</div>
	)

}

export default Body