
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
  justify-content: center;
  text-align: center;
  margin-bottom: 10px;
  gap: 10px;
}
.CopyAndTap button{
  margin: 0 auto;
  cursor: pointer;
  background-color: white;
  width: fit-content;
  height: 50px;
  border-radius: 15px;
  border: none;
  font-size: large;
  font-weight: bolder;
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
}
#TapMessage{
  font-size: 1.25rem;
  font-weight: bolder;

}
`;