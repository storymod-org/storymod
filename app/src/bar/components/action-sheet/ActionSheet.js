import React, {Component} from "react";
import './ActionSheet.scss';
import Button from "../buttons/Button";

export default class ActionSheet extends Component {

    render() {

        const {elements} = this.props;
        const className = `stm-action-sheet`;

        const elem = elements.map((item) => {
            
            return (
                <Button 
                state='default-secondary'
                key={item.id}
                text={item.text}/>
            )

        })

        return (

            <div
            className={className}>
            {elem}
            </div>

        )

    }

}