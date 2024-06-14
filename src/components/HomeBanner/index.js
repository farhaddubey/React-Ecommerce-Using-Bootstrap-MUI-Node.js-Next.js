import React from 'react'
import Slider from "react-slick";
const HomeBanner = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:true,
        autoplay:true
      };
  return (
    <Slider {...settings}>
        <div className='item'>
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" className='w-100'/>
        </div>
        <div className='item'>
            <img src="https://sslimages.shoppersstop.com/sys-master/root/hb2/hd9/32834870411294/Private_top-banner-web_36-e3.jpg" className='w-100'/>
        </div>
    </Slider>
  )
}

export default HomeBanner