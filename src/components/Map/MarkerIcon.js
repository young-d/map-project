import { Marker } from 'react-naver-maps';
import { useState, useEffect } from 'react';
import { useAssetContext } from '../../contexts/useAssetProvider';
import { addressFormat } from '../../utils/addressFormat';

const MarkerIcon = ({ markerSize, isLoading, currentPointer }) => {
  const { assetState } = useAssetContext();
  const { addressToggled, assetAPI } = assetState;
  const [asset, setAsset] = useState({
    detailAddress: '',
    price: '',
  });

  useEffect(() => {
    if (Object.keys(assetAPI).length > 0) {
      const { assetAddress, roadNameAddress, price } = assetAPI;
      setAsset({
        detailAddress: !addressToggled
          ? addressFormat(assetAddress)
          : addressFormat(roadNameAddress),
        price,
      });
    }
  }, [assetState]);

  const markerIcon = {
    content: `
      <div class="marker ${isLoading ? 'loading' : ''}" 
        style="width: ${markerSize?.backgroundSize}px; 
              height: ${markerSize?.backgroundSize}px; 
              background-size: 100%;">
      ${
        !isLoading
          ? `<div class="marker__asset-info" style="font-size: ${markerSize?.fontSize}px">
        <div class="marker__asset-info__address">${asset.detailAddress}</div>
        <span class="marker__asset-info__price">${asset.price}</span>
        </div>`
          : ''
      }
      </div>
    `,
  };

  return asset.detailAddress && asset.price ? (
    <Marker position={currentPointer} icon={markerIcon} />
  ) : (
    ''
  );
};

export default MarkerIcon;
