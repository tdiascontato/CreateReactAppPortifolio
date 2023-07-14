import styled from "styled-components";
export const StyleAbout = styled.div`
    h1, h2, p{
        text-align: center;
    }
    
    .Container{
        display:grid;
        grid-template-columns: 1fr 1fr;
        
        margin: 20px auto;
        height: content;
        text-align: center;
        align-items: center;
        color: #c0c0c0;
    }
    .Left img{
       width: 150px;
       margin: 0 auto;
    }
    .Right{
        max-width: 100%;
        margin: 20px auto;
    }
    @media(max-width: 800px){
        .Container{
            display: flex;
            flex-direction: column;
            grid-gap: 50px;
        }
    }
`;