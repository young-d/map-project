import styled from '@emotion/styled';

const Spinner = () => {
  return (
    <SpinnerStyled style={{ backgroundColor: '#fff' }}>
      <AnimationBox style={{ backgroundColor: '#ff6565' }} />
    </SpinnerStyled>
  );
};

const SpinnerStyled = styled.div`
  width: 100%;
  height: 4px;
`;

const AnimationBox = styled.div`
  width: 20%;
  height: 4px;
  animation: 2s ease infinite slide;
  border-radius: 4px;

  @keyframes slide {
    to {
      margin-left: 100%;
    }
  }
`;

export default Spinner;
