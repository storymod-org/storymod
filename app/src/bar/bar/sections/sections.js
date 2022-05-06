import React, {Component} from "react"
import './sections.scss'

import Section from './section/section'

export default class Sections extends Component {

    render() {

        const {sections} = this.props;

        if (sections) {
            const elements = sections.map((section) => {
                return (
                    <Section key={section.id} section={section}/>
                )
            })
    
            return (
                <div className="stm-section-list">
                    {elements}
                </div>
            )
        } else {
            console.log('Error');
        }
    }

}