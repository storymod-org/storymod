import React, {Component} from 'react'
import './dropdown.scss'

export default class Dropdown extends Component {

	render() {

		const {elements, show} = this.props
		const className = `stm-dropdown ${show ? 'stm-dropdown--show' : null}`

		// const elem = elements.map((element) => {
			
		//     return (
		//         <div
		//             className='stm-dropdown__element'
		//             onClick={element.action}
		//             key={element.id}>
		//             {element.text}
		//         </div>
		//     )

		// })

		return (

			<div
				className={className}>
				{'elem'}
			</div>

		)

	}

}