import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Title from './Title';
import ChartList from './ChartList';
import InfoList from './InfoList';
import asset_img from '../../_assets/asset__img.png';

const SideBar = () => {
  return (
    <>
      <Header />
      <Outer>
        <TitleInner>
          <Title />
        </TitleInner>
        <AssetImage src={asset_img}></AssetImage>
        <InfoInner>
          <ChartList />
          <InfoList />
          <AssetHistory />
        </InfoInner>
      </Outer>
    </>
  );
};

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
  padding: 0 30px;
  position: sticky;
  top: 0;
  box-shadow: 4px 0 8px 0 #bebebe;
  z-index: 1000;
`;

const AssetImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const InfoInner = styled.div`
  position: relative;
  padding: 0 20px 44px 20px;
  z-index: 10;
`;

const AssetHistory = styled.section`
  height: 300px;
`;

export default SideBar;
