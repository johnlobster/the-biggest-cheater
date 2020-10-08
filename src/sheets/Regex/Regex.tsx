import React from 'react';

import { MDBBtn } from "mdbreact";

import Container from '../../components/Container/Container'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Regex: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>Regular expressions (Regex/Regexp)</h1>
        <h4>Define in Javascript</h4>
        <code>myRegex = new RegExp("string pattern")</code>
        <code>myRegex = /"string pattern"/</code>
        <br />
        <h4>String methods</h4>
        <CGrid row>
          <CGrid xs={4}>
            myString.match(myRegex)
          </CGrid>
          <CGrid xs={4}>
            returns null or array
          </CGrid>
          <CGrid xs={4}>
            <p>With g flag: </p>
            <p>Without g flag: [0] is full match [n] is capture group</p>
          </CGrid>
        </CGrid>
        <CGrid row>
          <CGrid xs={4}>
            myString.matchAll(myRegex)
          </CGrid>
          <CGrid xs={4}>
            returns iterator
          </CGrid>
          <CGrid xs={4}>
            Return object
            [0] - match
            [n] - capture group
            .index - location of start of match
            .input - input string
          </CGrid>
          <CGrid xs={12}>
            <code>
              const outputArray = [...myString.matchAll(myRegexp)];
            </code>
          </CGrid>
          <CGrid xs={12}>
            <code>
              (Have to correct this code ...)
              {`for (const match of matches) {
                console.log(Found $ {match[0]} start=$ {match.index} end=$ {match.index + match[0].length}.);
              }`}
            </code>
          </CGrid>
          
        </CGrid>
        <a href="https://javascript.info/regexp-methods">
          More on methods
        </a>
        <br />


        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">
          Regular expressions at MDN
        </a>
      </Container>
    </div>
  );
}

export default Regex;