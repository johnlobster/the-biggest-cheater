import React from 'react';

// called ReactSheet because name 'React' is already in use ...

import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CodeClick from '../../components/CodeClick/CodeClick'
import CodeBox from '../../components/CodeBox/CodeBox';
import Accordion from '../../components/Accordion/Accordion'
import AccordionButton from '../../components/AccordionButton/AccordionButton'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const reactHooks =
`import React from 'react';
const MyComp: React.FunctionComponent = (props) => {

  // State
  const [myVar, updateMyVar] = React.useState(false);
  // Effect
  useEffect((if there is a variable, then hook runs when variable changes) => {
    // code
    return( // if a function is returned, it runs after component unmounts
      function cleanup() {
      // code
      };
    )  
  });

  return(
    <React.Fragment>
    </React.Fragment>
  );

}
`
const reactHooksMore =
`import React from 'react';

interface MoreProps {
  title?: string;                   // optional property
}
const MyComp: React.FunctionComponent<MoreProps> = (props) => {

  // State
  const [myVar, updateMyVar] = React.useState(false);
  // Effect

  
  useEffect((if there is a variable, then hook runs when variable changes) => {
  // code
  return ( // if a function is returned, it runs after component unmounts
    function cleanup() {
      // code
    };
    )
});

return (
  <React.Fragment>
  </React.Fragment>
);

}

export default MyComp;
`

const reactRouter =
`
`
const ReactSheet: React.FunctionComponent = (props) => {
  return(
    <React.Fragment>
      <SheetContainer >
        <h1>React</h1>
        
        <h4>Generic boilerplate for hooks based React</h4>
        <CodeClick codeString={reactHooks}/>
        <Accordion
          clickable={
            <AccordionButton>
              Example with additional properties
            </AccordionButton>
          }
        >
          <CodeClick codeString={reactHooksMore} />
        </Accordion>

        <Accordion clickable={<AccordionButton>Class based react (classical)</AccordionButton>} >
          <h4>Generic boilerplate for classical React</h4>
        </Accordion>
        

        <h4>React router boilerplate</h4>
        <CodeClick codeString={reactRouter} />
        

        
      <h4>Use of conditionals and ternary operators</h4>
      <CodeBox codeString={`
return (
  { ( boolean expression) && 
    ( code if true)
  }
  { variable ? (
    code if true
    ) | (
    code if false
    )
  )}
)
`} />

      </SheetContainer>
    </React.Fragment>
  );
}

export default ReactSheet;