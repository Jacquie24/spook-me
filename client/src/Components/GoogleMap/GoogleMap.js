import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import LocationMarker from "./LocationMarker";
import * as HauntedPlaces from "./haunted_places.json"
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'


  


const Map = ({ center, zoom }) => {
    
      return (
    <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyBMbV-_uofN5Ac1WcR0CY9_jwB-_zayCsg' }}
          defaultCenter={ center }
          defaultZoom={ zoom }
        >
          <LocationMarker lat={center.lat} lng={center.lng}/>
          </GoogleMapReact>
    </div>
    )
    }

    Map.defaultProps = {
      center: {
      lat: 33.7489,
      lng: -84.3879,
      },
      zoom: 6,
  }

  export default Map;