import React from 'react';

import { MDBBtn } from "mdbreact";

import Container from '../../components/Container/Container'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Css: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>CSS</h1>
        <h4>Selectors</h4>
        <CGrid row>
          <CGrid xs={6} md={4}>
            <code>el1 {">"} el2</code>
          </CGrid>
          <CGrid xs={6} md={4}>
            <em>el2</em> elements where the parent is an <em>el1</em> element
          </CGrid>
        </CGrid>
        <CGrid row>
          <CGrid xs={6} md={4}>
            <code>el1 el2:nth-child(n)</code>
          </CGrid>
          <CGrid xs={6} md={4}>
            <em>el2</em> element that is the <em>n</em>th child of its parent (<em>el1</em>)
          </CGrid>
        </CGrid>
        
        <Accordion
          clickable={
            <MDBBtn outline color="primary">
              More Selectors
            </MDBBtn>
          }
        >
          <CGrid row>
            <CGrid xs={6} md={4}>
              <code>el1 el2:first-child</code>
            </CGrid>
            <CGrid xs={6} md={4}>
              <em>el2</em> element that is the first child of its parent (<em>el1</em>)
          </CGrid>
          </CGrid>
        </Accordion>
        <a href="https://www.w3schools.com/cssref/css_selectors.asp">
          Reference table from w3chools
        </a>
        <br />
        <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector">
          MDN reference
        </a>
      </Container>
      
    </div>
  );
}

export default Css;