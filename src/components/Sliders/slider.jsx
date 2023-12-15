import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './slider.module.css';
const SliderComponent = () => {
   const slides = [
     { image: 'https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Winter is the coldest and darkest season of the year in polar and temperate climates. It occurs after autumn and before spring. The tilt of Earths axis causes seasons, winter occurs when a hemisphere is oriented away from the Sun. Different cultures define different dates as the start of winter, and some use a definition based on weather.' },
     { image: 'https://images.pexels.com/photos/920147/pexels-photo-920147.jpeg', text: 'Spring, also known as springtime, is one of the four temperate seasons, succeeding winter and preceding summer. There are various technical definitions of spring, but local usage of the term varies according to local climate, cultures and customs. When it is spring in the Northern Hemisphere, it is autumn in the Southern Hemisphere and vice versa.' },
     { image: 'https://images.pexels.com/photos/1209611/pexels-photo-1209611.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', text: 'Summer is the hottest and brightest of the four temperate seasons, occurring after spring and before autumn. At or centred on the summer solstice, daylight hours are longest and darkness hours are shortest, with day length decreasing as the season progresses after the solstice. The earliest sunrises and latest sunsets also occur near the date of the solstice. The date of the beginning of summer varies according to climate, tradition, and culture. When it is summer in the Northern Hemisphere, it is winter in the Southern Hemisphere, and vice versa.' },
     { image: 'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=800', text: 'Autumn, also known as fall in North American English, is one of the four temperate seasons on Earth. Outside the tropics, autumn marks the transition from summer to winter, in September (Northern Hemisphere) or March (Southern Hemisphere). Autumn is the season when the duration of daylight becomes noticeably shorter and the temperature cools considerably. Day length decreases and night length increases as the season progresses until the Winter Solstice in December (Northern Hemisphere) and June (Southern Hemisphere).' },
    
   ];
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className='container'>
   <div className="slider-container">
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index} className="slider-item">
          <img src={slide.image} alt={`Slide ${index + 1}`} />
          <p>{slide.text}</p>
        </div>
        
      ))}
    </Slider>
    </div>
    </div>
  );
};

export default SliderComponent;