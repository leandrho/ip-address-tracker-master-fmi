import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useIP } from '../hooks/useIP';

function ChangeView({ center, zoom }) {
    const map = useMap();
    useEffect(() => {
      if (!map) return;
      map.setView(center, zoom);
    }, [map, center, zoom]);
  
    return null;
  }

export const Map = () => {
    const {ipInfo} = useIP();
    const [position, setPosition] = useState([0, 0])

    useEffect(() => {
        setPosition([ipInfo.lat, ipInfo.lng]);
    }, [ipInfo]);

    return (
        <MapContainer center={position} zoom={15} scrollWheelZoom={true} style={{ height: "65vh", width: "100%" }}>
            <TileLayer
               attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeView center={position} zoom={15} />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    );
}
