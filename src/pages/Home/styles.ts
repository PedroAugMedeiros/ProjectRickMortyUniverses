import styled from 'styled-components';

export const Container = styled.div`
margin: 0;
padding: 0;
`;

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
&:hover
{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        box-shadow: 0 4px 5px 3px rgba(119,53,136,.459)!important;
}
`;
