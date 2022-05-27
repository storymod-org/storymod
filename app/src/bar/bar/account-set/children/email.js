import React, { Component } from 'react'

import ModalSetView from '../../../components/modal/modal-set/modal-set-view/modal-set-view'
import InputContentText from '../../../components/input/input-content-text'

export default class Email extends Component {

	save() {
		console.log('Save Email')
	}

	render() {

		const {

			setNav,
			element

		} = this.props

		return (
			
			<ModalSetView
				setNav={setNav}
				element={element}
				save={this.save}>
	
				<div className='stm-modal-set-block'>

					<div className='stm-modal-set-title'>
						<h3>Изменение E-Mail</h3>
					</div>

					<InputContentText
						placeholder='Введите новый E-Mail'/>

					<InputContentText
						placeholder='Подтвердите новый E-Mail'/>

					<InputContentText
						placeholder='Введите пароль'/>

				</div>

			</ModalSetView>
			
		)

	}

}