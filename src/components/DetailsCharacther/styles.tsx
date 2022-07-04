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
    align-items: flex-start;
    margin-bottom: 10%;
    border-radius: 10px;

    img {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: gray;
    }
    
    h1 {
      margin: 15px;
    }

    p {
      margin: 0;
      padding: 5px;
      padding-left: 0;
      font-size: 1.5em;
      margin-left: 5%;
    }
`;
