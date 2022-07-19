import React from 'react'
import SlickSlider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { TbArrowRight, TbArrowLeft } from 'react-icons/tb'


const ArrowLeft = (props) => {
  const { className, onClick } = props
  return (
    <button
      className={`${className} custom-slider-arrow custom-slider-arrow-left`}
      onClick={onClick}
    >
      <TbArrowLeft size={24}/>
    </button>
  )
}

const ArrowRight = (props) => {
  const { className, onClick } = props
  return (
    <button
      className={`${className} custom-slider-arrow custom-slider-arrow-right`}
      onClick={onClick}
    >
      <TbArrowRight size={24}/>
    </button>
  )
}

const Slider = ({children, className, slidesToShow=1, slideToShowB2=1}) => {

  const settings = {
    dots: true,
    infinite: true,
    lazyLoad: true,
    speed: 700,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    // autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: "linear",
    pauseOnHover: true,
    draggable: false,
    prevArrow: <ArrowLeft />,
    nextArrow: <ArrowRight />,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: slideToShowB2,
          slidesToScroll: slideToShowB2,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  }

  return (
    <div className={className}>
      <SlickSlider {...settings}>
        {children}
      </SlickSlider>
    </div>
  )
}

export default Slider
