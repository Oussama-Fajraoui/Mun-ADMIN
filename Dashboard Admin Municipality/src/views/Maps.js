import React from "react";
import '../components/index.css'
// react-bootstrap components
import { Badge, Button, Navbar, Nav, Container } from "react-bootstrap";
import {GoogleMap,useLoadScript,Marker} from "@react-google-maps/api"
import {useMemo} from "react"
function Maps() {
  const {isLoaded} = useLoadScript({googleMapsApiKey:process.env.NEXT_PUBLI_GOOGLE_MAPS_API_KEY})
  if (!isLoaded) return <div>Loading...</div>;
  return <Map/>
}
function Map(){
  return <GoogleMap zoom={10} center ={{lat:44,lng:-80}} mapContainerClassName="map-container"></GoogleMap>
}

export default Maps;




/* const mapRef = React.useRef(null);
  React.useEffect(() => {
    let google = window.google;
    let map = mapRef.current;
    let lat = "40.748817";
    let lng = "-73.985428";
    const myLatlng = new google.maps.LatLng(lat, lng);
    const mapOptions = {
      zoom: 13,
      center: myLatlng,
      scrollwheel: false,
      zoomControl: true,
    };

    map = new google.maps.Map(map, mapOptions);

    const marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: "Light Bootstrap Dashboard PRO React!",
    });

    const contentString =
      '<div class="info-window-content"><h2>Light Bootstrap Dashboard PRO React</h2>' +
      "<p>A premium Admin for React-Bootstrap, Bootstrap, React, and React Hooks.</p></div>";

    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    google.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });
  }, []); */