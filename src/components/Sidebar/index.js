import React from 'react';
import styled from '@emotion/styled';
import Address from './Address';
import { useAssetContext } from '../../contexts/useAssetProvider';

const profitRatio = 4.2;

const SideBar = ({ isLoading = false }) => {
  const { assetState } = useAssetContext();
  const { name, landArea, buildingArea, price } = assetState?.assetAPI;
  const assetValues = [landArea, buildingArea, price, profitRatio];

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <Wrapper>
      <Header>
        <img src="https://user-images.githubusercontent.com/70619304/150925831-69dde97d-31bc-4119-9c94-e0719534b762.png" />
        <input type="text" name="search-bar" />
      </Header>
      <Outer>
        <TitleInner>
          <Text>
            <Address />
            <AssetName>{name}</AssetName>
          </Text>
        </TitleInner>
        <AssetImage src="https://cdn.zeplin.io/61e115d5cfc3ec4f33ebb98f/assets/145F4566-F3E2-4959-97EC-69A1C88032E4.png"></AssetImage>
        <InfoInner>
          <Chart></Chart>
          <AssetValue>
            <ValueItem></ValueItem>
          </AssetValue>
          <AssetHistory></AssetHistory>
        </InfoInner>
      </Outer>
    </Wrapper>
  );
};

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

const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 32px;
    margin-left: 8px;
    cursor: pointer;
  }

  input {
    width: calc(100% - 60px);
    height: 48px;
    border: 1px solid #ccc;
    border-radius: 2px;
    font-size: 1.4em;
    padding: 8px 10px;
  }
`;

const Outer = styled.div`
  height: calc(100% - 104px);
  position: relative;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TitleInner = styled.div`
  height: 85px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 29px;
  position: sticky;
  top: 0;
  box-shadow: 4px 0 8px 0 #bebebe;
`;

const Text = styled.article`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AssetName = styled.span`
  letter-spacing: -0.8px;
`;

const AssetImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const InfoInner = styled.div`
  height: 668px;
  padding: 0 29px;
`;

const Chart = styled.section`
  height: 80px;
`;

const AssetValue = styled.ul`
  height: 180px;
  border: 1px solid green;
`;

const ValueItem = styled.li`
  display: flex;
`;

const AssetHistory = styled.section``;

export default SideBar;
