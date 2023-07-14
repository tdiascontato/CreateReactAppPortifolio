import {styled} from "styled-components";


export const StyleHome = styled.div`
    .Home{
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
        justify-content: center;
        align-items: center;
        grid-gap: 100px;
        margin: 0 100px;
    }
    .leftDiv {
        text-align: center;
    }
    .leftDiv h3{
        color: #c0c0c0;
    }
    .rightDiv {
        display: flex;
        flex-direction: column;
        justify-self: center;
        justify-content: center;
    }
    .imgHome{
        width: 70%;
        height: 70%;
        padding: 0;
        margin: 0 auto;
    }
    .Icons-Stack{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        list-style: none;
        margin: 15px auto;
        column-gap: 25px;
        place-items:center ;
    }
    .Icons-Stack img{
        width: 50px;
        height: 50px;
        cursor: pointer;
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
            margin: 20px 160px;
        }
        .leftDiv{
            display: flex;
            flex-direction: column;
            text-align: center;
        }
        .rightDiv{
           display: flex;
           flex-direction: column;
        }
        .imgHome{
            width: 50%;
            height: 50%;
            padding: 0;
        }
        .Icons-Stack img{
            width: 50px;
            height: 50px;
        }

    }
`;