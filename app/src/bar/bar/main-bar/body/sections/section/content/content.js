import React, {Component} from "react"
import './content.scss'

import Elements from "./elements/elements"
import ButtonIcon from "../../../../../../components/button/button-icon"

export default class Content extends Component {

    render() {

        const {content, remove} = this.props

        if (content) {

            const elements = content.map((element) => {
                return (
                    <div key={element.id} className='stm-section-content'>
    
                        <div className="stm-section-content__head">
    
                            <div className="stm-section-content__head-title">
                                <h3>{element.name}</h3>
                            </div>
    
                            <div className="stm-section-content__head-remove">
                                {remove ? <ButtonIcon size='small' state='default-secondary' icon='action-remove'/> : null}
                            </div>
    
                        </div>
                        
                        <Elements elements={element.elements}/>
    
                    </div>
                )
            })
    
            return (
                <div className="stm-section-content__list">
                    {elements}
                </div>
            )

        } else {
            console.log('Placeholder Content')
        }
        
    }
    
}