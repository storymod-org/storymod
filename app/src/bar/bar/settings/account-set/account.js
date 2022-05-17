import React from 'react';

import avatar from '../../../../user/media/avatar.jpeg'
import InputImageSmall from "../../../components/input/input-image-small";
import InputContentText from '../../../components/input/input-content-text';
import Button from "../../../components/button/button";

const Account = () => {
    return (

        <div className='stm-account-set'>

            <div className='stm-account-set__block stm-account-set__container'>

                <div className='stm-account-set__title'>
                    <h3>Информация об аккаунте</h3>
                </div>

                <div className='stm-account-set__main-input'>

                    <div className='stm-account-set__main-input__avatar'>
                        <InputImageSmall
                            value={avatar}/>
                    </div>

                    <div className='stm-account-set__main-input__input'>
                        <InputContentText
                            placeholder='Имя'/>
                    </div>

                </div>

                <div>
                    <InputContentText
                        placeholder='E-Mail'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Пароль'/>
                </div>

                <div>
                    <InputContentText
                        placeholder='Подписка'/>
                </div>

            </div>

            <div className='stm-account-set__block stm-account-set__container'>

                <div>
                    <Button
                        state='default-primary'
                        text='Выйти'/>
                </div>

                <div>
                    <Button
                        state='destruct-secondary'
                        text='Удалить аккаунт'/>
                </div>

            </div>

        </div>
        
    )
}

export default Account;