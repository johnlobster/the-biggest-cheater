import React from 'react';
import {Link} from 'react-router-dom'

// import { MDBBtn, MDBDropdown, MDBDropdownItem, MDBDropdownMenu, MDBDropdownToggle } from "mdb-react-ui-kit";

import Container from '../Container/Container'

import styles from './Header.module.scss'

// interface MoreProps {
//   desktop: boolean
// }

const Header: React.FunctionComponent = () => {

  
  return(
    <div >
      <h1 className={styles.title}>Cheatsheet</h1>


      <Container >
        <div>
          {/* <MDBBtn outline color="primary">
            <div className={styles.homeBox}>
              <Link to="/Home">Home</Link>
            </div>
          </MDBBtn>

          <MDBBtn outline color="primary">
          <span>
            <MDBDropdown outline color="primary">
              <MDBDropdownToggle>
                <div className={styles.homeBox}>
                  Choose a page
                </div>
              </MDBDropdownToggle>
              <MDBDropdownMenu>
                <MDBDropdownItem link>
                  <div className={styles.homeBox}>
                    < Link to="/Page1">Page 1</Link>
                  </div>
                </MDBDropdownItem>
                <MDBDropdownItem link>
                  <div className={styles.homeBox}>
                    <Link to="/Page2">Page 2</Link>
                  </div>
                </MDBDropdownItem>
              </MDBDropdownMenu>
            </MDBDropdown>
          </span>


          </MDBBtn> */}
        </div>
        {/* Dropdown menu using bootstrap from CDN */}
        <div className={styles.buttonBox}>
          <div className="btn-group" role="group" aria-label="Navigation menu">
            <button type="button" className="btn btn-outline-secondary">
              <Link to="/Home"><span className={styles.dropdownTitle}>Home</span></Link>
            </button>
            <div className="btn-group" role="page selection">
              <div className="dropdown">
                <button className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <span className={styles.dropdownTitle}>Choose a page</span>
                </button>
                <ul className="dropdown-menu">
                  <li><h4><Link to="/Page1">Page 1</Link></h4></li>
                  <li><h4><Link to="/Page2">Page 2</Link></h4></li>
                  <li><h4><Link to="/Page3">Page 3</Link></h4></li>

                </ul>
              </div>
            </div>

          </div>
        </div>
        
      </Container>
    </div>
    
  );
}

export default Header;