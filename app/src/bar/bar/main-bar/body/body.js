import React, {Component} from "react";
import './body.scss';

import modules from '../../../../project/project.json';

import Pages from "./pages/pages";
import Sections from './sections/sections'
import Modules from "./modules/modules";
import Button from '../../../components/button/button'
import Modal from "../../../components/modal/modal";
import ModalPage from "../../../components/modal/modal-page";
import ModalInputs from "../../../components/modal/modal-inputs";

export default class Body extends Component {

    constructor(props) {
        super(props)
        this.state = {
            createPage: false,
            createModul: false
        }
        this.createPage = this.createPage.bind(this)
        this.createModul = this.createModul.bind(this)
        this.createSection = this.createSection.bind(this)
    }

    createPage() {
        this.setState({createPage : !this.state.createPage})
    }

    createModul() {
        this.setState({createModul : !this.state.createModul})
    }

    createSection() {
        this.setState({createSection : !this.state.createSection})
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
                    modal={
                        <Modal 
                            big
                            title='Создание страницы'
                            show={this.state.createPage}
                            close={this.createPage}
                            activeBtn={{
                                text: 'Создать'}}>
                            <ModalInputs
                                inputs={[
                                    {id: 0,
                                    label: 'Назвоние страницы',
                                    placeholder: 'Введите название страницы'},
                                    {id: 1,
                                    label: 'Адрес страницы',
                                    placeholder: 'Введите адрес страницы'}
                                ]}/>
                        </Modal>
                    }/>)

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
                        state='default-primary'
                        action={this.createModul}/>}
                modal={
                    <ModalPage
                        title='Выберите модуль'
                        icon='objects-modul'
                        cells={modules}
                        show={this.state.createModul}
                        close={this.createModul}/>
                }/>)

        } else {
            return (

                <View 
                content={
                    <Sections
                        sections={pages[page].modules[modul].sections}/>}
                button={
                    <Button
                        text='Добавить секцию'
                        state='default-primary'
                        action={this.createSection}/>}
                modal={
                    <ModalPage
                        title='Выберите секцию'
                        icon='objects-section'
                        cells={modules[modul].sections}
                        show={this.state.createSection}
                        close={this.createSection}/>
                }/>)             
        }
    }

}

const View = ({content, button, modal}) => {
    return (
        <>
            <div className="stm-body__content">{content}</div>
            <div className="stm-body__button">{button}</div>
            <div className="stm-body__modals">{modal}</div>
        </>
    )
}