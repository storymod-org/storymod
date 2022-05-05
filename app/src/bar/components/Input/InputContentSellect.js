import React, {Component} from "react";
import './_input.scss';
import './InputContentSellect.scss';
import ActionSheet from "../action-sheet/ActionSheet";

export default class InputContentSellect extends Component {

    render() {

        const {disabled, placeholder, elements} = this.props;

        return (
            <div className="stm-input-content-sellect">
                <input
                    className='stm-input stm-input-content-sellect__input'
                    readOnly
                    placeholder={placeholder}
                    disabled={disabled}/>
                <div className='stm-input-content-sellect__action-sheet stm-hide'>
                    <ActionSheet
                        elements={elements}/>
                </div>
            </div>
        )

    }

}