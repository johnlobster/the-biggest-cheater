import React from 'react';


import './Accordion.scss'
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
interface MoreProps {
  open?: boolean;                   // initial value, default false
  clickable: React.ReactElement;    // the object to be clicked on to open accordion
  unClickable?: React.ReactElement;  // the object to be clicked on to close accordion

}

const Accordion: React.FunctionComponent<MoreProps> = (props) => {

  const [isOpen, changeIsOpen] = React.useState( props.open || false)

  const toggleOpen: () => void = () => {
    changeIsOpen( ! isOpen)
    // console.log("Oooh, someone clicked me")
  }
  return(
    <div>
      {isOpen ? (
        <div>
          <span onClick={toggleOpen} className="md-jww-accordion-clickable">
            {props.unClickable || props.clickable}
          </span>
          <div className="md-jww-accordion-visible-body">
            {props.children}
          </div>
        </div>
      ): (
        <div>
          <span onClick={toggleOpen} className="md-jww-accordion-clickable">
            {props.clickable}
          </span>
        </div>
      )
        
      }
      
      
    </div>
  );
}

export default Accordion;