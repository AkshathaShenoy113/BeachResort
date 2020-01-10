import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import RoomsContainer from "../components/RoomContainer";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="私たちの部屋">
          <Link to="/" className="btn-primary">
            ホームページに戻る
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer></RoomsContainer>
    </>
  );
};

export default Rooms;
