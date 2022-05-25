import React, {Component} from 'react'
import './pages.scss'

import Cells from '../../../../components/cells/cells'
import Button from '../../../../components/button/button'
import PagesModal from './pages-modal'

export default class Pages extends Component {

	constructor(props) {
		super(props)
		this.state = {
			createPage: false,
		}
		this.createPage = this.createPage.bind(this)
	}

	createPage() {
		this.setState({createPage : !this.state.createPage})
	}

	render() {

		const {

			usePage,
			useActionPage,
			pages

		} = this.props

		const {

			createPage
		
		} = this.state

		return (

			<div className='stm-body-pages'>

				<div className="stm-body-pages__content">

					<Cells

						cells={pages}
						icon='objects-page'
						action={usePage}
						type='button'
						more={useActionPage}/>

				</div>

				<div className="stm-body-pages__button">

					<Button
						text='Добавить страницу'
						state='default-primary'
						action={this.createPage}/>

				</div>

				<div className="stm-body-pages__modals">

					{createPage ? <PagesModal close={this.createPage}/> : null}

				</div>
			
			</div>

		)
	}
}