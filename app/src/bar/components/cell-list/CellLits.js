import React, {Component} from "react";
import './CellList.scss';

import Cell from "../cell/Cell";

export default class CellList extends Component {

    render() {

        const {elements} = this.props;
        let className = 'stm-cell';

        const cells = elements.map((item) => {
            return (
                <Cell icon={elements.icon} text={elements.text} option={elements.option}/>
            )
        });

        return (
        <div className={className}>{cells}</div>
        )

    }

}