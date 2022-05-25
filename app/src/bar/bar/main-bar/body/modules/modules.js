import React, {Component} from 'react'
import './modules.scss'

import Button from '../../../../components/button/button'
import Cells from '../../../../components/cells/cells'
import ModalPage from '../../../../components/modal/modal-page'

export default class Modules extends Component {

	constructor(props) {
		super(props)
		this.state = {
			createModul: false,
		}
		this.createModul = this.createModul.bind(this)
	}

	createModul() {
		this.setState({createModul: !this.state.createModul})
	}

	render() {

		const {
			
			modules,
			useActionModul,
			useModul

		} = this.props

		const {createModul} = this.state

		return (

			<div className='stm-body-modules'>
			
				<div className='stm-body-modules__content'>

					<Cells 
						cells={modules}
						icon='objects-modul'
						action={useModul}
						type='button'
						more={useActionModul}/>

				</div>

				<div className='stm-body-modules__button'>

					<Button
						text='Добавить модуль'
						state='default-primary'
						action={this.createModul}/>

				</div>

				<div className='stm-body-modules__modal'>

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