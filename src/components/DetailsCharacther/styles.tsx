import styled from 'styled-components';

export const DetailsCaracther = styled.div`
padding: 0;
margin: 0;
width: 100%;
display: flex;
flex-flow: column nowrap;
justify-content: center;
align-items: center;
background: rgb(32, 35, 41);
margin-top: 10%;

.caracther-card {
  background: rgb(60, 62, 68);
  width: 80%;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 10%;
  border-radius: 10px;
  margin-bottom: 100%;

  .characterStatusColorAlive {
    margin-top: 0;
    font-size: 1.5em;
    margin-left: 5%;
    color : red;
  }

  .characterStatusColorDead {
    margin-top: 0;
    font-size: 1.5em;
    margin-left: 5%;
    color : rgb(50,205,50);
  }
  
  h1 {
    font-size: 300%;
    margin-left: 5%;
    color: white;
  }

  p {
    font-size: 150%;
    margin-left: 5%;
  }

  img {
    width: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background-color: gray;
  }
}
`;
