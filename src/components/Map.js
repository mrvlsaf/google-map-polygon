import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { useMemo } from 'react'
import './Map.css'

export default function Map() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""
    });

    const center = useMemo(() => ({
        lat: 28.4089,
        lng: 77.3178
    }), []);

    if (!isLoaded) return <div>Loading...</div>
    return (
        <GoogleMap
            zoom={12}
            center={center}
            mapContainerClassName='map-container'
        >
            <Marker position={center} />
        </GoogleMap>
    )
}