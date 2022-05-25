import React from 'react'
import './header.scss'

import ButtonIcon from '../../../components/button/button-icon'

const Header = ({
		
	config,
	projectNav,
	barNav,
	isPages,

	updateNav,
	usePublishSet,
	useMainMenu,
	useActionModul,
	useActionSection

}) => {

	const title = () => {

		switch(barNav) {

		case 0:
			return config.info.name
		case 1:
			return config.pages[projectNav.page].name
		case 2:
			return config.pages[projectNav.page].modules[projectNav.modul].name
		default:
			return 'Placeholder'
		}

	}

	const actions = (barNav === 1) ? useActionModul : useActionSection

	console.log(title())

	return (isPages & (barNav === 0)) || (!isPages & (barNav === 1)) ? (

		<View 
			title={title()}
			firstBtn={{
				icon: 'action-publish',
				action: usePublishSet}}
			lastBtn={{
				icon: 'action-menu',
				action: useMainMenu}}/>

	) : (

		<View
			title={title()}
			firstBtn={{
				icon: 'action-back',
				action: () => updateNav(barNav - 1)}}
			lastBtn={{
				icon: 'action-more',
				action: actions}}/>
	)

}

const View = ({firstBtn, lastBtn, title}) => {

	return (

		<div className="stm-header">

			<div className="stm-header__first-btn">

				<ButtonIcon
					icon={firstBtn.icon}
					state='default-secondary'
					size='big'
					action={firstBtn.action}/>

			</div>

			<div className="stm-header__title">
				<p>{title}</p>
			</div>

			<div className="stm-header__last-btn">

				<ButtonIcon
					icon={lastBtn.icon}
					state='default-secondary'
					size='big'
					action={lastBtn.action}/>
			
			</div>  

		</div>

	)
}

export default Header