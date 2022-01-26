import React, { useEffect, useState } from 'react';
import Map from '../../components/Map';
import Spinner from '../../components/Spinner';
import SideBar from '../../components/Sidebar';
import useAxios from '../../hooks/useAxios';
import { thousandUnitNumber, wonUnitNumber } from '../../utils/numberFormat';
import { useHistory, useParams } from 'react-router-dom';
import { RenderAfterNavermapsLoaded } from 'react-naver-maps';
import styled from '@emotion/styled';
import { useAssetContext } from '../../contexts/useAssetProvider';

const DEFAULT_ASSET_PNU = '1168010600110020000';

const Main = () => {
  const history = useHistory();
  const { asset_pnu } = useParams();
  const [data, fetchData] = useAxios(
    `/api/asset/all-processed-data?asset_pnu=${asset_pnu || DEFAULT_ASSET_PNU}`
  );
  const { isLoading, error, value } = data;
  const { updateAsset } = useAssetContext();
  const [markInit, setMarkInit] = useState(asset_pnu ? true : false);

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

    updateAsset({
      assetAPI: {
        name: assetName.trim(),
        sidoAddress: assetAddress
          .trim()
          .split(' ')
          .filter(word => word)
          .slice(0, 2)
          .join(' '),
        assetAddress,
        roadNameAddress,
        price: wonUnitNumber(price),
        landArea: `${thousandUnitNumber(Math.round(landArea))}`,
        buildingArea: `${thousandUnitNumber(Math.round(buildingArea))}`,
        initialPointer: { lat: currentPointer.y, lng: currentPointer.x },
      },
    });
  }, [value]);

  const handleClickMapArea = e => {
    const coord = e.coord;

    if (coord) {
      fetchData();

      if (!markInit) {
        setMarkInit(prevState => !prevState);
        history.push(`/property/${DEFAULT_ASSET_PNU}`);
      }
    }
  };

  return (
    <MainContainer>
      <Wrapper>{!isLoading ? <SideBar /> : <Spinner />}</Wrapper>
      <RenderAfterNavermapsLoaded
        clientId={process.env.REACT_APP_NAVER_CLOUD_CLIENT_ID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}>
        <Map
          isLoading={isLoading}
          onClick={handleClickMapArea}
          markInit={markInit}
        />
      </RenderAfterNavermapsLoaded>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
`;

const Wrapper = styled.nav`
  width: 375px;
  height: 100%;
  display: flex;
  flex-direction: column;

  &,
  div,
  section,
  article,
  ul {
    background-color: #fff;
  }
`;

export default Main;
