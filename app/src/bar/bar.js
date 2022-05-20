import React, {Component} from 'react'
import './bar.scss'

import MainBar from './bar/main-bar/main-bar'
import MainMenu from './bar/main-menu/main-menu'
import AccountSet from './bar/account-set/account-set'
import ProjectSet from './bar/project-set/project-set'
import PublishSet from './bar/publish-set/publish-set'
import TarifPage from './bar/tarif-page/tarif-page'

export default class Bar extends Component {

	state = {

		isPages: true,

		isMainMenu: false,
		isAccountSet: false,
		isProjectSet: false,
		isPublishSet: false,
		isTarifPage: false
	}

	useMainMenu() {
		this.setState({isMainMenu: !this.state.isMainMenu})
	}

	useAccountSet() {
		this.setState({isAccountSet: !this.state.isAccountSet})
	}

	useProjectSet() {
		this.setState({isProjectSet: !this.state.isProjectSet})
	}

	usePublishSet() {
		this.setState({isPublishSet: !this.state.isPublishSet})
	}

	useTarifPage() {
		this.setState({isTarifPage: !this.state.isTarifPage})
	}

	render() {

		const {isPages, isMainMenu, isAccountSet, isProjectSet, isPublishSet, isTarifPage} = this.state
		const {activeItem, config} = this.props

		return (
			<div className="stm-bar">

				<MainBar 
					activeItem={activeItem}
					config={config}
					isPages={isPages}/>
				{isMainMenu   ? <MainMenu   use={this.useMainMenu}/>   : null}
				{isAccountSet ? <AccountSet use={this.useAccountSet}/> : null}
				{isProjectSet ? <ProjectSet use={this.useProjectSet}/> : null}
				{isPublishSet ? <PublishSet use={this.usePublishSet}/> : null}
				{isTarifPage  ? <TarifPage  use={this.useTarifPage}/>  : null}

			</div>
		)

	}

}