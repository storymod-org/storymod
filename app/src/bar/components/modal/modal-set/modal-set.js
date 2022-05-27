import React from 'react'
import './modal-set.scss'

import Modal from '../modal'
import Cells from '../../cells/cells'

const ModalSet = ({

	title,
	close,

	cells,
	action,
	active,

	children

}) => {

	return (

		<Modal

			type='big'
			title={title}
			close={close}>

			<div className='stm-modal-set'>

				<div className='stm-modal-set__sidebar'>

					<Cells 
						cells={cells}
						action={action}
						active={active}/>

				</div>

				{children}

			</div>

		</Modal>
	
	)

}

export default ModalSet