import React, {Component} from 'react'

import MainBar from './bar/main-bar/main-bar'
import MainMenu from './bar/main-menu/main-menu'
import AccountSet from './bar/account-set/account-set'
import ProjectSet from './bar/project-set/project-set'
import PublishSet from './bar/publish-set/publish-set'
import TarifPage from './bar/tarif-page/tarif-page'

export default class Bar extends Component {

	constructor(props) {
		super(props)

		this.state = {

			isPages: true,

			isMainMenu: false,
			isAccountSet: false,
			isProjectSet: false,
			isPublishSet: false,
			isTarifPage: false

		}

		this.useMainMenu = this.useMainMenu.bind(this)
		this.useAccountSet = this.useAccountSet.bind(this)
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

		const {

			isPages,
			isMainMenu,
			isAccountSet,
			isProjectSet,
			isPublishSet,
			isTarifPage

		} = this.state

		const {

			projectNav,
			updateNav,
			config,
			usePage,
			useModul

		} = this.props

		return (
			<>

				<MainBar
				
					projectNav={projectNav}
					updateNav={updateNav}
					config={config}
					isPages={isPages}

					usePublishSet={this.usePublishSet}
					useMainMenu={this.useMainMenu}
					usePage={usePage}
					useModul={useModul}/>

				{isMainMenu   ? 
					<MainMenu
						useAccountSet={this.useAccountSet}/>: null}
				{isAccountSet ? <AccountSet use={this.useAccountSet}/> : null}
				{isProjectSet ? <ProjectSet use={this.useProjectSet}/> : null}
				{isPublishSet ? <PublishSet use={this.usePublishSet}/> : null}
				{isTarifPage  ? <TarifPage  use={this.useTarifPage}/>  : null}

			</>
		)

	}

}