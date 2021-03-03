import React from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 33.748997,
    lng: 84.387985,

}
  


const Map = ({ location, zoomLevel}) => {
    
      return (
    <div className="map">
      <h2 className="map-h2">Come Visit Us At Our Campus</h2>
  
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'REACT_APP_GOOGLE_MAPS_API_KEY' }}
          defaultCenter={location}
          defaultZoom={zoomLevel}
        >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
    )
    
    }
  export default Map;