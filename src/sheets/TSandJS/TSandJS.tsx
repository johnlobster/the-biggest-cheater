import React from 'react';

import { MDBBtn } from "mdbreact";

import Container from '../../components/Container/Container'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'

import styles from './TSandJS.module.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }


const boxMe: (list: [string, string]) => React.ReactElement = (list) => {
  return (
    <CGrid row>
      <CGrid xs={12} sm={4} md={4} lg={4}>
        {list[0]}
      </CGrid>
      <CGrid xs={12} sm={6} md={6} lg={4}>
        <pre>
          <div className={styles.codeBlock}>
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
      <Container>
        <h1>Typescript and Javascript</h1>

        <h4>Array methods</h4>
        {boxMe( [".foreach()", 
        `myArray.foreach( (item, index, array) => {
          
        })
        `
        ])}
        {boxMe([".map()", 
        `myArray.map(item, index, array) => {
          return( newArrayElement)
        })`])}
        {boxMe([".reduce()", 
          `myArray.reduce(item, index, array) => {
          return( newArrayElement)
        })`])}
        
        <Accordion 
          clickable={
            <MDBBtn outline color="primary">
              More methods
          </MDBBtn>
          }
        >
          {boxMe([".every()", "code"])}
          {boxMe([".indexOf()", "code"])}
          {boxMe([".find()", "code"])}
          {boxMe([".findIndex()", "code"])}

        </Accordion>
      </Container>
      
    </div>
  );
}

export default TSandJS;