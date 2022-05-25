import React from 'react'
import Modal from '../../../../components/modal/modal'
import ModalInputs from '../../../../components/modal/modal-inputs'

const PagesModal = ({close}) => {

	return (

		<Modal 

			type="medium"
			title='Создание страницы'
			close={close}>

			<ModalInputs

				inputs={[
					{
						id: 0,
						label: 'Название страницы',
						placeholder: 'Введите название страницы'
					},
					{
						id: 1,
						label: 'Адрес страницы',
						placeholder: 'Введите адрес страницы'
					}
					
				]}

				activeBtn={{
					text: 'Создать'}}/>

		</Modal>
		
	)
	
}

export default PagesModal