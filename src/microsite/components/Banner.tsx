import React, { useContext } from 'react';
import { BannerContext } from '../context/banner/bannerContext';

export const Banner = () => {

  const { currentRender } = useContext(BannerContext)

  
  return (
    <>
      {currentRender}
    </>
  )
}