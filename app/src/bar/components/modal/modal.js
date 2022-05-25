import React from 'react'
import './modal.scss'
import Header from './header/header'

const Modal = ({

	title,
	type,
	headerBtn,
	close,
	children

}) => {

	let className = 'modal'

	switch(type) {

	case 'small':
		className += ' modal--small'
		break
	case 'medium':
		className += ' modal--medium'
		break
	case 'big': className += ' modal--big'

	}

	return (

		<div className='modal__overlay'>
			
			<div className={className}>

				<Header
					title={title}
					firstButton={headerBtn}
					close={close}/>

				{children}

			</div>
		</div>
	)

}

export default Modal