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

   .link-menu{
    text-align: left;
    display: block;
    font-size: 9px;
   }

   .link-menu:hover{
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

   .color-hover{
        color: #aaa9a9;  
       
    }
    p:hover{
        color: white !important;
        cursor: pointer
    }


    @media only screen and (max-width: 700px) {
        width: 80%;
        font-size: 35px;


    }

`;

export default MenuFluanteComponentStyled;

