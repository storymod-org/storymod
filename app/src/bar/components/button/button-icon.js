import React from 'react'
import './button-icon.scss'

const ButtonIcon = ({

	state,
	size,
	icon,
	action,
	disabled

}) => {

	const mainClass = ['stm-btn-icon']

	disabled ? 

		mainClass.push('stm-btn-icon--disabled') 
		
		: state ? 

			mainClass.push(`stm-btn-icon--${state}`) : 
			mainClass.push('stm-btn-icon--default-secondary')

	size ? 
	
		mainClass.push(`stm-btn-icon--${size}`) : 
		mainClass.push('stm-btn-icon--big')

	return (

		<button

			className={mainClass.join(' ')}
			onClick={disabled ? null : action}
			disabled={disabled}>

			<img src={`bar/icons/${icon}.svg`} alt='Icon'/>

		</button>

	)

}

export default ButtonIcon