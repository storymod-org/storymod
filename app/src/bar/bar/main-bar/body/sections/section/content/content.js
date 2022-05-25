import React, {Component} from 'react'
import './content.scss'

import Elements from './elements/elements'
import ButtonIcon from '../../../../../../components/button/button-icon'

export default class Content extends Component {

	render() {

		const {

			content,
			remove
		
		} = this.props

		if (content) {

			const contents = content.map((content) => {
				return (
					<div key={content.id} className='stm-section-content'>
	
						<div className="stm-section-content__head">
	
							<div className="stm-section-content__head-title">
								<h3>{content.name}</h3>
							</div>
	
							<div className="stm-section-content__head-remove">
								{remove ? <ButtonIcon size='small' state='default-secondary' icon='action-remove'/> : null}
							</div>
	
						</div>
						
						<Elements elements={contents.elements}/>
	
					</div>
				)
			})
	
			return (
				<div className="stm-section-content__list">
					{contents}
				</div>
			)

		} else {
			console.log('Placeholder Content')
		}
		
	}
	
}