import { PieChart } from 'react-minimal-pie-chart';
import styled from '@emotion/styled';

const ChartList = () => {
  const landArea = [{ title: '토지', value: 100, color: '#ffcfe7' }];
  const buildingArea = [{ title: '건물', value: 80, color: '#9dd9a0' }];
  const price = [{ title: '추정가', value: 80, color: '#faa2a2' }];
  const profitRatio = [{ title: '수익률', value: 30, color: '#e8b36a' }];
  const datas = [landArea, buildingArea, price, profitRatio];

  return (
    <ListWrapper>
      {datas.map((data, index) => {
        return (
          <ItemWrapper key={index}>
            <PieChart
              data={data}
              reveal={data[0].value}
              label={({ dataEntry }) => dataEntry.title}
              labelPosition={0}
              background="#eee"
              lineWidth={40}
              startAngle={270}
              labelStyle={{ fontSize: '14px' }}
            />
          </ItemWrapper>
        );
      })}
    </ListWrapper>
  );
};

const ListWrapper = styled.ul`
  display: flex;
  margin: 10px 0 30px 0;

  & :not(:last-of-type) {
    margin-right: 5px;
  }
`;

const ItemWrapper = styled.li`
  width: 80px;
  height: 80px;
`;

export default ChartList;
