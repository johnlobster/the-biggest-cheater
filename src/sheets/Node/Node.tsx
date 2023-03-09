import React from 'react';

import { MDBBtn } from "mdbreact";

import Container from '../../components/Container/Container'
import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion'

import styles from './Node.module.scss'

const boxMe: (list: [string, string]) => React.ReactElement = (list) => {
  return (
    <CGrid row>
      <CGrid xs={12} sm={3} md={3} lg={2}>
        {list[0]}
      </CGrid>
      <CGrid xs={12} sm={9} md={8} lg={6}>
        <pre className={styles.codeBlock2}>
          <div >
            {list[1]}
          </div>
        </pre>
      </CGrid>
    </CGrid>
  )
}

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Node: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>Nodejs</h1>

        <h4>File system</h4>
        import fs from 'fs'
        <CGrid row>
          <CGrid xs={6}>
            Open file (sync)
          </CGrid>
          <CGrid xs={6}>
            const SITEMAP = fs.openSync("../../public.sitemap.xml", "w")
          </CGrid>
        </CGrid>
        <CGrid row>
          <CGrid xs={6}>
            Write to open file (sync)
          </CGrid>
          <CGrid xs={6}>
            fs.appendFileSync(SITEMAP, `Beautiful header`)
          </CGrid>
        </CGrid>
        <CGrid row>
          <CGrid xs={6}>
            Read file (sync)
          </CGrid>
          <CGrid xs={6}>
            {`fs.readFileSync("./page-data.ts", {encoding: "utf8"});`}
          </CGrid>
        </CGrid>
      </Container>
    </div>
  );
}

export default Node;