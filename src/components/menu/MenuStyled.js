import styled from 'styled-components'


const MenuComponentStyled = styled.div`
    height: 98%;
    background-color: rgba(120,165,157,0.9);
    width: 20%;
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

    a{
        text-decoration: none;
        color: white;
        display: block;
        padding: 8px;
        font-size: 20px;
    }

    a:hover{
        background-color: #a9c5bd;
        margin-left: -9px;
        margin-right: -9px;
        padding: 10px;
        border-radius: 13px;
    }
`;

export default MenuComponentStyled;

