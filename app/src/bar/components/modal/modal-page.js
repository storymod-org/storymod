import React from 'react'
import './modal-page.scss'

import Header from './header/header'
import Cells from '../cells/cells'

const ModalPage = ({
	
	cells,
	title,
	icon,
	close

}) => {

	return (

		<div className='stm-modal-page'>

			<Header
				title={title}
				close={close}/>

			<div className="stm-modal-page__content">

				<Cells
					cells={cells}
					icon={icon}/>

			</div>
		</div>
	)

}

export default ModalPage