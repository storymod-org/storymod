import React, {Component} from "react";
import './settings.scss';
import Button from '../../components/button/button';
import Modal from '../../components/modal/modal'
import Cells from '../../components/cells/cells'

export default class Settings extends Component {

    render() {

        const {elements, title, id, content, cellAction, head} = this.props;

        const button = (
            <div className="stm-set-header__button">
                <Button
                    state='accent'
                    text='Сохранить'/>    
            </div>
        )

        return (

            <Modal
                type='big'
                title={title}
                show={true}>

                <div className="stm-settings">

                    <div className="stm-settings__sidebar">
                        <Cells 
                            cells={elements}
                            action={cellAction}/>
                    </div>

                    <div className="stm-settings__view">

                        <div className="stm-set-header">

                            <div className="stm-set-header__title">
                                <h2>{head.name}</h2>
                            </div>

                            {head.save ? button : null}

                        </div>

                        <div className="stm-settings__content">
                            {content}
                        </div>

                    </div>

                </div>

            </Modal>
        
        )
    }

}