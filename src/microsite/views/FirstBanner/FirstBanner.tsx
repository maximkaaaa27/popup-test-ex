import React, { useContext } from 'react';
import { BannerContext } from '../../context/banner/bannerContext';
import { VideoPlayerContext } from '../../context/videoplayer/videoplayerContext';
import './_banner.scss';
import qrCode from '../../assets/qr-code.svg';


export const FirstBanner = () => {

const { showPromo } = useContext(BannerContext);
const { pause } = useContext(VideoPlayerContext);

const handleOkBtn = () => {
  showPromo();
  pause();
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