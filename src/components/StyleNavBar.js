import styled from "styled-components";
export const StylusNavBar = styled.div`
   //all
    .NavBar {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 15px 75px;  
      }
    ::-webkit-scrollbar{
        display: none;
    } 
    //part One
    .Box-Menu{
        display: flex;
        gap: 15px;
        list-style-type: none;
    }
    .Box-Menu .link{
        text-decoration: none;
        cursor: pointer;
        font-size: xx-large;
        -webkit-font-smoothing: antialiased !important;
    }
    //logo
    .Logo{
      display: flex;
        width: 40px;
        height: 40px;
        margin: 0 auto;
        cursor: pointer;
    }
    //part two
    .RightSide{
      display: flex;
      align-items: center;
      justify-content: right;
    
    }
    .RightSide img {
        cursor: pointer;
        height: 25px;
        width: 25px;
    }
    .BoxCheats{
      list-style-type: none;
      display: flex;
      gap: 20px;
    }
  
  @media (max-width: 600px){
    .NavBar{
      margin: 15px 25px;
    }
    .Box-Menu{
      align-items: center;
    }
    .Box-Menu .link{
        text-align: center;
        font-size: x-large;
        -webkit-font-smoothing: antialiased !important;
    }
  }
`;