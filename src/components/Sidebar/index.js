import React from 'react';
import styled from '@emotion/styled';
import Address from './Address';
import { useAssetContext } from '../../contexts/useAssetProvider';
import { BiChevronRight } from 'react-icons/bi';
import { IoIosSearch } from 'react-icons/io';
import { BsHeart } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

const profitRatio = 4.2;
const LOGO_IMAGE_URL =
  'https://user-images.githubusercontent.com/70619304/150925831-69dde97d-31bc-4119-9c94-e0719534b762.png';
const ASSET_IMAGE_URL =
  'https://cdn.zeplin.io/61e115d5cfc3ec4f33ebb98f/assets/145F4566-F3E2-4959-97EC-69A1C88032E4.png';

const SideBar = ({ isLoading = false }) => {
  const { assetState } = useAssetContext();
  const { name, landArea, buildingArea, price } = assetState?.assetAPI;
  const assetValues = [
    { subject: '토지', content: landArea, unit: 'm²' },
    { subject: '건물', content: buildingArea, unit: 'm² ' },
    { subject: '추정가', content: price, unit: '원' },
    { subject: '수익률', content: profitRatio, unit: '%' },
  ];

  if (isLoading) {
    return <div>loading...</div>;
  }

  return (
    <>
      <Header>
        <img src={LOGO_IMAGE_URL} />
        <input type="text" name="search-bar" />
        <IoIosSearch
          style={{
            position: 'absolute',
            right: '16px',
            top: '16px',
            fontSize: '1.6em',
          }}
        />
      </Header>
      <Outer>
        <TitleInner>
          <Text>
            <Address />
            <AssetName>{name}</AssetName>
          </Text>
          <BsHeart style={{ fontSize: '1.4em' }} />
        </TitleInner>
        <AssetImage src={ASSET_IMAGE_URL}></AssetImage>
        <InfoInner>
          <Chart></Chart>
          <AssetValue>
            {assetValues.map(({ subject, content, unit }, index) => {
              return (
                <ValueItem key={index}>
                  {index === 2 && (
                    <GoPrimitiveDot
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: -8,
                        color: '#ff6565',
                        fontSize: '1.3em',
                      }}
                    />
                  )}
                  <Subject>{subject}</Subject>
                  <Content>{`${content} ${unit}`}</Content>
                  <BiChevronRight
                    style={{
                      marginLeft: 'auto',
                      cursor: 'pointer',
                    }}
                  />
                </ValueItem>
              );
            })}
          </AssetValue>
          <AssetHistory></AssetHistory>
        </InfoInner>
      </Outer>
    </>
  );
};

const Header = styled.div`
  width: 100%;
  height: 60px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

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
  padding: 0 30px;
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
  padding: 0 20px 44px 20px;
`;

const Chart = styled.section`
  height: 80px;
`;

const AssetValue = styled.ul`
  width: 100%;
  font-size: 1.16em;
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 1.6em;
  position: relative;
`;

const Subject = styled.span`
  flex-basis: 40%;
  font-weight: bold;
  padding-left: 14px;
`;

const Content = styled.span`
  letter-spacing: 0.1px;
`;

const AssetHistory = styled.section``;

export default SideBar;
