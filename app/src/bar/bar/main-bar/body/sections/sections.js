import React, {Component} from 'react'
import './sections.scss'

import Section from './section/section'
import Button from '../../../../components/button/button'
import ModalPage from '../../../../components/modal/modal-page'

export default class Sections extends Component {

	state = {

		createSection: false

	}

	createSection() {
		this.setState({createSection: !this.state.createSection})
	}

	render() {

		const {sections} = this.props

		if(!sections) {
			console.log('Error')
		}

		const elements = sections.map((section) => {
			return (
				<Section key={section.id} section={section}/>
			)
		})
		
		return (

			<>
			
				<div className='stm-body__content'>

					<div className="stm-section-list">
						{elements}
					</div>

					<div className='stm-body__content'>
						<Button
							text='Добавить секцию'
							state='default-primary'
							action={this.createSection}/>
					</div>

					<div className='stm-body__modal'>

						<ModalPage
							title='Выберите секцию'
							icon='objects-section'
							// cells={modules[modul].sections}
							cells={1}
							show={this.state.createSection}
							close={this.createSection}/>
							
					</div>

				</div>

			</>

		)

	}

}