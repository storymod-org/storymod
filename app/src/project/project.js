import React, {Component} from 'react'
import MainScreen from './components/main-screen'


export default class Project extends Component {

	render() {

		const {modules} = this.props

		const modul = modules.map((item) => {

			if (item.component === 'MainScreen') {
				return (
					<MainScreen 
						key={item.id}
						title={item.title}
						subtitle={item.subtitle}
						src={item.image}/>
				)
			} else {
				return console.log('Warning')
			}        
		})

		return (<div className="stm-app__project project">{modul}</div>)
	}
}