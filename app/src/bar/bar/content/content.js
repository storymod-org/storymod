import React, {Component} from "react";

import Pages from "./pages/pages";
import Sections from './sections/sections'
import Button from '../../components/button/button'
import Cells from "../../components/cells/cells";

export default class Content extends Component {

    render() {

        const {nav, pages, page, modul} = this.props

        if (nav === 0) {
            return (
                
                <View 
                    content={
                        <Pages
                            pages={pages}
                            action={this.openPage}/>}
                    button={
                        <Button
                            text='Добавить страницу'
                            state='default-primary'/>}/>)

        } else if (nav === 1) {
            return (

                <View 
                content={
                    <Cells
                        cells={pages[page].modules}
                        icon='objects-modul'
                        action={() => this.actionPage(2)}/>}
                button={
                    <Button
                        text='Добавить модуль'
                        state='default-primary'/>}/>)

        } else {
            return (

                <View 
                content={
                    <Sections
                        sections={pages[page].modules[modul].sections}/>}
                button={
                    <Button
                        text='Добавить секцию'
                        state='default-primary'/>}/>)             
        }
    }

}

class View extends Component {
    render() {
        const {content, button} = this.props;
        return (
            <>
                <div className="stm-bar__content">{content}</div>
                <div className="stm-bar__button">{button}</div>
            </>
        )
    }
}