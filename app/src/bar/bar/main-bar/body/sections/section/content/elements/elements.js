import React, {Component} from 'react'
import './elements.scss'

import InputContentText from '../../../../../../../components/input/input-content-text'

export default class Elements extends Component {

	render() {

		const {elements} = this.props

		if (!elements) {
			return null
		}

		const renderElements = elements.map((element) => {
			
			if (element.type === 'content-text') {

				return (

					<div key={element.id} className='stm-section-elements'>

						<InputContentText placeholder={element.placeholder}/>

					</div>

				)
			} else {

				return console.log('Elements Error')

			}
				
		})

		return (
			<div className='stm-section-elements__list'>
				{renderElements}
			</div>
		)

	}

}