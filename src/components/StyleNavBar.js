import styled from "styled-components";
export const NavBarContainer = styled.header`
      display: grid;
      grid-template-columns: 1fr 1fr;
      margin: 5% 10%;
      @media (max-width: 600px){
    }
      ::-webkit-scrollbar{
        display: none; 
    }
`;
export const MenuHamburguer = styled.menu`
  display: flex;
  gap: 20px;
  .Logo{
    display: flex;
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
  .Hamburguer{
    display: none; 
  }
  @media(max-width: 600px){
    .Index{
      display: none;
    }
    .Hamburguer{
      display: block;
    }
    .close{
      display: none;
    }
    .open{
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      gap:2rem;
      position: absolute;
      top: 10%;
      left: 5%;
      width: 35%;
      height: 25%;
      border-radius: 20px;
      z-index: 1;
      text-align: center;
      color: white;
  }
  }
`;
export const BoxMenu = styled.ul`
    display: flex;
    gap: 15px;
    list-style-type: none;
    align-items: center;
   .Inicio{
    display: none; 
    @media(max-width: 600px){
      display: flex;
    }
  }
`;
export const Li = styled.li` 
    cursor: pointer;
    .link{
    text-decoration: none;
    font-size: x-large;
    -webkit-font-smoothing: antialiased !important;
    @media(max-width: 600px){
      font-size: 1.4rem;
    }
  }
  `;
export const RightSide = styled.ul`
      .BoxCheats{
        display: flex;
        align-items: center;
        justify-content: right;
        gap: 20px;
      }
      li{
        list-style-type: none;
      }  
      img{
        cursor: pointer;
        height: 40px;
      width: 40px;
    }
`;