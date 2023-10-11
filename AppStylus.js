import {createGlobalStyle} from "styled-components";

const AppStylus = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }
    #light{
        background-color: #C0D0D0;
        color:  #13444d;
        transition: 1s ease;
    }
    #light #Description{     
        color: #fff;    
        transition: 1s ease;
        text-decoration: none;
        list-style: none;
    }
    #light #DescriptionMenu{
        color: #4a2424;
        background: #3e5353;
        transition: 1s ease;
        @media(min-width: 600px){
            background: none;
        }
    }
    #light #DescriptionFooter{
        background-color: #3e5353;
        transition: 1s ease;
    }
    #DescriptionMenu{
        color: white;
    }
    #dark{
        background-color: #142e2b;
        color: #b6d0a0;
        transition: 1s ease;
    }
    #dark #Description{
        color: #ffdc73; //eabf3e; //ffe561;
        transition: 1s ease;
        text-decoration: none;
        list-style: none;
    }
    #dark #DescriptionMenu{
        color: #49432b  ;//# //# //# // // // //
        background: #0c1b19;
        transition: 1s ease;
        @media(min-width: 600px){
            background: none;
        }
    }
    #dark #DescriptionFooter{
        background-color: #0c1b19 ;
        color: black;
        transition: 1s ease;
    }
    .App{
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: 'Roboto', sans-serif;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    .NavBarApp{

    }
    .Content{
        min-width: 100% ;
        min-height: 100vh;
    }
    .Footer{
        min-width: 100%; 
    }
`;
export default AppStylus;