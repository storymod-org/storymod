import React from 'react'
import './modal-set-view.scss'

import Button from '../../../button/button'
import ButtonIcon from '../../../button/button-icon'

const ModalSetView = ({

	save,
	setNav,
	element,

	children

}) => {

	const saveBtn = (
		<div className='stm-modal-set-view__save'>

			<Button
				state='accent'
				text='Сохранить'
				action={save}/>    
		</div>
	)

	const back = (
		<div className='stm-modal-set-view__back'>

			<ButtonIcon
				state='default-secondary'
				size='big'
				icon='action-back'
				action={() => setNav(element.parentID)}/>
		</div>
	)

	return (

		<div className='stm-modal-set-view'>

			<div className='stm-modal-set-view__header'>

				{element.child ? back : null}

				<div className='stm-modal-set-view__title'>
					<h2>{element.name}</h2>
				</div>

				{element.save ? saveBtn : null}

			</div>

			<div className='stm-modal-set-view__content'>
				{children}
			</div>

		</div>

	)

}

export default ModalSetView