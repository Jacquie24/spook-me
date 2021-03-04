
import "./LocationInfoBox.css"

const LocationInfoBox = ({ locationInfo, setLocationInfo }) => {

    return (
        <div>
            {locationInfo && (
                <div className="location-info">

                    <h2>Haunting Story</h2>
                    <ul>
                        <li>LOCATION: <strong>{locationInfo.location}</strong></li>
                        <li>DESCRIPTION: <strong>{locationInfo.description}</strong></li>
                    </ul>
                    <button className="button is-small" onClick={() => {
                        setLocationInfo(null);
                    }}>close</button>
                    </div>
            )}
                </div>
            
    );
};

export default LocationInfoBox;