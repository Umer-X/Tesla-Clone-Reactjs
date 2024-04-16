import React from "react";
import styled from "styled-components";
import Fade from 'react-reveal/Fade'

function Section({tittle, Description, backgroundImg, leftbtnText, rightbtnText}) {
  return (
    <Wrap bgImage = {backgroundImg}>
        <Fade bottom>
        <ItemText>
        <h1>{tittle}</h1>
        <p>{Description}</p>
      </ItemText>
        </Fade>
      
      <Buttons>
      <Fade bottom>
      <ButtonGroup>
        <LeftButton>{leftbtnText}</LeftButton>
        { rightbtnText && 
        <RightButton>{rightbtnText}</RightButton>
        }
        
      </ButtonGroup>
      </Fade>
      <DownArrow src = '/images/down-arrow.svg' />
      </Buttons>
     
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: 10;
  height: 100vh;
  width: 100vw;
  background-image: url("/images/model-s.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between; //Vertical
  align-items: center; //Horizontal
  background-image: ${props => `url(/images/${props.bgImage})` };
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 769px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
 background: white;
 opacity: 0.65;
 color: black;
`;
const Buttons = styled.div``;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hidden;
`
