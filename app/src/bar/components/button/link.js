import React, {Component} from 'react'
import './link.scss'

export default class Link extends Component {

	render() {

		const {size, text, link} = this.props
		const className = `stm-link stm-link--${size}`

		return (

			<a
				href={link}
				className={className}>
				{text}
			</a>

		)

	}

}