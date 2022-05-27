import React, {Component} from 'react'
import './button-more.scss'

import ButtonIcon from './button-icon'
import Dropdown from '../dropdown/dropdown'

export default class ButtonMore extends Component {

	constructor(props) {
		super(props)
		this.state = {
			show: false
		}
		this.toggle = this.toggle.bind(this)
	}

	toggle() {
		this.setState({show: !this.state.show})
	}

	render() {

		const {actions} = this.props
		const {show} = this.state

		return (

			<div className='stm-button-more'>

				<ButtonIcon
					icon='action-more'
					action={this.toggle}/>

				<div className='stm-button-more__dropdown'>
					{show ? <Dropdown actions={actions}/> : null}
				</div>
			</div>

		)
	}
}