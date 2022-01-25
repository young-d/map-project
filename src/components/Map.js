import React, { useState, useMemo } from 'react';
import { Marker, NaverMap } from 'react-naver-maps';
import styled from '@emotion/styled';

const DEFAULT_LAT = 37.506608542;
const DEFAULT_LNG = 127.065369677;
const DEFAULT_ZOOM = 16;

const Map = ({ assetDetail, isLoading = false, onClick, markInit = false }) => {
  const {
    detailAddress,
    price,
    currentPointer = { lat: DEFAULT_LAT, lng: DEFAULT_LNG },
  } = assetDetail;
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const markerSize = useMemo(() => {
    return { backgroundSize: zoom ** 1.8, fontSize: zoom * 1.1 };
  }, [zoom]);

  const markerIcon = {
    content: `
      <div class="marker ${isLoading ? 'loading' : ''}" 
        style="width: ${markerSize.backgroundSize}px; 
              height: ${markerSize.backgroundSize}px; 
              background-size: 100%;">
      ${
        !isLoading
          ? `<div class="marker__asset-info" style="font-size: ${markerSize.fontSize}px">
        <div class="marker__asset-info__address">${detailAddress}</div>
        <span class="marker__asset-info__price">${price}</span>
        </div>`
          : ''
      }
      </div>
      `,
  };

  return (
    <Wrapper>
      <NaverMap
        mapDivId={'react-naver-map'}
        ncp
        style={{
          width: '100%',
          height: '100%',
        }}
        center={{ ...currentPointer }}
        defaultZoom={DEFAULT_ZOOM}
        zoomOrigin={{ lng: currentPointer.lng, lat: currentPointer.lat }}
        onClick={e => onClick(e)}
        onZoomChanged={zoom => setZoom(() => zoom)}>
        {markInit && zoom >= DEFAULT_ZOOM && (
          <Marker position={currentPointer} icon={markerIcon} />
        )}
      </NaverMap>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 86%;
  height: 100%;
`;

export default Map;
