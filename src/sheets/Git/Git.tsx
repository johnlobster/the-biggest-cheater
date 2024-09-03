import React from 'react';

// import { MDBBtn } from "mdbreact";

import CodeClick from '../../components/CodeClick/CodeClick'
// import CGrid from '../../components/CGrid/CGrid'
import CTable from '../../components/CTable/CTable'
import SheetContainer from '../../components/SheetContainer/SheetContainer'
import Accordion from '../../components/Accordion/Accordion';
import AccordionButton from '../../components/AccordionButton/AccordionButton'


// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const gitLifeCycle: string[][]= [
  ["create new repo from github or other (can use github url e.g. https://github.com/johnlobster/my-repo.git", "git clone <url>"],
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
const Git: React.FunctionComponent = () => {
  return(
    <React.Fragment>
      <SheetContainer>
        <h1>Git: version control</h1>
        <h4>Basic usage</h4>
        <CTable tableDef={[4,[4,"code"]]} tableData={[
          ["Add all files, new and changed","git add -A"],
          ["Check list of files","git status"],
          ["Commit","git commit -m \"Meaningful message\""],
          ["push to remote repo","git push"]
          ]} />
        <h4>Git lifecycle</h4>
        <CTable tableDef={[4,[4,"code"]]} tableData={gitLifeCycle}></CTable>

        <h4>Example .gitignore</h4>
        <Accordion
          clickable={
            <AccordionButton>.gitignore example</AccordionButton>
          }
        >
          <CodeClick
            codeString={gitIgnoreExample}>
          </CodeClick>
        </Accordion>

        <h4>github authentication</h4>
        <Accordion clickable={
          <AccordionButton>more on authentication</AccordionButton>
        }
        >
          <div>
            <p>Github has changed how authentication works - can now only log onto github using 2FA, 
              so repos previously linked using https cannot now be accessed</p>

            <h5>Working method</h5>
            <ul>
              <li>(assuming github cli previously installed)</li>
              <li>In windows shell <code>gh auth login</code> Log in as prompted</li>
              <li>In windows shell <code>gh auth token</code> Copy the token</li>
              <li>From bash prompt, <code>git push </code>Paste token when prompted for password</li>
            </ul>
            <h5>caching password</h5>
            <ul>
              <li>From bash prompt <code>git config --global credential.helper wincred</code></li>
              <li>push entering password as above</li>
              <li>should not have to enter password again</li>
            </ul>
          </div>

        </Accordion>

        <h4>github: link to local directory</h4>
        <CTable tableDef={[4, [4, "code"]]} tableData={[
          ["Initialize directory", "git init"],
          ["Check in files as normal", ""],
          ["link to remote", "git remote add origin 'https://github.com/johnlobster/python-examples.git'"],
          ["push to remote repo", "git push --set-upstream origin master"]
        ]} />
        <p>URL is available on github - click code button (this is liable to change)</p>
        <p>Only need to set-upstream one time</p>
      </SheetContainer>
      
    </React.Fragment>
  );
}

export default Git;

