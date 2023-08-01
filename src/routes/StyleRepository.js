import {styled} from "styled-components";

export const StyleRepository = styled.div`
    h1{
        text-align: center;
        color: black;
        font-size: xx-large;
        font-weight: 500;
        cursor: default;
        &:hover{
            color: white;
        }
    }
    hr{
        width: 70%;
        margin: 0 auto;
    }
    h2{
        text-align: center;
        font-size: x-large;
        cursor: pointer;
        color: black;
    &:hover{
        color:beige;
    }
    }
    .Default{
        cursor: default;
    }
    .PomodoroSpace, .GithubSpace, .Card{
        margin-top: 10%;
    }
    .Container{
        margin-top: 100px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        text-align: center;
        justify-content: center;
    }
    img{
        display: flex;
        margin: 2% auto;
        
    }
    .PomodoroImg{
        width: 200px;
    }
    .GithubImg{
        width: 275px;
    }
    .Card{
       display: flex;
       flex-direction: column;
       row-gap: 20px;
       max-width: 100%;
       min-height: 30vh;
    }
    .Title{
        cursor: default;
        color: #c0c0c0;
        &:hover{
            color: white;
        }
}
    .pokemon{
        max-width: 50%;
        max-height: 50%;
        margin: 0 auto;
}

    .Description{
        text-align: center;
        margin-bottom: 50px;

}
    .SpaceTap{
        display: flex;
        align-self: center;
        width: 95%;
        height: 450px;
        border-radius: 20px;
        background-color: #d4d473 ;//#975c5c; // #024442; //#024442;//#244420;
        
}
    .Circle{
        display: block;
        //valores abaixo default para modificar em js
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;       
        background-color: black;
}
    button{
        cursor: pointer;
        background: none;
        width: 200px;
        height: 50px;
        margin: 10px auto;
        border-radius: 20px;
        border: white 3px solid;
        font-size: 20px;
        font-weight: 400;
        font-family: 'VT323', monospace;
        transition: 1s ease;
    &:hover{
        background-color: #c0c0c0;
        font-size: 23px;
        font-weight: 450;
        transition: 1s ease;
    }
}
    @media(max-width: 1000px){
        .Container{//trocar para 'Games'
            display: flex;
            flex-direction: column;
            justify-items: center;
            row-gap: 100px;
        }
}
`;