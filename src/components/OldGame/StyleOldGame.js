import { styled } from "styled-components";

export const StyleOldGame = styled.div`
  button {
    background: none;
    border: 2px solid #fff;
    padding: 6px 12px;
    border-radius: 4px;
    color: #000;
    font-weight: bold;
    cursor: pointer;
    font-size: 1em;
}
  button:hover {
    background: #c23866;
    color: #fff;
}
  .Game {
  position: relative;
  width: 300px;
  height: 300px;
}

.Game__menu {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  background: #c23866;
  color: white;
  font-size: x-large;
  border-radius: 10px;
  padding: 15px;
}

.Game__board {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
}

.Game__board button {
  border: 1px solid #ddd;
  font-size: 4rem;
  line-height: 0;
  
}
`;