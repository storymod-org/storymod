import React, {Component} from 'react'
import Button from '../base/buttons'
import './main-screen.scss'

export default class MainScreen extends Component {
	
	render() {

		const {title, subtitle, src} = this.props;
		
		return(
			<div className="main-screen__page">
				<div className="main-screen__wrap">
					<div className="main-screen__content">
						<div className="main-screen__title">
							<h1 className="h1">{title}</h1>
						</div>
						<Subtitle subtitle={subtitle}/>
						<Buttons/>
					</div>
					<Media src={src}/>
				</div>
			</div>
		)
	}

}

class Subtitle extends Component {
	render() {
		const {subtitle} = this.props     
		return (
			<div className="main-screen__subtitle">
				<p className="p1">{subtitle}</p>
			</div>
		)
	}  
}

class Media extends Component {  
	render() {       
		const {src} = this.props
		const newSrc = '/user/media/' + src
		return(
			<div className="main-screen__media">
				<div className="image">
					<img src={newSrc} alt="Alt"/>
				</div>
			</div>
		)
	}
}

class Buttons extends Component {
	render() {
		return(

			<div className="main-screen__buttons">
				<Button state="primary" size="big"/>
			</div>
		)
	}   
}