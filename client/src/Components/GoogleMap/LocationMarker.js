
import { Icon } from "@iconify/react";
import locationIcon from "@iconify-icons/emojione/ghost";

const LocationMarker = ({ lat, lng, onClick}) => {
    return (
        <div className = "location-marker" onClick = {onClick}>
            <Icon icon={locationIcon} className = "location-icon"/>
            
        </div>
    );
};

export default LocationMarker;