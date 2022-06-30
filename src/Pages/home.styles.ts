import styled from 'styled-components';

export const Home = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    font-weight: bold;
    color: gray;
    margin-left: 16px;
  }

  .caracther-card {
    width: 90%;
    border: 1px solid blue;
    width: 100%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

    .img {
      width: 100%;
      height: 150px;
      background-color: gray;
    }
  }
`;
