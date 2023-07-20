import styled from "styled-components";
export const StylusNavBar = styled.div`
   //all
    .NavBar {
        display: grid;
        grid-template-columns: 2fr 1fr 2fr;
        margin: 15px 75px;
      }
    ::-webkit-scrollbar{
        display: none;
    }
    //part One
    .Box-Menu{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;  
        
        align-items: center;
        justify-items: center;
        list-style-type: none;
    }
    .Box-Menu .link{
        color: #c0c0c0;
        text-decoration: none;
        cursor: pointer;
        font-size: 25px;
        font-weight: 500;
    }
    .Box-Menu .link:hover{
        color: #c0c0c0;
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
      column-gap: 20%;
    }
    .RightSide img {
        cursor: pointer;
        height: 25px;
        width: 25px;
    }
    .BoxSocial, .BoxCheats{
      list-style-type: none;
      display: flex;
      gap: 20px;
    }


    @media (max-width: 1140px){
    .NavBar {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: auto auto;
      justify-content: center;
      
    }
    .Box-Menu {
      margin: 20px;
      width: auto;
      grid-template-columns: 1fr 1fr;
      gap: 10px;
    }
    .Logo{
      margin: auto;
    }
    .RightSide{
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: auto auto;
      }
    .BoxSocial {
      width: 100%;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      row-gap: 10px;
      justify-items: center;
    }
    .BoxCheats{
      display: flex;
      flex-direction: row-reverse;
      
    }
    
  }
  
  @media (max-width: 700px){
    .NavBar{
      display:flex;
      justify-content: space-between;
      align-items: center;
      margin: 20px 10px;
    }
    .Box-Menu{
      display: flex;
      margin: 0;
      padding: 0;
      width: fit-content;
    }
    .Logo{
      margin: 0;
    }
    .BoxSocial, .Home, .Contact{
      display: none;
    }
  }
`;