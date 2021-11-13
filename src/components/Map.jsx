import React from "react";
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {

    const mapStyles = {
        height: "50vh",
        width: "100%"
    }

    const defaultCenter = {
        lat: data.lat,
        lng: data.lng
    }

    return(
        <LoadScript googleMapsApiKey='AIzaSyAK0nvKhyfl0x9rFkda7GnBp_d8bpW3eis'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={defaultCenter}
                zoom={17}
            >
                <Marker position={defaultCenter}/>
            </GoogleMap>
        </LoadScript>
    );
};

export { Map }