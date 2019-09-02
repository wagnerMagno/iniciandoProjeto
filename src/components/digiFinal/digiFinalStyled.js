import styled from 'styled-components'


const DigiFinalComponentStyled = styled.div`
    margin-top: 75px;
    width: 100%
    text-align: center;

   
   .info{
        width: 49%
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

   .font-orange{
    color: #f19c28
}

   .p-title{
    font-family : Bureau Black;
        font-size: 51px;
       margin: 0px;
    }

   .font-green{
        color: #8ce2b5
   }

   .descricao{
    font-size: 16px;
    font-family : Text Font;
   }

   .label{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: -6px;
        font-family : Bureau Black;

   }

   .center{
        text-align: center;
   }

   .header{
       width: 100%;

       .div-descricao{
           width: 80%;
           display: inline-block;
        }

       .img{
            width: 19%;
            display: inline-block;
            top: 0;
            position: absolute;
            margin-top: 73px;
       }

       .descricao{
            width: 90%;
       }
   }

   .container{
        .card{
            min-width: 320px;

            display: inline-block;
            width: 49%;
    
            .img{
                width: 30%;
                display: inline-block;
            }
            
            .conteudo{
                width: 68%;
                display: inline-block;
            }
       }

       img{
        width: 90px;
        position: absolute;
        margin-top: -71px;
       }


       .descricao{
           font-size: 12px;
       }
   }

   .row{
        margin-bottom: 20px;
   }

   
   @media only screen and (max-width: 700px) {
        .div-img-title{
            margin-left: -6px;
            
            img{
                width: 92px;
            }
        }

        .header{
            img{
                width: 87px;
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
            font-size: 30px;
        }

        .container{
            margin-left: -30px;

        }

    }
`;

export default DigiFinalComponentStyled;

