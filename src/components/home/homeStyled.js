import styled from 'styled-components'


const HomeComponentStyled = styled.div`
    margin-top: 100px;
    width: 100%
    text-align: center;
    margin-left: 127px;

   
   .info{
        width: 70%;
        margin-left: -15%;
        display: inline-block;
        margin-top: 7%;
        text-align: left;
        margin-bottom: 5%;
    }

    .title{
        color: white;
    }

   .div-img-title{
        width: 20%;
        display: inline;
        position: absolute;
        margin-left: -105px;
   }

   .p-title{
       display: inline;
       margin-right: 12px;
       font-family : Bureau Black;
       font-size: 80px;

    }

   .font-orange{
        color: #f19c28
   }

   .label{
    text-align: left;
    color: white;
    margin-left: 8%;
    margin-top: -84px;
    font-size: 26px;
    font-family : Text Bold;
   }
   .descricao{
    font-size: 16px;
    text-align: left;
    color: white;
    margin-left: 8%;
    margin-top: 32px;
    font-family : Text Font;

   }

   @media only screen and (max-width: 700px) {
        margin-left: 13px;
        margin-top: 157px;

        .info{

            width: 66%;
            text-align: left;
            display: inline-block;
            margin-top: 7%;
            margin-bottom: 5%;
            margin-left: -15%;

        }

        .p-title{
            font-size: 40px;
        }
    }




`;

export default HomeComponentStyled;

