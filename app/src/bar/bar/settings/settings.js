import React, {Component} from "react";
import './settings.scss';
import Header from '../../components/modal/header/header';
import Button from '../../components/button/button';

export default class Settings extends Component {

    render() {

        const {elements} = this.props;

        return (
            <div className="stm-settings-overlay">

                <div className="stm-settings">

                    <Header/>

                    <div className="stm-settings__body">

                        <div className="stm-settings__side-bar">
                            <SideBar elements={elements}/>
                        </div>

                        <div className="stm-settings__view">

                            <div className="stm-set-header">
                                <div className="stm-set-header__title">
                                    <h2>Аккаунт</h2>
                                </div>
                                <div className="stm-set-header__button">
                                    <Button
                                        text='Сохранить'/>
                                </div>
                            </div>

                            <div className="stm-settings__content">
                                
                            </div>

                        </div>

                    </div>

                </div>

            </div>
        )
    }

}

const SideBar = () => {

    


}