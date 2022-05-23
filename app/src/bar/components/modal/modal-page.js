import React from 'react'
import './modal-page.scss'

import Header from './header/header'
import Cells from '../cells/cells'

const ModalPage = ({cells, title, icon, show, close}) => {

	return (

		<div className={`stm-modal-page ${show ? 'stm-modal-page--show' : ''}`}>
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