import React, { useState, useEffect } from "react";
import tw from "tailwind-styled-components";
import { carList } from "../data/carList";
import { MAPBOXGL_TOKEN } from "../../secrets";

const RideSelector = (props) => {
  const [rideDuration, setRideDuration] = useState(0);
  const { pickupCoordinates, dropoffCoordinates } = props;

  useEffect(() => {
    // get ride duration from MAPBOX API
    // using pickup and dropoff coordinates
    rideDuration = fetch(
      `https://api.mapbox.com/directions/v5/mapbox/driving/${pickupCoordinates[0]},${pickupCoordinates[1]};${dropoffCoordinates[0]},${dropoffCoordinates[1]}?` +
        new URLSearchParams({
          access_token: MAPBOXGL_TOKEN,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.routes[0] !== undefined) {
          setRideDuration(data.routes[0].duration / 100);
        }
      });
  }, [pickupCoordinates, dropoffCoordinates]);

  return (
    <Wrapper>
      <Title>Choose a ride, or swipe up for more</Title>
      <CarList>
        {carList.map((car, index) => (
          <Car key={index}>
            <CarImage src={car.imgUrl} />
            <CarDetails>
              <Service>{car.service}</Service>
              <Time>5 mins away</Time>
            </CarDetails>
            <Price>{"$" + (rideDuration * car.multiplier).toFixed(2)}</Price>
          </Car>
        ))}
      </CarList>
    </Wrapper>
  );
};

export default RideSelector;

const Wrapper = tw.div`
  flex flex-col flex-1 overflow-y-scroll
`;

const Title = tw.div`
  text-gray-500 text-center text-xs py-2 border-b
`;

const CarList = tw.div`
  overflow-y-scroll
`;

const Car = tw.div`
  flex p-4 items-center
`;

const CarImage = tw.img`
  h-14 mr-4
`;

const CarDetails = tw.div`
  flex-1
`;

const Service = tw.div`
  font-medium
`;

const Time = tw.div`
  text-xs text-blue-500
`;

const Price = tw.div`
  text-sm
`;
