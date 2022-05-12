import React, {Component} from "react";

import ModalInputs from "../../../components/modal/modal-inputs";

export default class Modals extends Component {

    render() {

        return (
            <>
            <ModalInputs 
                big
                height='308'
                title='Создание страницы'
                show={this.props.createPage}
                inputs={[
                    {
                        id: 1,
                        label: 'Название страницы',
                        placeholder: 'Введите название страницы'
                    },
                    {
                        id: 2,
                        label: 'Адрес страницы',
                        placeholder: 'Введите адрес страницы'
                    }
                ]}
                button={{
                    text: 'Создать'
            }}/>
            </>          
        )
    }
}