import React, {Component} from "react"
import './SectionList.scss'

import Section from './Section/Section'

export default class SectionList extends Component {

    render() {

        const {sections} = this.props;

        const elements = sections.map((item) => {
            return (
                <Section key={item.id} item={item}/>
            )
        })

        return (
            <div className="stm-section-list">
                {elements}
            </div>
        )
    }

}