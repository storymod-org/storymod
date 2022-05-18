import React from 'react';

import Button from "../../../components/button/button";

const Subscription = () => {
    return (

        <div className='stm-account-set'>

            <div className='stm-account-set__block stm-account-set__container'>

                <div className='stm-account-set__title'>
                    <h3>Информация о тарифе</h3>
                </div>

                <div className='stm-account-set__info'>
                    <div className='stm-account-set__info__title'><p>Ваш тариф</p></div>
                    <div className='stm-account-set__info__text'><p>Про</p></div>
                </div>

                <div className='stm-account-set__info'>
                    <div className='stm-account-set__info__title'><p>Стоимость</p></div>
                    <div className='stm-account-set__info__text'><p>399 ₽</p></div>
                </div>

                <div className='stm-account-set__info'>
                    <div className='stm-account-set__info__title'><p>Следущее списание</p></div>
                    <div className='stm-account-set__info__text'><p>19 Декабря</p></div>
                </div>

                <div className='stm-account-set__info'>
                    <div className='stm-account-set__info__title'><p>Сайтов</p></div>
                    <div className='stm-account-set__info__text'><p>3 / 5</p></div>
                </div>

                <div className='stm-account-set__info'>
                    <div className='stm-account-set__info__title'><p>Хранилище</p></div>
                    <div className='stm-account-set__info__text'><p>5 Mb / 100 Mb</p></div>
                </div>

            </div>

            <div className='stm-account-set__block stm-account-set__container'>

                <div>
                    <Button
                        state='default-primary'
                        text='Посмотреть другие тарифы'/>
                </div>

                <div>
                    <Button
                        state='default-secondary'
                        text='Отменить подписку'/>
                </div>

            </div>

        </div>
        
    )
}

export default Subscription;