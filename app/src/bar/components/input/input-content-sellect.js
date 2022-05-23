import React, {Component} from 'react'
import './input.scss'
import './input-content-sellect.scss'
import Dropdown from '../dropdown/dropdown'

export default class InputContentSellect extends Component {

	render() {

		const {disabled, placeholder, elements} = this.props

		return (
			<div className="stm-input-content-sellect">
				<input
					className='stm-input stm-input-content-sellect__input'
					readOnly
					placeholder={placeholder}
					disabled={disabled}/>
				<div className='stm-input-content-sellect__action-sheet stm-hide'>
					<Dropdown
						elements={elements}/>
				</div>
			</div>
		)

	}

}