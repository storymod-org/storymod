import React from 'react'
import './input-sellect-cell.scss'

const InputSellectCell = ({name, value, active}) => {
	return (

		<div onClick={active} className='stm-input stm-input-sellect-cell'>
		
			<div className='stm-input-sellect-cell__name'>
				<p>{name}</p>
			</div>

			<div className='stm-input-sellect-cell__value'>
				<p>{value}</p>
			</div>

		</div>

	)
}

export default InputSellectCell