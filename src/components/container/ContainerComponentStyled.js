import styled from 'styled-components'


const ContainerComponentStyled = styled.div`
    /* width: 50%; */
    /* height: 400px; */
    /* margin: 100px auto; */
    /* border: 5px solid gold; */
    /* border-radius: 5px; */
    /* overflow: hidden; */
    
    top: 0;
    position: absolute;
    height: 100%;
    border-radius: 5px;
    overflow: hidden;

    
    .background-transparent{
        background-color: transparent;
        margin-top : 1px sold white;
    }

    .home {

        color: #000000;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 48px;
        text-decoration: none;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        box-sizing: border-box;
    }
  
    .link {
        color: #000000;
        background: #ffffff;
        border-radius: 3px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 100%;
        font-size: 48px;
        text-decoration: none;
        font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
        box-sizing: border-box;
    }
    .link.white {
        background: white;
    }
    
    .animatable div {
    }
    
    .animatable{
        height: 100%;
        overflow: auto;
    
    }
    
    .animate-option {
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .animate-option input {
        width: 24px;
        height: 24px;
        margin-right: 8px;
    }
    
    .init{
        background: rgba(38, 38, 38, 0);
    
    }
  

`;

export default ContainerComponentStyled;

