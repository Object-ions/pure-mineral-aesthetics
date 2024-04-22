import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const center = [37.761222, -122.434559]; // Latitude and Longitude of the address

const MapComponent = () => {
  return (
    <MapContainer
      center={center}
      zoom={17}
      style={{ height: '400px', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={center}>
        <Popup>
          Pure Mineral Aesthetics <br /> 4023 18th St, Ste B, San Francisco, CA
          94114.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
