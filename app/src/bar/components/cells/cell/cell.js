import React, {Component} from 'react'
import './cell.scss'

export default class Cell extends Component {

	render() {

		const {icon, text, option, active, disable, action, type} = this.props
		
		let className = ['stm-cell']
		const srcIcon = `bar/icons/${icon}.svg`

		if (type=== 'button') {
			className.push('stm-cell--button')
		}
		if (active) {
			className.push('stm-cell--active')
		}
		if (disable) {
			className.push('stm-cell--disable')
		}

		return (

			<div 
				className={className.join(' ')} 
				onClick={disable ? null : action}
				disabled={disable}>
				<div className="stm-cell__icon"><img src={srcIcon} alt='Icon'/></div>
				<div className="stm-cell__text"><p>{text}</p></div>
				<div className="stm-cell__option">{option}</div>
			</div>

		)

	}

}