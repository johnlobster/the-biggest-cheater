import React from 'react';


import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CodeClick from '../../components/CodeClick/CodeClick'

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
  useEffect((props) => { // if there is a variable, then hook runs when variable changes
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
        <h4>Generic boilerplate for classical React</h4>

        <h4>React router boilerplate</h4>
        <CodeClick codeString={reactRouter} />
        
        <h4> <a href="https://yarnpkg.com/">Link to Yarn documentation</a></h4>
      </SheetContainer>
    
    </React.Fragment>
  );
}

export default ReactSheet;