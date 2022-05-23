import React, {Component} from 'react'
import '../body.scss'

import ButtonMore from '../../../../components/button/button-more'
import Cells from '../../../../components/cells/cells'
import Button from '../../../../components/button/button'
import PagesModal from './pages-modal'
import pageActions from './page-actions'

export default class Pages extends Component {

	state = {
		createPage: false,
	}

	createPage() {
		this.setState({createPage : !this.state.createPage})
	}

	render() {

		const {pages, action} = this.props
		const {createPage} = this.state

		return (

			<>

				<div className="stm-body__content">

					<Cells 
						cells={pages}
						icon='objects-page'
						action={action}
						type='button'
						option={
							<ButtonMore
								actions={pageActions}/>}/>

				</div>

				<div className="stm-body__button">

					<Button
						text='Добавить страницу'
						state='default-primary'
						action={this.createPage}/>

				</div>

				<div className="stm-body__modals">

					{createPage ? <PagesModal close={this.createPage}/> : null}

				</div>
			
			</>

		)
	}
}