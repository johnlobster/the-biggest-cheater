import React from 'react';

import { MDBBtn } from "mdbreact";

import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CGrid from '../../components/CGrid/CGrid'
import CTable from '../../components/CTable/CTable';
import Accordion from '../../components/Accordion/Accordion'
import AccordionButton from '../../components/AccordionButton/AccordionButton'

import CodeBox from '../../components/CodeBox/CodeBox';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const animationDataTable: string[][] = [
  ["animation-name", "name created with @keyframes"],
  ["animation-duration", "time to complete 1 cycle of @keyframes. Default 0, so must always be set"],
  ["animation-timing-function", "default ease: slow start, then fast, before it ends slowly. 'linear' useful"],
  ["animation-delay", "default 0"],
  ["animation-iteration-count", "default 1. 'infinity' useful"],
  ["animation-direction", "default normal (plays forward)"],
  ["animation-fill-mode", "default none. Animation will not apply any styles to the element before or after it is executing"],
  ["animation-play-state", "default 'running', set to 'paused' to pause"]
];

const Css: React.FunctionComponent = (props) => {
  return(
    <div>
      <SheetContainer>
        <h1>CSS</h1>
        <h4>Units</h4>
        <div>
          <h5>Absolute</h5>
          <CGrid row>
            <CGrid xs={1} md={2}>
              <code>px</code>
            </CGrid>
            <CGrid xs={6} md={4}>
              pixels
            </CGrid>
          </CGrid>
          <h5>Relative</h5>
          <div>
            <CGrid row>
              <CGrid xs={1} md={2}>
                <code>em</code>
              </CGrid>
              <CGrid xs={6} md={8}>
                Relative to the font-size of the element
              </CGrid >
            </CGrid>
            <CGrid row>
              <CGrid xs={1} md={2}>
                <code>rem</code>
              </CGrid>
              <CGrid xs={6} md={8}>
                Relative to font-size of the root element
              </CGrid>
            </CGrid>
            <CGrid row>
              <CGrid xs={1} md={2}>
                <code>vh</code>
              </CGrid>
              <CGrid xs={11} md={10}>
                Relative to 1% of the height of the viewport
              </CGrid>
            </CGrid>
            <CGrid row>
              <CGrid xs={1} md={2}>
                <code>vw</code>
              </CGrid>
              <CGrid xs={11} md={10}>
                Relative to 1% of the width of the viewport
              </CGrid>
            </CGrid>
            <CGrid row>
              <CGrid xs={1} md={2}>
                <code>%</code>
              </CGrid>
              <CGrid xs={6} md={8}>
                Relative to the parent element
              </CGrid>
            </CGrid>
          </div>
          
        </div>
        <h4>Selectors</h4>
        <div>
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
              <AccordionButton>More Selectors</AccordionButton>
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
            <CGrid row>
              <CGrid xs={6} md={4}>
              <code></code>
              </CGrid>
            </CGrid>
            <a href="https://www.w3schools.com/cssref/css_selectors.asp">
              Reference table from w3chools
            </a>
            <br />
            <a href="https://developer.mozilla.org/en-US/docs/Glossary/CSS_Selector">
              MDN reference
            </a>
          </Accordion>
        </div>
        <h4>Custom properties</h4>
        <div>
          <CGrid row>
            <CGrid xs={1} md={2}>
              Declare
            </CGrid>
            <CGrid xs={11} md={10}>
              <CodeBox codeString={`--main-bg-color: coral;`} />
            </CGrid>
          </CGrid>
          <CGrid row>
            <CGrid xs={1} md={2}>
              Use
            </CGrid>
            <CGrid xs={11} md={10}>
              <CodeBox codeString={`background-color: var(--main-bg-color);`} />
            </CGrid>
          </CGrid>
        </div>
        <h4>Animation</h4>
        <div>
          <h5>Example</h5>
          <CodeBox codeString={`
myElement {
  position: relative;
  animation: mymove 5s infinite;
}
@keyframes mymove {
  from {top: 0px;}
  to {top: 200px;}
}
          `}>
          </CodeBox>
          <h5>css animation property shorthand</h5>
          <CTable  tableDef={[[4,"code"],[8]]} tableData={animationDataTable}></CTable>
        </div>
        <h4>Flexbox</h4>
        <p>See <a href='https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background'>CSS Tricks guide to flexbox</a></p>
        <h4>Grid</h4>
        <p>See <a href='https://css-tricks.com/snippets/css/complete-guide-grid/'>CSS Tricks guide to grid</a></p>
      </SheetContainer>
    </div>
  );
}

export default Css;