import styled from "styled-components";
export const StyleAbout = styled.div`
    h1,h2{
        text-align: center;
        cursor: default;
    }
    h1:hover{
            color: white;
        }
    
    .Container{
        display:grid;
        grid-template-columns: 1fr 1fr;
        
        margin: 20px auto;
        height: content;
        text-align: center;
        align-items: center;
    }
    .Left img{
       width: 300px;
       border-radius: 20px;
       margin: 5% auto;
    }
    .Right{
        max-width: 100%;
        margin: 20px auto;
    }
    @media(max-width: 900px){
        .Container{
            display: flex;
            flex-direction: column;
            grid-gap: 50px;
        }
    }
`;