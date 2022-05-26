import React from 'react'
import './cell-big.scss'


const CellBig = ({
	
	active,
	action,
	logo,
	title,
	subtitle,
	icon,
	alt

}) => {

	let mainClass = 'stm-cell-big'
	active ? mainClass += ' stm-cell-big--active' : null

	const isLogo = logo ? (
		<img src={logo} alt={alt}/>
	) : (
		<img src={icon} alt={alt}/>
	)
	
	return (

		<div onClick={action} className={mainClass}>

			<div className="stm-cell-big__logo">
				{isLogo}
			</div>

			<div className="stm-cell-big__content">

				<div className='stm-cell-big__title'>
					<h3>{title}</h3>
				</div>

				<div className='stm-cell-big__subtitle'>
					<p>{subtitle}</p>
				</div>
		
			</div>

		</div>

	)

}

export default CellBig