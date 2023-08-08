import React from 'react';

import { MDBBtn } from "mdbreact";

import CodeClick from '../../components/CodeClick/CodeClick'
import CGrid from '../../components/CGrid/CGrid'
import CTable from '../../components/CTable/CTable'
import Container from '../../components/Container/Container'
import Accordion from '../../components/Accordion/Accordion';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }


const Layout: React.FunctionComponent = (props) => {
  return(
    <React.Fragment>
      <Container fixed100>
        <h1>Git: version control</h1>
        <h4><code>div</code> Options</h4>
        <h4>Absolute positioning</h4>
        <h4>Relative positioning</h4>
        <h4>Flexbox</h4>
        <h4>Grid</h4>
      </Container>
      
    </React.Fragment>
  );
}

export default Layout;

