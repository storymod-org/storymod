import React, {Component} from "react"
import './elements.scss'

import InputContentText from "../../../../../../components/input/input-content-text"

export default class Elements extends Component {

    render() {

        const {elements} = this.props

        if (elements) {

            const items = elements.map((item) => {
                if (item.type === 'content-text') {
                    return (
                        <div key={item.id} className='stm-section-elements'>
                            <InputContentText placeholder={item.placeholder}/>
                        </div>)
                } else {
                    return console.log('Error')
                }      
            })
    
            return (
                <div className='stm-section-elements__list'>
                    {items}
                </div>
            )

        } else {
            console.log('Placeholder Elements')
        }

    }

}