import React, {Component} from 'react'
import './buttons.scss'

export default class Button extends Component {

	render() {
		const {state, size} = this.props
		const classString = `btn btn-${state} btn-${size}`
		return (<div className={classString}>Кнопка</div>)
	}

}