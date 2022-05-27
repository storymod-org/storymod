import React, { Component } from 'react'

import ModalSetView from '../../../components/modal/modal-set/modal-set-view/modal-set-view'

import avatar from '../../../../user/media/avatar.jpeg'
import InputImageSmall from '../../../components/input/input-image-small'
import InputContentText from '../../../components/input/input-content-text'
import InputSellectCell from '../../../components/input/input-sellect-cell'
import Button from '../../../components/button/button'


export default class Account extends Component {

	save() {
		console.log('Save')
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
						<h3>Информация об аккаунте</h3>
					</div>

					<div className='stm-modal-set-main-input'>

						<div className='stm-modal-set-main-input__avatar'>
							<InputImageSmall
								value={avatar}/>
						</div>

						<div className='stm-modal-set-main-input__input'>
							<InputContentText
								placeholder='Введите имя'/>
						</div>

					</div>

					<InputSellectCell
						name='E-Mail'
						value='kononovm33@gmail.com'
						active={() => setNav(1)}/>

					<InputSellectCell
						name='Пароль'
						value='•••••••••••'
						active={() => setNav(2)}/>

					<InputSellectCell
						name='Подписка'
						value='Бесплатно'
						active={() => setNav(3)}/>

				</div>

				<div className='stm-modal-set-block'>

					<Button
						state='default-primary'
						text='Выйти'/>
						
					<Button
						state='destruct-secondary'
						text='Удалить аккаунт'/>

				</div>
	
			</ModalSetView>
			
		)

	}

}