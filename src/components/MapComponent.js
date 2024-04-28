import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Correcting the path for marker icons
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const center = [37.761222, -122.434559]; // Latitude and Longitude of the address

const MapComponent = () => {
  return (
    <div className="map-container">
      <MapContainer
        center={center}
        zoom={17}
        style={{ height: '400px', width: '80%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={center}>
          <Popup>
            Pure Mineral Aesthetics <br /> 4023 18th St, Ste B,{' '}
            <p>San Francisco, CA 94114.</p>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;
