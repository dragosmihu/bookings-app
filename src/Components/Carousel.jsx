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
          //here you can also pass className, or any other button element attributes
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
        <div style={{ width: 300, height: 300}}> 
        <img src ="../Imag/rudepierdute.png" alt = 'Luni, 29.05.2023 ora 18:30' />
        </div>
        <div style={{ width: 300, height: 300}}>
        <img src ="../Imag/iubire.png" alt = 'Luni, 29.05.2023 ora 12:30' />
        </div>
        <div style={{ width: 300, height: 300}}>
        <img src ="../Imag/amanta.png" alt = 'Luni, 29.05.2023 ora 16:30' />
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 3
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 4
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 5
        </div>
        <div style={{ width: 300, height: 300 }}>
          slide 6
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 7
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 8
        </div>
        <div style={{ width: 300, height: 300}}>
          slide 9
        </div>
      </ReactSimplyCarousel>
    </div>
  );
}

export default ReactSimplyCarouselExample;