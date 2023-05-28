import { useState } from 'react';
import ReactSimplyCarousel from 'react-simply-carousel';

function ReactSimplyCarouselExample() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return (
    <div>
      <ReactSimplyCarousel
        activeSlideIndex={activeSlideIndex}
        onRequestChange={setActiveSlideIndex}
        itemsToShow={1}
        itemsToScroll={1}
        forwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`>`}</span>,
        }}
        backwardBtnProps={{
          style: {
            alignSelf: 'center',
            background: 'black',
            border: 'none',
            borderRadius: '50%',
            color: 'white',
            cursor: 'pointer',
            fontSize: '20px',
            height: 30,
            lineHeight: 1,
            textAlign: 'center',
            width: 30,
          },
          children: <span>{`<`}</span>,
        }}
        responsiveProps={[
          {
            itemsToShow: 2,
            itemsToScroll: 2,
            minWidth: 768,
          },
        ]}
        speed={400}
        easing="linear"
      >
        <div style={{ width: 400, height: 553}}> 
        <img src ="../Imag/rudepierdute.png" alt = 'Luni, 29.05.2023 ora 18:30' />
        </div>
        <div style={{ width: 400, height: 562}}>
        <img src ="../Imag/iubire.png" alt = 'Luni, 29.05.2023 ora 12:30' />
        </div>
        <div style={{ width: 400, height: 533}}>
        <img src ="../Imag/amanta.png" alt = 'Luni, 29.05.2023 ora 16:30' />
        </div>
        <div style={{ width: 400, height: 553}}>
        <img src ="../Imag/dragoste.png" alt = 'Luni, 29.05.2023 ora 20:00' />
        </div>
        <div style={{ width: 400, height: 571}}>
        <img src ="../Imag/jaful.png" alt = 'Luni, 29.05.2023 ora 19:30' />
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;