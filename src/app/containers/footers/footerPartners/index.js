import React from 'react';
import ImageSlider, { Slide } from "react-auto-image-slider";

function Slider() {
  return (
    <ImageSlider effectDelay={500} autoPlayDelay={2000}>
      <Slide>
        <img alt="cisco" src={'/assets/images/phonepartners/cisco.png'} />
      </Slide>
      <Slide>
        <img alt="grandstream" src={'/assets/images/phonepartners/grandstream.png'} />
      </Slide>
      <Slide>
        <img alt="Polycom" src={'/assets/images/phonepartners/Polycom.png'} />
      </Slide>
      <Slide>
        <img alt="Snom" src={'/assets/images/phonepartners/Snom.png'} />
      </Slide>
      <Slide>
        <img alt="Yealink" src={'/assets/images/phonepartners/Yealink.png'} />
      </Slide>
    </ImageSlider>
  );
}

export default Slider;