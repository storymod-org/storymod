import React, {Component} from "react";
import './CellList.scss';

import Cell from "../cell/Cell";

export default class CellList extends Component {

    render() {

        const {cells, icon} = this.props;
        let className = 'stm-cell-list';

        const elements = cells.map((item) => {
            return (
                <Cell key={item.id} icon={icon} text={item.name} option={cells.option}/>
            )
        });

        return (
        <div className={className}>{elements}</div>
        )

    }

}