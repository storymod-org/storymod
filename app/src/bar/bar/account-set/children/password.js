import React, { Component } from 'react'

import ModalSetView from '../../../components/modal/modal-set/modal-set-view/modal-set-view'
import InputContentText from '../../../components/input/input-content-text'

export default class Password extends Component {

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
						<h3>Изменение Пароля</h3>
					</div>

					<InputContentText
						placeholder='Введите текущий пароль'/>

					<InputContentText
						placeholder='Введите новый пароль'/>

					<InputContentText
						placeholder='Подтвердите новый пароль'/>
				
				</div>

			</ModalSetView>
			
		)

	}

}