import React, {Component} from "react";
import './cells.scss';

import Cell from "../cell/cell";

export default class Cells extends Component {

    render() {

        const {cells, icon, action, option, type} = this.props;
        let className = 'stm-cell-list';

        const elements = cells.map((item) => {
            return (
                <Cell 
                    key={item.id} 
                    icon={icon} 
                    type={type}
                    text={item.name} 
                    option={option} 
                    action={() => action(item.id)}/>
            )
        });

        return (
        <div className={className}>{elements}</div>
        )

    }

}