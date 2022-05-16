import React, {Component} from "react"
import './style.scss'

import InputContentText from "../../../../../../components/input/input-content-text"

export default class Style extends Component {

    render() {

        const {styles} = this.props

        if (styles) {

            const elements = styles.map((item) => {
                if (item.type === 'content-text') {
                    return (
                        <div key={item.id} className="stm-section-style">
                            <InputContentText placeholder={item.placeholder}/>
                        </div>)
                } else {
                    return console.log('Error')
                }
            })
    
            return (
                <div className="stm-section-style__list">
                    {elements}
                </div>
            )

        } else {
            console.log('Placeholder Styles')
        }
        
    }

}