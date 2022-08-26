import { GoogleMap, useLoadScript, Marker, Polygon, Data } from '@react-google-maps/api';
import { useMemo } from 'react'
import './index.css'
import dataJson from '../geojson.json'
import indiaStates from '../indiaStates.json'

export default function Map() {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: ""
    });

    const center = useMemo(() => ({
        lat: 19.7515,
        lng: 75.7139
    }), []);

    const onMapLoad = (map) => {
        //sample geojson to load google shaped polygon on Australia
        // map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
        // map.data.addGeoJson(dataJson)

        map.data.addGeoJson(indiaStates)
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
        editable: true,
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
            zoom={4.5}
            center={center}
            mapContainerClassName='map-container'
            onLoad={onMapLoad}
        >
            <Data
                onLoad={onDataLoad}
                options={dataOptions}
            />
        </GoogleMap>
    )
}