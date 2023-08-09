import React from 'react';

import { MDBBtn } from "mdbreact";

import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'
import AccordionButton from '../../components/AccordionButton/AccordionButton'

import styles from './TSandJS.module.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }


const boxMe: (list: [string, string]) => React.ReactElement = (list) => {
  return (
    <CGrid row>
      <CGrid xs={12} sm={3} md={3} lg={2}>
        {list[0]}
      </CGrid>
      <CGrid xs={12} sm={9} md={8} lg={6}>
        <pre className={styles.codeBlock2}>
          <div >
            {list[1]}
          </div>
        </pre>
      </CGrid>
    </CGrid>
  )
}
const TSandJS: React.FunctionComponent = (props) => {
  return(
    <div>
      <SheetContainer>
        <h1>Typescript and Javascript</h1>

        <h4>Array methods</h4>
        {boxMe( [".foreach()", `myArray.foreach( (item, index, array) => {
  
})
`
        ])}
        {boxMe([".map()", `myArray.map(item, index, array) => {
  return( newArrayElement)
})
`
        ])}
        {boxMe([".reduce()", `myArray.reduce(item, index, array) => {
  return( newArrayElement)
})
`
])}
        
        <Accordion 
          clickable={
            <AccordionButton>More methods</AccordionButton>
          }
        >
          {boxMe([".every()", "code"])}
          {boxMe([".indexOf()", "code"])}
          {boxMe([".find()", "code"])}
          {boxMe([".findIndex()", "code"])}

        </Accordion>
      
        <h4>Immediately-invoked Function Expressions (IIFE)</h4>
        <pre className={styles.codeBlock2}>
          <div >
            {
`(() => {
  /* */
})()
`}
          </div>
        </pre>

        <h4>Truthy and Falsy</h4>

        <p>The following values are always falsy:</p>
        <ul>
          <li>false</li>
          <li>0 (zero)</li>
          <li>'' or "" (empty string)</li>
          <li>null</li>
          <li>undefined</li>
          <li>NaN</li>
        </ul>

        <p>Everything else is truthy. That includes:</p>
        <ul>
          <li>'0' (a string containing a single zero)</li>
          <li>'false' (a string containing the text “false”)</li>
          <li>[] (an empty array)</li>
          <li>{} (an empty object)</li>
          <li>function(){} (an “empty” function)</li>
        </ul>
          
        <a href="https://www.sitepoint.com/javascript-truthy-falsy/">
          Craig Butler article on sitepoint
        </a>
        </SheetContainer>
      
    </div>
  );
}

export default TSandJS;