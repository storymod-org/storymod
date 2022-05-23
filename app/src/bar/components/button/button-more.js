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
		this.toggleDropdown = this.toggleDropdown.bind(this)
	}

	toggleDropdown() {
		this.setState({show: !this.state.show})
	}

	render() {

		const {actions} = this.props

		return (
			<div className='stm-button-more'>
				<ButtonIcon
					size='big'
					state='default-secondary'
					icon='action-more'
					action={this.toggleDropdown}/>
				<div className='stm-button-more__dropdown'>
					<Dropdown actions={actions} show={this.state.show}/>
				</div>
			</div>
		)
	}
}