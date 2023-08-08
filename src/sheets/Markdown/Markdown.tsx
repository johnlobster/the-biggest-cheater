import React from 'react';

import { Remarkable } from 'remarkable';
import CGrid from '../../components/CGrid/CGrid'
import Container from '../../components/Container/Container'

import styles from './Markdown.module.scss'

// This sheet uses "Remarkable" javascript package to convert markup text to html, so that text only needs to be input once

const header =
`##### Headers (note space after #)
# Header 1 
## Header 2
### Header 3
#### Header 4
##### Header 5
`
const paragraph =
`Blank line for paragraph

Line break - two spaces  
at the end  
of the line.
`
const link =
`##### Link  
[Duck Duck Go](https://duckduckgo.com "The best search engine for privacy")
`

const emphasis = 
`##### Bold and Italic
**bold**  
*italic*  
__bold__  
_italic_
`
const lists =
`##### Lists
1. First item (must start with 1)
2. Second item (can be any number)
- First item
- Second item
`

const images = 
`##### Images
![Alt text](/path/to/image.jpg "Title")
`

const codeItems =
`##### Code
use \`backticks\` for single words

use triple backticks for a code block (github)   
\`\`\`ts
const a= "Three backticks";
a := a + "will do the trick";
// The \`\`\`ts supports 
// typescript highlighting
// when using github markdown
\`\`\`
use four spaces or two tab (not github)
`

interface MDBoxProps {
  mdSource: string;
}
const MarkdownBox: React.FunctionComponent<MDBoxProps> = (props) => {
  const md = new Remarkable();
  const markdownHtml = md.render(props.mdSource);
  return(
    <CGrid row>
      <CGrid xs={6} md={4}>
        <div
          dangerouslySetInnerHTML={{ __html: markdownHtml }}
        />
      </CGrid>
      <CGrid xs={6} md={8}>
        <pre className={styles.codeStyling}>
          {props.mdSource}
        </pre>
      </CGrid>
    </CGrid>
  )
}
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Markdown: React.FunctionComponent = (props) => {

  return(
    <React.Fragment>
      <Container fixed100>
        <h1>Markdown</h1>

        <MarkdownBox mdSource={header}/>
        <MarkdownBox mdSource={paragraph}/>
        <MarkdownBox mdSource={link} />
        <MarkdownBox mdSource={emphasis} />
        <MarkdownBox mdSource={lists} />
        <MarkdownBox mdSource={images} />
        <MarkdownBox mdSource={codeItems} />

        <div >
          <a
            className={styles.linkStyling}
            href="https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax">
            Github markdown
          </a><br />
          <a
            className={styles.linkStyling}
            href="https://www.markdownguide.org/basic-syntax">
            Markdown guide - Basic syntax
          </a>
        </div>
        
        

      </Container>
      
    </React.Fragment>
  );
}

export default Markdown;