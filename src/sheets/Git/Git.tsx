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

const gitLifeCycle: string[][]= [
  ["create new repo from github or other", "git clone <url>"],
  ["list files that have changed, identify current branch","git status"],
  ["identify files before commit","git add <file>"],
  ["add all changed and new files", "git add -A"],
  ["commit files to current branch (description required)", "git commit -m \"description\""],
  ["add and commit files (except for new files)","git commit -am \"description\""],
  ["remove a file", "git rm"],
  ["upload to remote repo", "git push"],
  ["update current branch from remote repo", "git pull"],
  ["list branches (--list optional)", "git branch [--list]"],
  ["switch to another branch", "git checkout <new branch>"],
  ["create a new branch (without switching to it)", "git branch <new branch name>"],
  ["merge another branch into current", "git merge <branch>"],
];

const gitIgnoreExample =
`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.env
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

/github-repo

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`
const Git: React.FunctionComponent = (props) => {
  return(
    <React.Fragment>
      <Container fixed100>
        <h1>Git: version control</h1>
        <h4>Basic usage</h4>
        <CTable tableDef={[8,[4,"code"]]} tableData={gitLifeCycle}></CTable>

        <h4>Example .gitignore</h4>
        <Accordion
          clickable={
            <MDBBtn outline color="primary">
              .gitignore example
            </MDBBtn>
          }
        >
          <CodeClick
            codeString={gitIgnoreExample}>
          </CodeClick>
        </Accordion>
      </Container>
      
    </React.Fragment>
  );
}

export default Git;

