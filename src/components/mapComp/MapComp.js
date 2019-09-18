import React,{useState} from 'react'
import PropTypes from 'prop-types'
import 'leaflet/dist/leaflet.css'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import IntroCardComp from '../introCardComp/IntroCardComp'


delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../assets/custom_marker_x2.png'),
    iconUrl: require('../../assets/custom_marker.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
    iconSize:     [60, 50],
    shadowSize:   [0, 0],
    popupAnchor:  [3, -35]
});

function MapComp(){    
    const [lat,setLat]=useState( 
        -59.05293398570514);
    const [lng,setLng]=useState( -15.0);
    const [zoom,setZoom]=useState(2.4);
    const [position,setPosition]=useState([lat, lng]);
    const [positionCenter,setPositionCenter]=useState([10.0,-15.0]);
    return(
                     <Map zoomControl={false} center={positionCenter} zoom={zoom} style={{height: '100vh',width:'100%'}}>
                        <TileLayer
                        url='https://server.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer/tile/{z}/{y}/{x}'
                        attribution='Tiles &copy; Esri &mdash;'
                        minZoom= {1}
                        maxZoom= {13}
                        zoom={zoom}
                        />
                        <Marker position={position}>
                        <Popup>
                             <IntroCardComp/>
                        </Popup>
                        </Marker>
                    </Map>
    );
}
MapComp.propTypes={};
export default MapComp;