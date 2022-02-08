import { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";
import { IMAGES } from "../../styles/assets.js";
import { MAPBOXGL_TOKEN } from "../../secrets";

mapboxgl.accessToken = MAPBOXGL_TOKEN;

const Wrapper = tw.div`
  flex-1
`;

const Map = (props) => {
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: IMAGES.MapStyle,
      center: [-73.935242, 40.73061],
      zoom: 9,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 80,
      });
    }
  }, [props.dropoffCoordinates, props.pickupCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map"></Wrapper>;
};

export default Map;
