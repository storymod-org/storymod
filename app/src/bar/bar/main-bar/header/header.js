import React from 'react'
import './header.scss'

import ButtonIcon from '../../../components/button/button-icon'

const Header = ({
		
	config,
	projectNav,
	isPages,

	updateNav,
	usePublishSet,
	useMainMenu,
	useActionModul,
	useActionSection

}) => {

	const title = () => {

		switch(projectNav.nav) {

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

	const actions = (projectNav.nav === 1) ? useActionModul : useActionSection

	return (isPages & (projectNav.nav === 0)) || (!isPages & (projectNav.nav === 1)) ? (

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
				action: () => updateNav(projectNav.nav - 1)}}
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