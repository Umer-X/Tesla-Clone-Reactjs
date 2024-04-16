import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { selectCars } from './features/cars/carSlice'
import {useSelector} from 'react-redux'
function Header() {
   
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" />
      </a>

      <Menu>
        <Fade left>
            {cars && cars.map((cars,index)=>(
                <a key={index} href="#"> {cars} </a>
            ))}
        </Fade>
        
      </Menu>
      <RightMenu>
        <a href="#"><AccountCircleIcon/></a>
        <a href="#"> <ShoppingCartOutlinedIcon/> </a>
        <CustomMenu onClick={() => setBurgerStatus(true)}/>
      </RightMenu>
      <BurgerNav show = {burgerStatus}>
        <CloseWrap>
        <CustomClose onClick={() => setBurgerStatus(false)}/>
        </CloseWrap>
        {cars && cars.map((cars,index)=>(
               <li key={index}> <a key={index} href="#"> {cars} </a></li>
            ))}
        <li> <a href="#"> Existing Inventory</a></li>
        <li> <a href="#"> Used Inventory </a></li>
        <li> <a href="#"> Trade-In </a></li>

      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  justify-content: space-between;
  z-index: 1;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
  
  `;

const RightMenu = styled.div`
 display: flex;
 align-items: center;
 
 a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 14px;
    
  }

`;

const CustomMenu = styled(MenuIcon)`
cursor: pointer;
`

const BurgerNav = styled.div`
 position: fixed;
 top: 0;
 right: 0;
 bottom: 0;
 background: white;
 width:300px;
 z-index: 16;
 list-style: none;
 padding: 20px;
 display: flex;
 flex-direction: column;
 text-align: start;
 transform: ${props => props.show? 'translateX(0)': 'translateX(100%)'};
 transition: transform 0.2s;

 li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2);
 }
 a{
    font-weight: 600;
 }
`;

const CustomClose = styled(CloseOutlinedIcon)`
 cursor: pointer;
`

const CloseWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`