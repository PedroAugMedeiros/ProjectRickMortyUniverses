import styled from 'styled-components';

export const SearchArea = styled.div`
display: flex;
width: 100%;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
color: #00DBAF;
`;

export const FilterButtons = styled.div`
flex-wrap: wrap;
padding: 10px;

`

export const Button = styled.button`
cursor: pointer;
background: #00DBAF;
color: black;
margin: 5px;
font-size: 1em;
border-radius: 5px;
border: 2px solid #2A004F;
width: 50%;

&:hover
{
        -webkit-transform: scale(1.05);
        -ms-transform: scale(1.05);
        transform: scale(1.05);
        box-shadow: 0 4px 5px 3px rgba(119,53,136,.459)!important;
}
`;

export const InputLabel = styled.label`
`;


export const InputTitle = styled.div`
    font-weight: bold;
`;

export const Input = styled.input`
    width: 100%;
    height: 30px;
    border: 1px solid lightblue;
    border-radius: 5px;
`;
