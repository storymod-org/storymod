import React, {Component} from "react";
import ButtonMore from "../../../components/button/button-more";
import Cells from "../../../components/cells/cells";

export default class Modules extends Component {

    constructor(props) {
        super(props)
        this.actions = [
            {
                id: 1,
                text: 'Изменить название',
                action: console.log('Изменить название')
            },
            {
                id: 2,
                text: 'Изменить адрес',
                action: console.log('Изменить адрес')
            },
            {
                id: 3,
                text: 'Удалить',
                action: console.log('Удалить')
            }
        ]
    }

    render() {
        const {modules, action} = this.props;
        return (
            <Cells 
                cells={modules}
                icon='objects-modul'
                action={action}
                type='button'
                option={
                    <ButtonMore
                        actions={this.actions}/>
                }/>
        )
    }
}