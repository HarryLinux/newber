import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { IMAGES } from "../../styles/assets.js";
import { MAPBOXGL_TOKEN } from "../../secrets";

mapboxgl.accessToken = MAPBOXGL_TOKEN;

const Wrapper = tw.div`
  flex-1
`;

const Map = () => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: IMAGES.MapStyle,
      center: [-73.935242, 40.73061],
      zoom: 9,
    });
  });

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
