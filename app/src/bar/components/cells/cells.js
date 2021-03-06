import React from 'react'
import './cells.scss'

import Cell from './cell/cell'

const Cells = ({

	cells,
	action,
	option,
	type,
	active

}) => {

	let className = 'stm-cell-list'

	const elements = cells.map((item) => {

		const activeID = active === item.id

		return (
			<Cell 
				key={item.id} 
				icon={item.icon} 
				type={type}
				text={item.name} 
				option={option} 
				action={() => action(item.id)}
				active={activeID}
				disable={item.disable}/>
		)
	})

	return (
		<div className={className}>{elements}</div>
	)

}

export default Cells