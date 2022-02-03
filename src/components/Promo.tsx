import React from 'react';
import qrCode from '../assets/qr-code.svg';

export const Promo = () => (
  <div className='promo'>
    <div  className='promo__left'>

    </div>
    <div className='promo__right'>
      <div className='contains_button' onClick={() => console.log('close')}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="50" 
        height="50" 
        fill="currentColor" 
        viewBox="0 0 16 16">
          <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </div>
      <div className='qr-code-block'>
        <div className='qr-code-block__text'>
        Сканируйте QR-код ДЛЯ ПОЛУЧЕНИЯ ДОПОЛНИТЕЛЬНОЙ ИНФОРМАЦИИ
        </div>
        <div className='qr-code-block__image'>
          <img src={qrCode} alt="qr-code" />
        </div>

      </div>

    </div>

  </div>
)