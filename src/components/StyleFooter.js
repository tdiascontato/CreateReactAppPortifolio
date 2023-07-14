
import {styled} from "styled-components";

export const StyleFooter = styled.div`
  .rodape{
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  }
  .BoxSocialFooter{
    display: flex;
    gap: 20px;
    margin: 10px auto;
  }
  .BoxSocialFooter li{
    list-style: none;
  }
  .BoxSocialFooter img{
    width: 40px;
  }
.CopyAndTap{
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 10px;
  gap: 10px;
}
.CopyAndTap label{
  font-weight: 500;
  color: #c0c0c0;
}
.CopyAndTap button{
  
  background-color: white;
  width: 200px;
  height: 50px;
  border-radius: 20px;
  border: none;
  font-size: 20px;
  font-weight: 400;
  font-family: 'VT323', monospace;
}
`;