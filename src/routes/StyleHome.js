import {styled} from "styled-components";


export const StyleHome = styled.div`
    .Home{
        display: flex;
        flex-direction: column;
        gap: 150px;
        margin: 100px auto;
        
    }
    .leftDiv {
        max-width: 70%;
        margin: 0 auto;
        text-align: center;
        font-size: xx-large;
        -webkit-font-smoothing: antialiased !important;
        display: flex;
        flex-direction: column;
        //gap: 30px;
    }
    .rightDiv {
        display: flex;
        flex-direction: column;
    }
    .Icons-Stack{
        
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        list-style: none;
        margin: 0 auto;
        width: 300px;
        height: 400px;
       
    }
    .Icons-Stack img{
        width: 80%;
        height: 80%;
        cursor: default;
        transition: 0.4s;
    }
    .Icons-Stack img:hover{
        transform: translateY(-4px);
    }
    @media(max-width : 890px) {
        .Home{
            display: flex;
            flex-direction:column ;
            justify-content: center;
            margin: 100px auto;
        }
        .leftDiv{
            display: flex;
            flex-direction: column;
            text-align: center;
            font-size: x-large;
        }
        .rightDiv{
           display: flex;
           flex-direction: column;
        }
        .Icons-Stack{      
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            list-style: none;
            margin: 0 auto;
            max-width: 250px;
            max-height: 350px;
        }
        .Icons-Stack img{
            width: 80%;
            height: 80%;
            cursor: default;
            transition: 0.4s;
        }

    }
`;