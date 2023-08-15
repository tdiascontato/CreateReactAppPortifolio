import {styled} from "styled-components";

export const StyleRepository = styled.div`
    h1{
        text-align: center;
        font-size: xx-large;
        cursor: default;
    }
    hr{
        width: 70%;
        margin: 0 auto;
    }
    h2{
        text-align: center;
        font-size: x-large;
        cursor: pointer;
    }
    .Default{
        cursor: default;
    }
    img{
        display: flex;
        margin: 2% auto;   
    }
    
    .PomodoroSpace, .GithubSpace, .Pokedex, .Card{
        margin-top: 10%;
    }
    .PomodoroSpace, .GithubSpace, .Pokedex{
        min-width: fit-content;
        border-radius: 20px;
        padding: 15px;
        margin: 15px;
        background: #bdafae;
    }
    .Container{
        display: flex;
        flex-direction: column;
        justify-items: center;
        align-items: center;
        row-gap: 100px;
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
    .ContainerPokedex{
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        justify-content: center;
    }
    .pokemon{
        max-width: 25%;
        max-height: 25%;
        margin: 0 auto;
    }
    .Description{
        text-align: center;
        margin-bottom: 50px;

    }
    .SpaceTap{
        display: flex;
        align-self: center;
        width: 90vw;
        height: 80vh;
        border-radius: 20px;
        background-color: #d4d473 ;

        @media(max-width: 500px){
            display: flex;
            flex-direction: column;
        }
        
}
    .Circle{
        display: block;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        position: absolute;       
        background-color: black;
}
    button{
        cursor: pointer;
        display: flex;
        margin: 20px auto;
        padding: 15px;
        background: #88d3ab;
        height: fit-content;
        max-width: fit-content;
        font-size: x-large;
        border: none;
        border-radius: 20px;
}
`;