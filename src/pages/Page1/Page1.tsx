import React from 'react';

import Container from '../../components/Container/Container'
import CheatCard from '../../components/CheatCard/CheatCard'
import { allSheets, SheetData} from '../../sheets/all-sheets'

const mySheets: SheetData = [
  allSheets[2],
  allSheets[3],
  allSheets[1],
  allSheets[4],
  allSheets[0],
]
// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Page1: React.FunctionComponent = (props) => {
  return(
    <div>
      <Container>
        <h1>I am Page full of cool stuff</h1>

        {mySheets.map( (item) => {
          return (
            <React.Fragment>
              <CheatCard>
                <item.reactSheet />
              </CheatCard>
              
            </React.Fragment>
          )
        })}

      </Container>
      
    </div>
  );
}

export default Page1;