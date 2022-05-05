import React, {Component} from "react"
import './Section.scss'

import Head from "./Head/Head";
import Style from "./Style/Style";
import Content from "./Content/Content";

export default class Section extends Component {

    render() {

        const {section} = this.props;

        return (
            <div className="stm-section">

                <Head name={section.name} add={section.add} remove={section.remove}/>
                <Style styles={section.styles}/>
                <Content content={section.content} remove={section.remove}/>

            </div>
        )
    }

}