import React from 'react';
import { Marker, NaverMap } from 'react-naver-maps';

const Map = () => {
  const jibun = '잠실동 312-4';
  const price = '28억';
  const markerIcon = {
    content: `<div class="marker">
                <div class="marker__asset-info">
                  <div class="marker__asset-info__jibun">${jibun}</div>
                  <span class="marker__asset-info__price">${price}</span>
                </div>
              </div>`,
    size: new window.naver.maps.Size(16, 16),
    anchor: new window.naver.maps.Point(16, 16),
  };

  return (
    <>
      <NaverMap
        mapDivId={'react-naver-map'}
        style={{
          width: '100vw',
          height: '100vh',
        }}>
        <Marker
          position={{ lat: 37.3595704, lng: 127.105399 }}
          icon={markerIcon}
        />
      </NaverMap>
    </>
  );
};

export default Map;
