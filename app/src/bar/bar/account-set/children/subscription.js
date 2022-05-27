import React from 'react'

import ModalSetView from '../../../components/modal/modal-set/modal-set-view/modal-set-view'
import Button from '../../../components/button/button'

const Subscription = ({

	setNav,
	element

}) => {
	
	return (

		<ModalSetView
			setNav={setNav}
			element={element}>

			<div className='stm-modal-set-block'>

				<div className='stm-modal-set-title'>
					<h3>Информация о тарифе</h3>
				</div>

				<div className='stm-modal-set-info'>
					<div className='stm-modal-set-info__title'><p>Ваш тариф</p></div>
					<div className='stm-modal-set-info__text'><p>Про</p></div>
				</div>

				<div className='stm-modal-set-info'>
					<div className='stm-modal-set-info__title'><p>Стоимость</p></div>
					<div className='stm-modal-set-info__text'><p>399 ₽</p></div>
				</div>

				<div className='stm-modal-set-info'>
					<div className='stm-modal-set-info__title'><p>Следущее списание</p></div>
					<div className='stm-modal-set-info__text'><p>19 Декабря</p></div>
				</div>

				<div className='stm-modal-set-info'>
					<div className='stm-modal-set-info__title'><p>Сайтов</p></div>
					<div className='stm-modal-set-info__text'><p>3 / 5</p></div>
				</div>

				<div className='stm-modal-set-info'>
					<div className='stm-modal-set-info__title'><p>Хранилище</p></div>
					<div className='stm-modal-set-info__text'><p>5 Mb / 100 Mb</p></div>
				</div>

			</div>

			<div className='stm-modal-set-block'>

				<Button
					state='default-primary'
					text='Посмотреть другие тарифы'/>

				<Button
					state='default-secondary'
					text='Отменить подписку'/>

			</div>

		</ModalSetView>
		
	)
}

export default Subscription