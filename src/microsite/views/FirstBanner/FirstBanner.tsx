import React from 'react';
import './_banner.scss';
import qrCode from '../../assets/qr-code.svg';
import { useAppDispatch } from '../../../hooks/hooks';
import { pause } from '../../../redux/video_control_slice/videoPlayerSlice';
import { showElement } from '../../../redux/navigate_slice/navigateSlice';
import { Promo } from '../Promo/Promo';


export const FirstBanner = () => {

const dispatch = useAppDispatch();



const handleOkBtn = () => {
  dispatch ( showElement ({path: 'promo/'}) );
  dispatch( pause() );
}

return (
    <div className='banner'>
      <div className='contains'>
        <div className='title'>
          <div className='title_first'> ИСПОЛНИТЕ МЕЧТУ ВАШЕГО МАЛЫША!</div>
          <div className='title_second'> ПОДАРИТЕ ЕМУ СОБАКУ!</div>
        </div>
        <img src={qrCode} alt="qr-code" />      
        <div className='text_qr_code'>Сканируйте QR-код или нажмите OK</div>
        <div className='contains_button' onClick={handleOkBtn}>
          <span>OK</span>
        </div>
      </div>
    </div>
  )
}