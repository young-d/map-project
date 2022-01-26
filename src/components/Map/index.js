import React, { useState, useMemo } from 'react';
import { NaverMap } from 'react-naver-maps';
import styled from '@emotion/styled';
import MarkerIcon from './MarkerIcon';
import { useAssetContext } from '../../contexts/useAssetProvider';
import { useEffect } from 'react/cjs/react.development';

const DEFAULT_LAT = 37.506608542;
const DEFAULT_LNG = 127.065369677;

const Map = ({ isLoading = false, onClick, markInit = false }) => {
  const DEFAULT_ZOOM = 16;
  const [zoom, setZoom] = useState(DEFAULT_ZOOM);
  const markerSize = useMemo(() => {
    return { backgroundSize: zoom ** 1.8, fontSize: zoom * 1.1 };
  }, [zoom]);
  const { assetState, updateAsset } = useAssetContext();
  const { assetAPI } = assetState;
  const [currentPointer, setCurrentPointer] = useState(
    assetState?.assetAPI?.currentPointer || {
      lat: DEFAULT_LAT,
      lng: DEFAULT_LNG,
    }
  );

  useEffect(() => {
    assetAPI?.currentPointer && setCurrentPointer(assetAPI.currentPointer);
  }, [assetAPI]);

  const handleClickMapArea = e => {
    onClick?.(e);
    assetAPI &&
      updateAsset({
        ...assetState,
        assetAPI: {
          ...assetAPI,
          currentPointer: { lat: e.coord.y, lng: e.coord.x },
        },
      });
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
        onClick={handleClickMapArea}
        onZoomChanged={zoom => setZoom(() => zoom)}>
        {markInit && zoom >= DEFAULT_ZOOM && (
          <MarkerIcon
            markerSize={markerSize}
            isLoading={isLoading}
            currentPointer={currentPointer}
          />
        )}
      </NaverMap>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: calc(100% - 375px);
  height: 100%;
`;

export default Map;
