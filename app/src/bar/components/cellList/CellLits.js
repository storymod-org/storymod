import React, {Component} from "react";
import './CellList.scss';

import Cell from "../cell/Cell";

export default class CellList extends Component {

    render() {

        const {cells, icon, action} = this.props;
        let className = 'stm-cell-list';

        const elements = cells.map((item) => {
            return (
                <Cell key={item.id} icon={icon} text={item.name} option={cells.option} action={action}/>
            )
        });

        return (
        <div className={className}>{elements}</div>
        )

    }

}