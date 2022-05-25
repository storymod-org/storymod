import React, {Component} from 'react'
import './sections.scss'

import Section from './section/section'
import Button from '../../../../components/button/button'
import ModalPage from '../../../../components/modal/modal-page'

export default class Sections extends Component {

	constructor(props) {
		super(props)
		this.state = {
			createSection: false
		}
		this.createSection = this.createSection.bind(this)
	}

	createSection() {
		this.setState({createSection: !this.state.createSection})
	}

	render() {

		const {createSection} = this.state
		const {sections} = this.props

		if(!sections) {
			console.log('Error')
		}

		const sectionsRender = sections.map((section) => {
			return (
				<Section key={section.id} section={section}/>
			)
		})
		
		return (

			<div className='stm-body-sections'>

				<div className="stm-body-sections__content">
					{sectionsRender}
				</div>

				<div className='stm-body-sections__button'>

					<Button
						text='Добавить секцию'
						state='default-primary'
						action={this.createSection}/>
						
				</div>

				<div className='stm-body-sections__modal'>

					{createSection ? 
					
						<ModalPage
							title='Выберите секцию'
							icon='objects-section'
							cells={sections}
							close={this.createSection}/> : null}
						
				</div>

			</div>

		)

	}

}