import React, { useState } from 'react';
import './_phone-input.scss';
import { Keyboard } from './Keyboard';
import { PhoneValue } from './PhoneValue';
import { useAppDispatch } from '../../../hooks/hooks';
import { showElement } from '../../../redux/navigate_slice/navigateSlice';


export const PhoneInput = () => {

  const dispatch = useAppDispatch();
  const initialPhone = ['+7'];
  const [phone, setPhone] = useState(initialPhone);
  const [checkBox, setCheckBox] = useState(false);

  const handleNumClick = (target: any) => {  

    if (target.value && !(phone.length >= 11) && target.value !== '<<<') {
      return setPhone((p) => p.concat(target.value))
    }

    if (target.value === '<<<' && phone.length > 1) {
      return setPhone(phone.slice(0,-1))
    }
  }

  const handleSubmitClick = () => {
    dispatch(showElement( {path: 'finalPromo/'} ))
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

      <div className='phone-input__check'>
        <div className='phone-input__check__checkbox' >
          <div className='btn'>
            <button onClick={() => setCheckBox(!checkBox)} id='check'>
              { checkBox && (       
                <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="23" 
                height="23" 
                fill="currentColor" 
                viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
                )
              }
            </button>
          </div>
          <div className='description'>  
            <span>Согласие на обработку персональных данных</span>
          </div> 
        </div>

        <div className='phone-input__check__invalid'>
          Неверно введён номер
        </div>
      </div>
      <div className='phone-input__submit-btn'>
        <button 
        disabled={!checkBox || !(phone.length === 11)} 
        className={(!checkBox || !(phone.length === 11)) ? 'btn-disabled' : 'btn-enable'}
        id="submit"
        onClick={handleSubmitClick}
        >
          <span>Подтвердить номер</span>
        </button>
      </div>
    </div>
  )
}