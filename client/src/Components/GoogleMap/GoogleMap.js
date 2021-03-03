import React, { useState } from "react";
import GoogleMapReact from "google-map-react";
import "./Map.css";
import LocationMarker from "./LocationMarker";
import HauntedPlaces from "./haunted_places.json"
import LocationInfoBox from "./LocationInfoBox";
// import { Icon } from '@iconify/react'
// import locationIcon from '@iconify/icons-mdi/map-marker'





const Map = ({ center, zoom, props }) => {
  const [locationInfo, setLocationInfo] = useState(null);

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBMbV-_uofN5Ac1WcR0CY9_jwB-_zayCsg' }}
        defaultCenter={center}
        defaultZoom={zoom}

      >
        {HauntedPlaces.map((haunting) => (
          <LocationMarker key={haunting.description}
            lat={haunting.latitude}
            lng={haunting.longitude}
            onClick={() => setLocationInfo({ location: haunting.location, description: haunting.description })} 
            
          />
        ))}
        
        <LocationMarker lat={center.lat} lng={center.lng} />

      </GoogleMapReact>
      <LocationInfoBox locationInfo={locationInfo} setLocationInfo = {setLocationInfo} />
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