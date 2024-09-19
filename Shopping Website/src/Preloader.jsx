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


export const Preloader = () => {

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



export const CheckOutPreloader = () => {

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="40" color="Gray" />,
  });

  return (
      <section {...containerProps}>
        {indicatorEl}
      </section>
  );
};



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


export const MainProductsPreloader = () => {

  const { containerProps, indicatorEl } = useLoading({
    loading: true,
    indicator: <ThreeDots width="200" color="White" />,
  });
  
  return (
    <section {...containerProps} className='products-div-preloader'>
        {indicatorEl}
    </section>
  );
};
