import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        tittle="Model S"
        Description="Order online for TouchLess Delivery"
        backgroundImg="model-s.avif"
        leftbtnText="Custom Order"
        rightbtnText="Demo Drive"
      />
      <Section
        backgroundImg="cyber-truck.avif"
        leftbtnText="Custom Order"
        rightbtnText="Demo Drive"
      />
      <Section
        tittle="Model X"
        Description="Order online for TouchLess Delivery"
        backgroundImg="model-x.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Demo Drive"
      />
      <Section
        tittle="Model Y"
        Description="Order online for TouchLess Delivery"
        backgroundImg="model-y.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Demo Drive"
      />
      <Section
        tittle="Model 3"
        Description="Order online for TouchLess Delivery"
        backgroundImg="model-3.jpg"
        leftbtnText="Custom Order"
        rightbtnText="Demo Drive"
      />
      <Section
        tittle="Lowest Cost Solar Panel's in Amercia"
        Description="Money Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftbtnText="Order Now"
        rightbtnText="Learn More"
      />
      <Section
        tittle="Solar for New Roofs"
        Description="Solar Roof cost less than a New Roof"
        backgroundImg="solar-roof.jpg"
        leftbtnText="Order Now"
        rightbtnText="Learn More"
      />
      <Section
        tittle="Tesla Accessories"
        Description=""
        backgroundImg="accessories.avif"
        leftbtnText="Shop Now"
        
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
