import React from 'react';

import { MDBBtn } from "mdbreact";

import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Regex: React.FunctionComponent = (props) => {
  return(
    <div>
      <SheetContainer>
        <h1>Regular expressions (Regex/Regexp)</h1>
        <h4>Define in Javascript</h4>
        <code>{"myRegex = new RegExp(`string pattern with ${stringVariable}`)"}</code>
        <code>myRegex = /"string pattern"/</code>
        <br />
        <p>
          Note, don't use <code>new Regexp</code> unless you need it as all special characters including {"\\"} 
          must be escaped {"\\"}, which makes it hard to debug
        </p>

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
            .groups - 
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
        <Accordion
          clickable={
            <MDBBtn outline color="primary">
              More methods
          </MDBBtn>
          }
        >
          <CGrid row>
            <CGrid xs={4}>
              myString.search(/myRegexp/)
            </CGrid>
            <CGrid xs={4}>
              returns index of start of first match or -1 if no match
            </CGrid>
            <CGrid xs={12}>
              <pre>
                <div>
{`
`}

                </div>
              </pre>
            </CGrid>
          </CGrid>

          <CGrid row>
            <CGrid xs={4}>
              myString.replace(/myRegexp/, newString)
            </CGrid>
            <CGrid xs={4}>
              returns new string, replacing string or Regexp with new String. Use /g in Regexp to replace all
            </CGrid>
            <CGrid xs={12}>
              <pre>
                <div>
                  {`const m2String = m1String.replace(/\n/g,'')
`}

                </div>
              </pre>
            </CGrid>
          </CGrid>
        </Accordion>
        <a href="https://javascript.info/regexp-methods">
          More on methods
        </a>
        <br />


        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions">
          Regular expressions at MDN
        </a>
      </SheetContainer>
    </div>
  );
}

export default Regex;