import React from 'react';

import { MDBBtn } from "mdbreact";

import CGrid from '../../components/CGrid/CGrid'
import Accordion from '../../components/Accordion/Accordion';
import CTable from '../../components/CTable/CTable'
import Container from '../../components/Container/Container'
import CodeClick from '../../components/CodeClick/CodeClick'

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const yarnInfo = [
  ["Add a package", "yarn add <package>", "npm install <package>"],
  ["Add a development only package", "yarn add --dev <package>", "npm install --save-dev <package> | "],
  ["Remove a package", "yarn remove <package>","npm uninstall <package>"],
  ["Update all", "yarn upgrade","npm update"],
  ["Update a package", "yarn upgrade <package>", "npm update <package>"],
  ["Run a command from package.json 'scripts'", "yarn run <script> or yarn start", "npm run <script>"],
  ["Run a command in a temporary environment", "yarn dlx <command>",""],
  ["Get information on a package", "yarn info <package>",""],
  ["Display the reason why a package is needed","yarn why <package>",""],
  ["Install all using package.json", "yarn", "npm install"],
];
const manifestString = 
`{
  "name": "",
  "author": "John Webster",
  "license": "MIT",
  "version": "0.1.0",
  "scripts": {
    "start": "react-scripts start",
    "dev": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "lint": "eslint --quiet \"src/**/*.tsx\" \"src/**/*.ts\" "
  },
  "eslintConfig": {
    "extends": "react-app"
  },
}
`
const Yarn: React.FunctionComponent = (props) => {
  return(
    <React.Fragment>
      <Container fixed100>
        <h1>Yarn and NPM: package managers</h1>
        <h4>Command comparison</h4>
        <CTable tableDef={[4,[4,"code"],[4,"code"]]} tableData={yarnInfo}></CTable>
        <h4>Manifest(<code>package.json</code>)</h4>
        <div>
          <ul>
            <li>name</li>
            <li>version</li>
          </ul>
        </div>
        <h4>Example skeleton package.json"</h4>
        <Accordion
          clickable={
            <MDBBtn outline color="primary">
              package.json example
            </MDBBtn>
          }
        >
          <CodeClick
            other="Usually created automatically by create-react-app"
            codeString={manifestString}>
          </CodeClick>
        </Accordion>
        
        <h4> <a href="https://yarnpkg.com/">Link to Yarn documentation</a></h4>
      </Container>
    
    </React.Fragment>
  );
}

export default Yarn;