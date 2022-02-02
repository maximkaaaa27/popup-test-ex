import React from 'react';
import qrCode from '../assets/qr-code.svg'

export const Banner = () => (
  <div className='banner'>
    <div className='contains'>
      <div className='title'>
        <div className='title_first'> ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!</div>
        <div className='title_second'> ПОДАРИТЕ ЕМУ СОБАКУ!</div>
      </div>
      <img src={qrCode} alt="qr-code" />      
      <div className='text_qr_code'>Сканируйте QR-код или нажмите OK</div>
      <div className='contains_button' onClick={() => console.log('object')}>
        <span>OK</span>
      </div>
    </div>
  </div>
)