import React, {Component} from 'react'
import './input-image-small.scss'

export default class InputImageSmall extends Component {

	render() {

		const {value} = this.props

		const content = value ? 

			<div className='stm-input-image-small__image'>
				<img src={value} alt='Avatar'/>
			</div>
			: 
			<div className='stm-input-image-small__placeholder'>
				<img src='bar/icons/objects-account.svg' alt='Avatar'/>
			</div>

		return (

			<div className='stm-input-image-small'>
				{content}
			</div>

		)
	}

}