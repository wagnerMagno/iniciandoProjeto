import styled from 'styled-components'


const MenuComponentStyled = styled.div`
    height: 100%;
    background-color: rgba(120,165,157);
    width: 100%;
    float: left;
    color: white;
    font-weight: 600;
    font-size: 17px;
    padding: 10px;
    position: absolute;
    z-index: 2;

    h2{
        text-align : center;
    }

    .link{
        text-decoration: none;
        color: white;
        display: inline;
        padding: 8px;
        font-size: 20px;
    }

    .link:hover{
        background-color: #a9c5bd;
        margin-left: -9px;
        margin-right: -9px;
        padding: 10px;
        border-radius: 13px;
    }

    @media only screen and (max-width: 700px) {
        .link {
          text-align: center;
        }
    }
`;

export default MenuComponentStyled;

