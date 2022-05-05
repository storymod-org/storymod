import React, {Component} from "react"
import './Section.scss'

import Head from "./Head/Head";
import Style from "./Style/Style";
import Content from "./Content/Content";

export default class Section extends Component {

    render() {

        const {item} = this.props;

        return (
            <div className="stm-section">

                <Head name={item.name} add={item.add} remove={item.remove}/>
                <Style styles={item.styles}/>
                <Content content={item.content} remove={item.remove}/>

            </div>
        )
    }

}