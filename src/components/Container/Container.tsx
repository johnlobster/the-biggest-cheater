import React, { useEffect } from 'react';

import './Container.scss'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
interface MoreProps {
  fluid?: boolean; // default - width and padding varies with viewport width
  fixed75?: boolean;
  fixed100? : boolean;  
}


const Container: React.FunctionComponent<MoreProps> = (props) => {

  const containerClass = React.useRef("md-jww-fluid")
  useEffect( () => {
    if (props.fluid && (props.fixed100 || props.fixed75)) {
      console.log(`Container: Warning - multiple attributes present, using "fluid"`)
      containerClass.current = "md-jww-fluid"
    } else if ( props.fixed100 && props.fixed75) {
      console.log(`Container: Warning - both fixed100 and fixed75 attributes present, using "fixed100"`)
      containerClass.current = "md-jww-fixed-100"
    } else if ( props.fixed100) {
      containerClass.current = "md-jww-fixed-100"
    } else if (props.fixed75) {
      containerClass.current = "md-jww-fixed-75"
    } else {
      containerClass.current = "md-jww-fluid"
    }
    
  }, [props.fixed100, props.fixed75, props.fluid])

  return(
    
    <React.Fragment>
      
      <div className={containerClass.current}>
        {props.children}
      </div>
      
    </React.Fragment>
  );
}

export default Container;