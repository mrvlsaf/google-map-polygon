import { GoogleMap, useLoadScript, Marker, Polygon, Data } from '@react-google-maps/api';
import { useMemo } from 'react'
import './Map.css'
import dataJson from '../geojson.json'

export default function Map() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""
    });

    const center = useMemo(() => ({
        lat: 28.4089,
        lng: 77.3178
    }), []);

    const outerCoords = [
        { lat: 25.774, lng: -80.19 },
        { lat: 18.466, lng: -66.118 },
        { lat: 32.321, lng: -64.757 },
    ];
    const innerCoords = [
        { lat: 28.745, lng: -70.579 },
        { lat: 29.57, lng: -67.514 },
        { lat: 27.339, lng: -66.668 },
    ];

    const onMapLoad = (map) => {
        // map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
        map.data.addGeoJson(dataJson)
    }

    const onClick = (...args) => {
        console.log('onClick args: ', args[0].latLng.lat(), ' : ', args[0].latLng.lng())
    }

    const onDataLoad = data => {
        console.log('data: ', data)
    }

    const dataOptions = {
        controlPosition: 'TOP_LEFT',
        controls: ['Point'],
        drawingMode: 'Point',
        featureFactory: geometry => {
            console.log('geometry: ', geometry)
        },
        clickable: true,
        draggable: true,
        editable: false,
        fillColor: '#F05',
        fillOpacity: 1,
        strokeColor: '#00FF55',
        strokeOpacity: 1,
        strokeWeight: 2,
        title: 'Title',
        visible: true,
        zIndex: 2
    }

    if (!isLoaded) return <div>Loading...</div>
    return (
        <GoogleMap
            zoom={3}
            center={center}
            mapContainerClassName='map-container'
            onClick={onClick}
            onLoad={onMapLoad}
        >
            {/* <Marker position={center} />
            <Polygon
                paths={[innerCoords, outerCoords]}
                strokeColor="#ff0000"
                strokeOpacity="1"
                strokeWeight="2"
                fillColor="FF0000"
                fillOpacity="0.35"
                editable={true}
                draggable={true}
                geodesic={true}
            /> */}

            <Data
                onLoad={onDataLoad}
                options={dataOptions}
            />
        </GoogleMap>
    )
}