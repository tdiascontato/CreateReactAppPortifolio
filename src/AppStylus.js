import {createGlobalStyle} from "styled-components";

const AppStylus = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;        
    }
    #light{
        background-color: #498d94;
        transition: 1s ease;
        
    }
    #dark{
        background-color: #1E3A3D;
        color: white;
        transition: 1s ease;
    }
    .App{
        display: flex;
        flex-direction: column;
        width: 100%;
        font-family: 'VT323', monospace;
    }
    ::-webkit-scrollbar{
        display: none;
    }
    .Content{
        min-width: 100% ;
        min-height: 100vh;
    }
    .Footer{
        min-width: 100%;
        background: black;
    }
`;
export default AppStylus;