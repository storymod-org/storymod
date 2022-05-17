import React from "react";
import './account-set.scss';

import InputContentText from '../../../components/input/input-content-text';

const Email = () => {
    return (

        <div className='stm-account-set'>

            <div className='stm-account-set__block stm-account-set__container'>

                <div className='stm-account-set__title'>
                    <h3>Изменение E-Mail</h3>
                </div>

                <div>
                    <InputContentText
                        placeholder='Введите новый E-Mail'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Подтвердите новый E-Mail'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Введите пароль'/>
                </div>

            </div>

        </div>
        
    )
}

export default Email