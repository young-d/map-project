import { IoIosSearch } from 'react-icons/io';
import logo_img from '../../_assets/hexagon.png';
import styled from '@emotion/styled';

const Header = () => {
  return (
    <Wrapper>
      <img src={logo_img} />
      <input type="text" name="search-bar" />
      <IoIosSearch
        style={{
          position: 'absolute',
          right: '16px',
          top: '16px',
          fontSize: '24px',
          cursor: 'pointer',
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  height: 60px;
  padding: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1000;

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

export default Header;
