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
        color: black; 
        transition: 1s ease;
    }
    #light #DescriptionFooter{
        background-color: #ff7f50;
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
        color: white; 
        transition: 1s ease;
    }
    #dark #DescriptionFooter{
        background-color: #6b1904;
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