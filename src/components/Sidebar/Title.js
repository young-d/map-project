import React from 'react';
import styled from '@emotion/styled';
import Address from './Address';
import { BsHeart } from 'react-icons/bs';
import { useAssetContext } from '../../contexts/useAssetProvider';

const Title = () => {
  const { assetState } = useAssetContext();
  const { name } = assetState?.assetAPI;

  return (
    <>
      <Text>
        <Address />
        <AssetName>{name}</AssetName>
      </Text>
      <BsHeart style={{ ...heartIconStyle }} />
    </>
  );
};

const Text = styled.article`
  height: 85px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const AssetName = styled.span`
  letter-spacing: -0.8px;
`;

const heartIconStyle = {
  fontSize: '20px',
  cursor: 'pointer',
};

export default Title;
