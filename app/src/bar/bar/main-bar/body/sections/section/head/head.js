import React from 'react'
import './head.scss'

import ButtonIcon from '../../../../../../components/button/button-icon'

const Head = ({

	name,
	add,
	remove

}) => {

	return (

		<div className='stm-section-head'>

			<div className="stm-section-head__title">
				<h2>{name}</h2>
			</div>

			<div className="stm-section-head__btns">

				{add ? 

					<ButtonIcon
						size='small'
						state='default-secondary'
						icon='action-remove'/> : null}

				{remove ?
					
					<ButtonIcon
						size='small'
						state='default-secondary'
						icon='action-add'/> : null}
						
			</div>
			
		</div>

	)

}

export default Head