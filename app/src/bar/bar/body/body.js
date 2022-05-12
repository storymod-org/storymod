import React, {Component} from "react";
import './body.scss';

import Pages from "./pages/pages";
import Sections from './sections/sections'
import Modules from "./modules/modules";
import Button from '../../components/button/button'
import Modals from "./modals/modals";

export default class Body extends Component {

    constructor(props) {
        super(props)
        this.state = {
            createPage: false
        }
        this.createPage = this.createPage.bind(this)
    }

    createPage() {
        this.setState({createPage: !this.state.createPage})
    }

    render() {

        const {nav, pages, page, modul, openPage, openModul} = this.props

        if (nav === 0) {
            return (
                
                <View 
                    content={
                        <Pages
                            pages={pages}
                            action={openPage}/>}
                    button={
                        <Button
                            text='Добавить страницу'
                            state='default-primary'
                            action={this.createPage}/>}
                    createPage={
                            this.state.createPage}/>)

        } else if (nav === 1) {
            return (

                <View 
                content={
                    <Modules
                        modules={pages[page].modules}
                        action={openModul}/>}
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

const View = ({content, button, createPage}) => {
    return (
        <>
            <div className="stm-body__content">{content}</div>
            <div className="stm-body__button">{button}</div>
            <div className="stm-body__modals"><Modals createPage={createPage}/></div>
        </>
    )
}