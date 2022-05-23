import React, {Component} from 'react'
import './account-set.scss'

import ModalSettings from '../../components/modal/modal-settings/modal-settings'
import elements from './elements'

export default class AccountSet extends Component {

	state = {

		active: 0,
		children: 0,
		elements: elements

	}

	setBody = (body) => {
		this.setState({body})
	}

	setNav = (active) => {
		this.setState({active})
	}

	setNavigation(id) {

		this.setState(({elements}) => {

			const resetCells = elements.map((cells) => {
				const cell = {...cells, active: false}
				return cell
			})

			const activeCell = {...elements[id], active: true}
			const newCell = [...resetCells.slice(0, id), activeCell, ...resetCells.slice(id + 1)];

			return {
				active: id,
				elements: newCell,
				body: 0
			}
		})
	}

	render() {

		const {active, body, elements} = this.state
		const {useAccountSet} = this.props
		
		return (

			<ModalSettings
				title='Настройки'
				cells={elements}
				body={elements[active].body[body]}
				active={active}
				cellAction={this.setNavigation}
				setBody={this.setBody}
				close={useAccountSet}/>

		)
	}
}