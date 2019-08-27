import styled from 'styled-components'


const FooterStyled = styled.div`
   p{
       display: inline;
    }

    .link{
        font-family: Text Bold;
        font-size: 12px;
   }
   
   .link:hover{
        background-color: white;
        border-radius: 10px;
        color: black;
        padding: 5px 10px 5px 10px;
   }

   .selected{
        background-color: white;
        border-radius: 10px;
        color: black;
        padding: 5px 10px 5px 10px;
   }

   .divisor{
       margin-left: 10px;
       margin-right: 10px;
   }
`;

export default FooterStyled;

