import React, {Component} from 'react'
import './modules.scss'

import ButtonMore from '../../../../components/button/button-more'
import Button from '../../../../components/button/button'
import Cells from '../../../../components/cells/cells'
import ModalPage from '../../../../components/modal/modal-page'

export default class Modules extends Component {

	state = {
		createModul: false
	}

	createModul() {
		this.setState({createModul: !this.state.createModul})
	}

	render() {

		const {
			
			modules,
			updateNav

		} = this.props

		const {createModul} = this.state

		return (

			<div className='stm-modules'>
			
				<div className='stm-body__content'>

					<Cells 
						cells={modules}
						icon='objects-modul'
						action={updateNav}
						type='button'
						option={
							<ButtonMore
								actions={this.actions}/>}/>

				</div>

				<div className='stm-body__button'>

					<Button
						text='Добавить модуль'
						state='default-primary'
						action={this.createModul}/>

				</div>

				<div className='stm-body__modal'>

					{createModul ? 

						<ModalPage
							title='Выберите модуль'
							icon='objects-modul'
							cells={modules}
							close={this.createModul}/> : null
							
					}

				</div>

			</div>
		)
	}
}