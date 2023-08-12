import React from 'react';

// import { MDBBtn } from "mdbreact";

// import CodeClick from '../../components/CodeClick/CodeClick'
// import CGrid from '../../components/CGrid/CGrid'
// import CTable from '../../components/CTable/CTable'
import SheetContainer from '../../components/SheetContainer/SheetContainer'
// import Accordion from '../../components/Accordion/Accordion';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }


const Layout: React.FunctionComponent = () => {
  return(
    <React.Fragment>
      <SheetContainer>
        <h1>Layout concepts</h1>
        <h4><code>div</code> Options</h4>
        <h4>Absolute positioning</h4>
        <h4>Relative positioning</h4>
        <h4>Flexbox</h4>
        <h4>Grid</h4>
      </SheetContainer>
      
    </React.Fragment>
  );
}

export default Layout;

