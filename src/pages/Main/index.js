import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import useAxios from '../../hooks/useAxios';
import { thousandUnitNumber, wonUnitNumber } from '../../utils/numberFormat';
import useQuery from '../../hooks/useQuery';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';

const DEFAULT_ASSET_PNU = '1168010600110020000';

const Main = () => {
  const asset_pnu = useQuery().get('asset_pnu');
  const [data, fetchData] = useAxios(
    `/api/asset/all-processed-data?asset_pnu=${asset_pnu || DEFAULT_ASSET_PNU}`
  );
  const { isLoading, error, value } = data;
  const [assetDetail, setAssetDetail] = useState({});
  const [markInit, setMarkInit] = useState(asset_pnu ? true : false);
  const [currentPointer, setCurrentPointer] = useState(
    assetDetail?.initialPointer
  );
  const [addressToggled, setAddressToggled] = useState(false);

  useEffect(() => {
    fetchData();
  }, [asset_pnu]);

  useEffect(() => {
    if (!value?.assetOverviewMulti || !value?.centerPoint) return;

    const {
      assetOverviewMulti: {
        assetName,
        assetAddress,
        roadNameAddress,
        assetValue: { estimatePrice: price },
        landsData: { assetLandArea: landArea },
        buildingData: { groundFloorArea: buildingArea },
      },
      centerPoint: { streetViewTarget: currentPointer },
    } = value;

    setAssetDetail({
      name: assetName.trim(),
      sidoAddress: assetAddress
        .trim()
        .split(' ')
        .filter(word => word)
        .slice(0, 2)
        .join(' '),
      detailAddress: !addressToggled
        ? assetAddress
            .trim()
            .split(' ')
            .filter(word => word)
            .slice(2, 4)
            .join(' ')
        : roadNameAddress.trim().split(' ').slice(2, 4).join(' '),
      price: wonUnitNumber(price),
      landArea: `${thousandUnitNumber(Math.round(landArea))}`,
      buildingArea: `${thousandUnitNumber(Math.round(buildingArea))}`,
      initialPointer: { lat: currentPointer.y, lng: currentPointer.x },
    });
  }, [value]);

  const handleToggleAddress = () => {
    setAddressToggled(prevState => !prevState);
  };

  const handleClickMapArea = e => {
    const coord = e.coord;

    if (coord) {
      !markInit && setMarkInit(prevState => !prevState);
      setCurrentPointer({ lat: e.coord.y, lng: e.coord.x });
      fetchData();
    }
  };

  return (
    <>
      <RenderAfterNavermapsLoaded
        clientId={process.env.REACT_APP_NAVER_CLOUD_CLIENT_ID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}>
        <Map
          assetDetail={{ ...assetDetail, currentPointer }}
          isLoading={isLoading}
          onClick={handleClickMapArea}
          markInit={markInit}
        />
      </RenderAfterNavermapsLoaded>
    </>
  );
};

export default Main;
