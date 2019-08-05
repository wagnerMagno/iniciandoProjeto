import styled from 'styled-components'


const MenuFluanteComponentStyled = styled.div`
    height: 60% !important;
    width: 40%;
    float: left;
    color: white;
    padding: 10px;
    position: absolute;
    z-index: 2;

    margin-left: 10%;
    margin-top: 3%;
    font-size: 50px;
    font-weight: 900;

   div{
    height: 30px !important;
       
   }


   .color-hover{
        color: #aaa9a9;  
       
    }
    p:hover{
        color: white !important;
        cursor: pointer
    }


    @media only screen and (max-width: 700px) {
        width: 90%;
        font-size: 40px;


    }

`;

export default MenuFluanteComponentStyled;

