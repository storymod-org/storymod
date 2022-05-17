import React from "react";
import './account-set.scss';

import InputContentText from '../../../components/input/input-content-text';

const Password = () => {
    return (

        <div className='stm-account-set'>

            <div className='stm-account-set__block stm-account-set__container'>

                <div className='stm-account-set__title'>
                    <h3>Изменение Пароля</h3>
                </div>

                <div>
                    <InputContentText
                        placeholder='Введите текущий пароль'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Введите новый пароль'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Подтвердите новый пароль'/>
                </div>

            </div>

        </div>
        
    )
}

export default Password