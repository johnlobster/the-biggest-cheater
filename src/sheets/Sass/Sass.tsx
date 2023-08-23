import React from 'react';

import SheetContainer from '../../components/SheetContainer/SheetContainer'
import CGrid from '../../components/CGrid/CGrid'
// import CTable from '../../components/CTable/CTable';
// import Accordion from '../../components/Accordion/Accordion'
// import AccordionButton from '../../components/AccordionButton/AccordionButton'

// import CodeBox from '../../components/CodeBox/CodeBox';

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Sass: React.FunctionComponent = (props) => {
  return(
    <div>
      <SheetContainer>
        <h1>Sass/SCSS</h1>
        <h4>Variables</h4>
        <CGrid row>
          <CGrid xs={6} md={8}>
            Define
          </CGrid >
          <CGrid xs={1} md={2}>
            <code>$default-color: rgb(35, 29, 29); </code>
          </CGrid>
        </CGrid>
        <CGrid row>
          <CGrid xs={6} md={8}>
            Use
          </CGrid >
          <CGrid xs={1} md={2}>
            <code>color: $text-color;</code>
          </CGrid>
        </CGrid>


        <a href="https://sass-lang.com/documentation">sass/scss documentation</a>

      </SheetContainer>
      

    </div>
  );
}

export default Sass;