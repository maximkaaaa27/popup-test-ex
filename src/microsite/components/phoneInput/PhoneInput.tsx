import React, { useState } from 'react';
import './_phone-input.scss';
import { Keyboard } from './Keyboard';
import { PhoneValue } from './PhoneValue';


export const PhoneInput = () => {

  const initialPhone = ['+7'];

  const [phone, setPhone] = useState(initialPhone)

  const handleNumClick = (target: any) => {  

    if (target.value && !(phone.length >= 11) && target.value !== '999') {
      setPhone((p) => p.concat(target.value))
    }

    if (target.value === '999' && phone.length > 1) {
      return setPhone(phone.slice(0,-1))
    }
  }


  return (
    <div className='phone-input'>
      <div className='phone-input__title'>
        <span>Введите ваш номер мобильного телефона</span>
      </div>
      <div className='phone-input__number-value'>
      <PhoneValue phone={phone} />
      </div>

      <div className='phone-input__sign-bottom'>
        <span>и с Вами свяжется наш менеждер для дальнейшей консультации</span>
      </div>

      <div className='phone-input__keyboard'>
        {<Keyboard handleNumClick={handleNumClick}/>}
      </div>

      <div className='phone-input__checkbox'>
  
      </div>


      <div className='phone-input__invalid'>
        Неверно введён номер
      </div>
      

        <div className='phone-input__submit'>

          Подтвердить номер
       
       
        </div>
    </div>
  )
}