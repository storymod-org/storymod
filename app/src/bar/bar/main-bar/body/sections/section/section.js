import React, {Component} from 'react'
import './section.scss'

import Head from './head/head'
import Style from './style/style'
import Content from './content/content'

export default class Section extends Component {

	render() {

		const {section} = this.props

		return (
			<div className="stm-section">

				<Head name={section.name} add={section.add} remove={section.remove}/>
				<Style styles={section.styles}/>
				<Content content={section.content} remove={section.remove}/>

			</div>
		)
	}

}