import styled from 'styled-components';

const media = {
  desktop: '@media(min-width: 820px)',
};

export const SearchArea = styled.div`
margin: 0;
padding: 0;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
align-self: 
width: 100%;
padding-top: 10%;
padding-bottom: 10%;
margin-bottom: 10%;
background: rgb(60,62,68);


${media.desktop} {
  border-radius: 10px;
  margin: 5%;
  padding: 5%;
  padding: 0;
  display: flex;
  flex-direction: row;
  width: 90%;
}
`;

export const FilterButtons = styled.div`
display: flex-box;
${media.desktop} {
  margin: 3%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
}

`;

export const Button = styled.div`
border: solid 1px;
border-radius: 10px;
cursor: pointer;
margin-right: 5%;
text-align: center;
padding: 1%;
background-color: #00DBAF;
border: solid 5px rgb(32, 35, 41);
font-size: 100%;
color: black;

${media.desktop} {
font-size: 200%;
}
&:hover
{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
}
`;

export const InputLabel = styled.label`
`;

export const InputTitle = styled.div`
  align-items: flex-start;
  margin-left: 5%;
  p {
    color: white;
    font-size: 2em;
    margin: 0;
    padding: 0;
  }

  ${media.desktop} {
    display: flex;
    flex-direction: row;
  }
`;

export const Input = styled.input`
${media.desktop} {
  width: 80%;
  height: 50px;
  font-size: 2em;
}
    margin-left: 5%;
    margin-top: 5%;
    width: 80%;
    height: 30px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
