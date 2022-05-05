import React, {Component} from "react"
import './bar.scss'

import HeaderBar from "./bar/HeaderBar/HeaderBar"
import Button from "./components/buttons/Button"

import ButtonIcon from './components/buttons/ButtonIcon'
// import CellList from './components/cellList/CellLits'
import SectionList from "./bar/SectionList/SectionList"
export default class Bar extends Component {

    constructor(state) {
        super(state);
        this.state = {
            pages: true,
            nav: 'pages'

        }
    }

    render() {

        const {config} = this.props;

        return (
            <div className="stm-bar">
                <div className="stm-bar__header">
                    
                    <HeaderBar

                        firstBtn={<ButtonIcon 
                            icon='action-publish' 
                            state='default-secondary' 
                            size='big' 
                            onClick={console.log('publishProject')}/>}
                            
                        title={config.info.name}

                        lastBtn={<ButtonIcon 
                            icon='action-menu' 
                            state='default-secondary' 
                            size='big' 
                            onClick={console.log('openMenu')}/>}/>

                </div>
                <div className="stm-bar__content">

                    {/* <CellList 
                        icon='objects-modul'
                        cells={config.pages[0].modules}/> */}

                    <div className='stm-bar__section'>
                        <SectionList sections={config.pages[0].modules[0].sections}/> 
                    </div>

                </div>
                <div className="stm-bar__button">

                    <Button 
                        text='Добавить страницу'
                        state='default-primary'/>
                        
                </div>
            </div>
        )
    }

}