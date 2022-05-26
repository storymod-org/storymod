import React from 'react'


import avatar from '../../../../user/media/avatar.jpeg'
import InputImageSmall from '../../../components/input/input-image-small'
import InputContentText from '../../../components/input/input-content-text'
import InputSellectCell from '../../../components/input/input-sellect-cell'
import Button from '../../../components/button/button'

const Account = ({setBody, setNav}) => {
	return (

		<div className='stm-account-set'>

			<div className='stm-account-set__block stm-account-set__container'>

				<div className='stm-account-set__title'>
					<h3>Информация об аккаунте</h3>
				</div>

				<div className='stm-account-set__main-input'>

					<div className='stm-account-set__main-input__avatar'>
						<InputImageSmall
							value={avatar}/>
					</div>

					<div className='stm-account-set__main-input__input'>
						<InputContentText
							placeholder='Введите имя'/>
					</div>

				</div>

				<div>
					<InputSellectCell
						name='E-Mail'
						value='kononovm33@gmail.com'
						active={() => setBody(1)}/>
				</div>

				<div>
					<InputSellectCell
						name='Пароль'
						value='•••••••••••'
						active={() => setBody(2)}/>
				</div>

				<div>
					<InputSellectCell
						name='Подписка'
						value='Бесплатно'
						active={() => setNav(1)}/>
				</div>

			</div>

			<div className='stm-account-set__block stm-account-set__container'>

				<div>
					<Button
						state='default-primary'
						text='Выйти'/>
				</div>

				<div>
					<Button
						state='destruct-secondary'
						text='Удалить аккаунт'/>
				</div>

			</div>

		</div>
		
	)
}

export default Account