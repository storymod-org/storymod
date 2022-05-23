import React from 'react'
import './modal-settings.scss'

import Button from '../../button/button'
import ButtonIcon from '../../button/button-icon'
import Modal from '../modal'
import Cells from '../../cells/cells'

const ModalSettings = ({

	title,
	close,

	cells,
	cellAction,
	active,

	body,
	setBody

}) => {

	const button = (
		<div className='stm-set-header__button'>
			<Button
				state='accent'
				text='Сохранить'/>    
		</div>
	)

	const back = (
		<div className='stm-set-header__back'>
			<ButtonIcon
				state='default-secondary'
				size='big'
				icon='action-back'
				action={() => setBody(0)}/>
		</div>
	)

	return (

		<Modal

			type='big'
			title={title}
			close={close}>

			<div className='stm-settings'>

				<div className='stm-settings__sidebar'>

					<Cells 
						cells={cells}
						action={cellAction}
						active={active}/>

				</div>

				<div className='stm-settings__view'>

					<div className='stm-set-header'>

						{body.back ? back : null}

						<div className='stm-set-header__title'>
							<h2>{body.name}</h2>
						</div>

						{body.save ? button : null}

					</div>

					<div className='stm-settings__content'>
						{body.component}
					</div>

				</div>

			</div>

		</Modal>
	
	)

}

export default ModalSettings