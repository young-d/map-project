import { useAssetContext } from '../../contexts/useAssetProvider';
import { BiChevronRight } from 'react-icons/bi';
import { GoPrimitiveDot } from 'react-icons/go';
import styled from '@emotion/styled';

const profitRatio = 4.2;

const InfoList = () => {
  const { assetState } = useAssetContext();
  const { landArea, buildingArea, price } = assetState?.assetAPI;

  const assetValues = [
    { subject: '토지', content: landArea, unit: 'm²' },
    { subject: '건물', content: buildingArea, unit: 'm² ' },
    { subject: '추정가', content: price, unit: '원' },
    { subject: '수익률', content: profitRatio, unit: '%' },
  ];

  return (
    <AssetValue>
      {assetValues.map(({ subject, content, unit }, index) => (
        <ValueItem key={index}>
          {index === 2 && <GoPrimitiveDot style={{ ...dotIconStyle }} />}
          <Subject>{subject}</Subject>
          <Content>{content ? `${content} ${unit}` : '-'}</Content>
          <BiChevronRight style={{ ...arrowIconStyle }} />
        </ValueItem>
      ))}
    </AssetValue>
  );
};

const AssetValue = styled.ul`
  width: 100%;
  font-size: 18px;
`;

const ValueItem = styled.li`
  display: flex;
  align-items: center;
  line-height: 27px;
  position: relative;
`;

const Subject = styled.span`
  flex-basis: 40%;
  font-weight: bold;
  padding-left: 32px;
`;

const Content = styled.span`
  letter-spacing: 0.1px;
`;

const dotIconStyle = {
  position: 'absolute',
  top: 2,
  left: 12,
  color: '#ff6565',
  fontSize: '21px',
  cursor: 'pointer',
};

const arrowIconStyle = {
  marginLeft: 'auto',
  cursor: 'pointer',
};

export default InfoList;
