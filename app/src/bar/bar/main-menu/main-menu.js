import React, {Component} from "react";
import './main-menu.scss';
import db from '../../../user/db.json';
import Button from "../../components/button/button";

export default class MainMenu extends Component {

    render() {

        const {showSetAccount} = this.props

        return (
            <div className="stm-main-menu">

                <div className="stm-main-menu__header-wrap">

                    <div
                        onClick={showSetAccount}
                        className="stm-main-menu__header">
                            
                        <div className="stm-main-menu__avatar">
                            <img src={`${process.env.PUBLIC_URL}/user/${db.user.avatar}`} alt='avatar'/>
                        </div>
                        <div className="stm-main-menu__content">
                            <h3>{db.user.name}</h3>
                            <p>{db.user.email}</p>
                        </div>
                    </div>

                </div>

                <div className="stm-main-menu__body">
                    <diçv className="stm-main-menu__projects">
                        <Projects
                            projects={db.projects}/>
                    </diçv>
                    <div className="stm-main-menu__button">
                        <Button
                            state='default-primary'
                            text='Добавить проект'/>
                    </div>
                </div>

            </div>
        )
    }

}

const Projects = ({projects}) => {
    return projects.map((item) => {

        const active = item.active ? 'stm-main-menu__project--active' : null

        return (
            <div key={item.id} className={`stm-main-menu__project ${active}`}>
                <div className="stm-main-menu__project-logo">
                    <img src={`${process.env.PUBLIC_URL}/user/${item.logo}`} alt='logo'/>
                </div>
                <div className="stm-main-menu__project-content">
                    <h3>{item.name}</h3>
                    <p>{item.href}</p>
                 </div>
            </div>
        )
    })
}