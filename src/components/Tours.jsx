import React from 'react'
import { Tour } from './Tour';

export const Tours = ({ tours, removeTour }) => {
  console.log(tours);
  return <section>
    <div className='title'>
      <h2>Our tours</h2>
      <div className='title-underline'></div>
    </div>
    <div className="tours">
      {
        tours.map(tourMap => {
          return <Tour key={tourMap.id} {...tourMap} removeTour={removeTour} />
        })
      }
    </div>
  </section>
}
