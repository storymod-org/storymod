import React, {Component} from "react";
import ButtonMore from "../../../../components/button/button-more";
import Cells from "../../../../components/cells/cells";

export default class Pages extends Component {

    constructor(props) {
        super(props)
        this.actions = [
            {
                id: 0,
                text: 'Изменить название',
                action: null
            },
            {
                id: 1,
                text: 'Изменить адрес',
                action: null
            },
            {
                id: 2,
                text: 'Удалить',
                action: null
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