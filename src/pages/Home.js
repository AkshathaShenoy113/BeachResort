import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import FeaturedRooms from "../components/FeaturedRooms";

export default function Home() {
  return (
    <>
      <Hero>
        <Banner title="豪華な部屋" subtitle="4000円からのデラックスルーム">
          <Link to="/rooms" className="btn-primary">
            私たちの部屋
          </Link>
        </Banner>
      </Hero>
      <Services></Services>
      <FeaturedRooms></FeaturedRooms>
    </>
  );
}
