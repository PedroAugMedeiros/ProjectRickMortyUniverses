import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 0;
`;

export const Home = styled.div`
  padding: 0;
  margin: 0;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background: rgb(32, 35, 41);

  .caracther-card {
    background: rgb(60, 62, 68);
    width: 80%;
    display: flex;
    flex-flow: column nowrap;
    margin-bottom: 10%;
    border-radius: 10px;

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

    img {
      width: 100%;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
      background-color: gray;
    }
  }
`;

export const Button = styled.h1`
width: 100%;
cursor: pointer;
color: white;
font-size: 2em;
border-radius: 10px;
hight: 2em;
margin-bottom: 0;
text-align: flex-start;
justify-content: flex-start;
align-itemns: flex-start;
margin-left: 5%;

&:hover {
  color: #00DBAF;
}
`;
