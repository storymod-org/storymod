import React, {Component} from "react";
import './bar.scss'

import Button from "./components/buttons/Button";
import ButtonIcon from "./components/buttons/ButtonIcon";
import Link from "./components/buttons/Link";
import Switch from "./components/selection/Switch";
import LabelInfo from "./components/labels/LabelInfo";
import ActionSheet from "./components/action-sheet/ActionSheet";
import HeaderBar from "./components/header-bar/HeaderBar";
import Cell from "./components/cell/Cell";

const listItems = [
    {
        id: '1',
        text: 'Изменить стиль'
    },
    {
        id: '2',
        text: 'Изменить стиль 2'
    },
    {
        id: '3',
        text: 'Изменить стиль 3'
    },
    {
        id: '4',
        text: 'Изменить стиль 4'
    }
]

export default class Bar extends Component {

    render() {
        return (
            <div className="stm-app__bar stm-bar">
                <div className="stm-bar__header stm-header">
                    <div className="stm-header__publish">
                        <Link
                            size="small"
                            text="telegram.storycrafter.ru"
                            link="#"/>
                        <Switch
                            state="false"/>
                        <LabelInfo
                            text="Только строчные латинские буквы"/>
                        <ActionSheet
                            elements={listItems}/>

                        <HeaderBar
                            firstButton='action-next'
                            text='Сайт по пиломатериалам Сайт по пиломатериалам'
                            lastButton='action-close'/>
                        <Cell
                            icon='objects-modul'
                            text='Telegram for Web Telegram for Web Telegram for Web'
                            active
                            disable
                            option={<ButtonIcon state='default-secondary' size='big' icon='action-more'/>}/>
                        <Cell
                            icon='objects-modul'
                            text='Telegram for Web Telegram for Web Telegram for Web'
                            active
                            disable
                            option={<LabelInfo text="Только строчные латинские буквы"/>}/>
                        <Cell
                            icon='objects-modul'
                            text='Telegram for Web Telegram for Web Telegram for Web'
                            disable/>
                        <Cell
                            icon='objects-modul'
                            text='Telegram for Web Telegram for Web Telegram for Web'
                            active
                            disable
                            option={<div className='stm-cell__label'>0 / 2</div>}/>
                    </div>
                    <div className="stm-header__title stm-title">
                        Сайт по пиломатериалам
                    </div>
                    <div className="stm-header__menu">

                    </div>
                </div>
                <div className="stm-bar__content">
                    
                </div>
                <div className="stm-bar__button">
                    <Button
                        state="destruct-secondary"
                        text="Добавить страницу"/>
                </div>
            </div>
        )
    }

}