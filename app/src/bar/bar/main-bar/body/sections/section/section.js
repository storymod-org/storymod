import React from 'react'
import './section.scss'

import Head from './head/head'
import Style from './style/style'
import Content from './content/content'

const Section = ({section}) => {

	return (
		<div className="stm-section">

			<Head name={section.name} add={section.add} remove={section.remove}/>
			<Style styles={section.styles}/>
			<Content content={section.content} remove={section.remove}/>

		</div>
	)

}

export default Section