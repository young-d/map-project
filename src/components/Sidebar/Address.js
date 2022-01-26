import React from 'react';
import { useAssetContext } from '../../contexts/useAssetProvider';
import { addressFormat } from '../../utils/addressFormat';
import styled from '@emotion/styled';

const Address = ({}) => {
  const { assetState, updateAsset } = useAssetContext();
  const { sidoAddress, assetAddress, roadNameAddress } = assetState?.assetAPI;
  const { addressToggled } = assetState;

  const handleToggleAddress = () => {
    updateAsset({ ...assetState, addressToggled: !addressToggled });
  };

  return assetAddress && roadNameAddress ? (
    <Wrapper onClick={handleToggleAddress}>
      <span>{sidoAddress}</span>
      <span>
        {!addressToggled
          ? addressFormat(assetAddress)
          : addressFormat(roadNameAddress)}
      </span>
    </Wrapper>
  ) : (
    ''
  );
};

const Wrapper = styled.div`
  font-size: 18px;
  line-height: 1.6;
  font-weight: bold;
  height: 27px;
  letter-spacing: -0.9px;
  cursor: pointer;

  & :not(:first-of-type) {
    margin-left: 6px;
    color: #6d6d6d;
    transition: 2s ease-in-out;
  }
`;

export default Address;
