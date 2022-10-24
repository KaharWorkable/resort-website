import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';

export const Rooms = () => {
  return (
    <div>
    <Hero hero="roomsHero">
      <Banner title="Our Rooms">
        <Link to="/"className='btn-primary'>
          return Home
        </Link>
      </Banner>
    </Hero>
    <RoomsContainer/>

    </div>
  )
}

export default Rooms;
