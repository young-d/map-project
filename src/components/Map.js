import React, { useEffect, useState } from 'react';
import { Marker, NaverMap } from 'react-naver-maps';

const Map = ({ isLoading = false }) => {
  const jibun = '잠실동 312-4';
  const price = '28억';
  const [currentLocation, setCurrentLocation] = useState({
    lat: 37.506608542,
    lng: 127.065369677,
  });

  const markerIcon = {
    content: `
    <div class="marker ${isLoading ? 'loading' : ''}">
        ${
          !isLoading
            ? `<div class="marker__asset-info">
              <div class="marker__asset-info__jibun">${jibun}</div>
              <span class="marker__asset-info__price">${price}</span>
            </div>`
            : ''
        }
      </div>
    `,
    size: new window.naver.maps.Size(16, 16),
  };

  const handleClickMap = e => {
    setCurrentLocation({ lat: e.coord.y, lng: e.coord.x });
  };

  return (
    <>
      <NaverMap
        mapDivId={'react-naver-map'}
        ncp
        style={{
          width: '100vw',
          height: '100vh',
        }}
        center={{ ...currentLocation }}
        zoom={16}
        onClick={handleClickMap}>
        <Marker position={currentLocation} icon={markerIcon} />
      </NaverMap>
    </>
  );
};

export default Map;
