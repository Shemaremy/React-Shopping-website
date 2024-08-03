// src/Preloader.js
import React from 'react';
import { useLoading} from '@agney/react-loading';
import {
  Audio,
  BallTriangle,
  Bars,
  Circles,
  Grid,
  Hearts,
  Oval,
  Puff,
  Rings,
  SpinningCircles,
  TailSpin,
  ThreeDots,
} from '@agney/react-loading';


const Preloader = () => {

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <TailSpin width="80" color="White" />,
  });

  return (
      <section {...containerProps}>
        {indicatorEl}
      </section>
  );
};

export default Preloader;



export const OurproductsPreloader = () => {

    const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <ThreeDots width="80" color="White" />,
    });
  
    return (
        <section {...containerProps}>
          {indicatorEl}
        </section>
    );
};



export const OurPicksPreloader = () => {

const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="80" color="White" />,
});

return (
    <section {...containerProps}>
        {indicatorEl}
    </section>
);
};


export const TrendsPreloader = () => {

  const { containerProps, indicatorEl } = useLoading({
      loading: true,
      indicator: <ThreeDots width="80" color="White" />,
  });
  
  return (
      <section {...containerProps}>
          {indicatorEl}
      </section>
  );
  };
