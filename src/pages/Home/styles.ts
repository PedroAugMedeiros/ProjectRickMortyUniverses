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
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 10%;
    border-radius: 10px;


    img {
      width: 100%;
      border-radius: 10px;
      background-color: gray;
    }
  }
`;

export const Button = styled.button`
cursor: pointer;
background: #00DBAF;
color: black;
font-size: 1em;
margin: 1em;
padding: 0.25em 1em;
border-radius: 10px;
hight: 2em;
border: 2px solid #2A004F;
width: 30%;
height: 20vh%;
margin-bottom: 0;


&:hover
{
        -webkit-transform: scale(2.00);
        -ms-transform: scale(2.00);
        transform: scale(2.00);
}
`;
