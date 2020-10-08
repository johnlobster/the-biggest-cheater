import React from 'react';

import './Accordion.scss'
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
interface MoreProps {
  open?: boolean;                    // initial value, default false
  clickable: React.ReactElement;
}

const Accordion: React.FunctionComponent<MoreProps> = (props) => {

  const [isOpen, changeIsOpen] = React.useState( props.open || false)

  const toggleOpen: () => void = () => {
    changeIsOpen( ! isOpen)
    console.log("Oooh, someone clicked me")
  }
  return(
    <div>
      <span onClick={toggleOpen} className="md-jww-accordion-clickable">
        {props.clickable}
      </span>
      {isOpen && props.children }
    </div>
  );
}

export default Accordion;