import React from 'react';

import CGrid from '../../components/CGrid/CGrid'
import Container from '../../components/Container/Container'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Markdown: React.FunctionComponent = (props) => {
  return(
    <React.Fragment>
      <Container fixed100>
        <h1>Markdown</h1>

        <CGrid row>
          <CGrid item xs={6}>
            Block quote
          </CGrid>
          <CGrid item xs={6}>
            <code>{">"} my cool quoted text</code>
          </CGrid>
        </CGrid>
        
        <CGrid row>
          <CGrid item xs={6}>
            horizontal rule
          </CGrid>
          <CGrid item xs={6}>
              <code>
                ----------------

                ****************

                ________________
              </code>
          </CGrid>
        </CGrid>
        
        <CGrid row>
          <CGrid item xs={6}>
            Links
          </CGrid>
          <CGrid item xs={6}>
            <code>
              [Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")
              
            </code>
          </CGrid>
        </CGrid>

        <CGrid row>
          <CGrid item xs={6}>
            Image
          </CGrid>
          <CGrid item xs={6}>
            <code>
              ![Alt text](/path/to/image.jpg "Title")
            </code>
          </CGrid>
        </CGrid>
        

          <a href="https://www.markdownguide.org/basic-syntax">
            Markdown guide - Basic syntax
          </a>

      </Container>
      
    </React.Fragment>
  );
}

export default Markdown;