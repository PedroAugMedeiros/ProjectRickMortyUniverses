import styled from 'styled-components';

export const DetailsCaracther = styled.div`
  display: flex;
  flex-direction: column; 
  align-items: center;
  text-align: center;
  justify-content: center;

  .caracther-card {
    background: rgb(60, 62, 68);
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10%;
    border-radius: 10px;

    img {
      width: 100%;
      border-radius: 10px;
      background-color: gray;
    }
`;
