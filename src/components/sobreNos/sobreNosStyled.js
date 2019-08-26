import styled from 'styled-components'


const SobreNosComponentStyled = styled.div`
    margin-top: 50px;
    width: 100%
    text-align: center;

   
   .info{
        width: 40%
        margin: 0 auto;
        text-align: left;
        display: inline-block;
    }

   .div-img-title{
        width: 20%;
        display: inline;
        position: absolute;
        margin-left: -105px;
   }

   .p-title{
        font-size: 37px;
       display: inline;
       margin-right: 12px;
    }

   .font-orange{
        color: #f19c28
   }

   .descricao{
    font-size: 16px;
   }

   .label{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: -6px;

   }

   .center{
        text-align: center;
   }


   
   @media only screen and (max-width: 700px) {
        .div-img-title{
            margin-left: -6px;
            
            img{
                width: 92px;
            }
        }

        .info{
            width: 70%;
            margin: 0 auto;
            text-align: left;
            display: inline-block;
            font-size: initial;
        }

        .p-title{
            font-size: 16px;
        }

    }
`;

export default SobreNosComponentStyled;

