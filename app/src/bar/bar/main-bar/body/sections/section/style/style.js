import React from 'react'
import './style.scss'

import InputContentText from '../../../../../../components/input/input-content-text'

const Style = ({styles}) => {

	if (!styles) {
		return null
	}

	const renderStyles = styles.map((style) => {	

		if (style.type === 'content-text') {

			return (
				<div key={style.id} className="stm-section-style">
					<InputContentText placeholder={style.placeholder}/>
				</div>)

		} else {

			return console.log('Error')
			
		}

	})

	return (
		<div className="stm-section-style__list">
			{renderStyles}
		</div>
	)

}

export default Style