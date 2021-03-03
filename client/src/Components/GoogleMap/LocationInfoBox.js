
const LocationInfoBox = ({ info }) => {
    return (
        <div className="location-info">
            <h2>Haunting Story</h2>
            <ul>
                <li>LOCATION: <strong>{info.location}</strong></li>
                <li>DESCRIPTION: <strong>{info.description}</strong></li>
            </ul>
            <button className="button is-small">close</button>
        </div>
    );
};

export default LocationInfoBox;