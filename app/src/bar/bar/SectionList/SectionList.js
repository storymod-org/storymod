import React, {Component} from "react"
import './SectionList.scss'

import Section from './Section/Section'

export default class SectionList extends Component {

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