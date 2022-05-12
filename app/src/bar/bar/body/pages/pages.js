import React, {Component} from "react";
import ButtonMore from "../../../components/button/button-more";
import Cells from "../../../components/cells/cells";

export default class Pages extends Component {

    constructor(props) {
        super(props)
        this.actions = [
            {
                id: 0,
                text: 'Изменить название',
                action: console.log('Изменить название')
            },
            {
                id: 1,
                text: 'Изменить адрес',
                action: console.log('Изменить адрес')
            },
            {
                id: 2,
                text: 'Удалить',
                action: console.log('Удалить')
            }
        ]
    }

    render() {
        const {pages, action} = this.props;
        return (
            <Cells 
                cells={pages}
                icon='objects-page'
                action={action}
                type='button'
                option={
                    <ButtonMore
                        actions={this.actions}/>
                }/>
        )
    }
}