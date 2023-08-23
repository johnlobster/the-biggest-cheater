import React from 'react';

import SheetContainer from '../../components/SheetContainer/SheetContainer'
// import CGrid from '../../components/CGrid/CGrid'
import CTable from '../../components/CTable/CTable';
import Accordion from '../../components/Accordion/Accordion'
import AccordionButton from '../../components/AccordionButton/AccordionButton'
import CodeBox from '../../components/CodeBox/CodeBox';

import styles from './MySql.module.scss'

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Content

const create = `
USE <database>
INSERT INTO <table> (field1, field2, field3)
VALUES 
("entry1Val1", "entry1Val2", "entry1Val3"),
("entry1Val1", "entry1Val2", "entry1Val3"));
`
const readRecord = `
USE <database>
SELECT * FROM <table> WHERE 
`
const update = `
USE <database>
UPDATE <table> SET <field> = <new value> WHERE 
`
const deleteRecord = `
USE <database>
DELETE FROM <table> WHERE
`

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React component


// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const MySql: React.FunctionComponent = (props) => {
  return(
    <div>
      <SheetContainer>
        <h1>MySQL</h1>

        <h2>CRUD</h2>
        <div className={styles.crudBox}>
          <Accordion
            clickable={
              <AccordionButton>
                <b>C</b>reate
              </AccordionButton>
            }
          >
            <CodeBox codeString={create} />
          </Accordion>
          <Accordion
            clickable={
              <AccordionButton>
                <b>R</b>ead  (SELECT)
              </AccordionButton>
            }
          >
            <CodeBox codeString={readRecord} />
          </Accordion>
          <Accordion
            clickable={
              <AccordionButton>
                <b>U</b>pdate
              </AccordionButton>
            }
          >
            <CodeBox codeString={update} />
          </Accordion>
          <Accordion
            clickable={
              <AccordionButton>
                <b>D</b>elete
              </AccordionButton>
            }
          >
            <CodeBox codeString={deleteRecord} />
            <p>(Deletes the entire record)</p>
          </Accordion>
        </div>
        
        <h4>WHERE - filter records</h4>
        <div>
            <CTable tableDef={[2,8]} tableData={[
              ["Basic", '=, >, <, >=, <=, <> or != for not equal'],
              ["BETWEEN", "Within a range"],
              ["LIKE", "Pattern search"],
            ["IN", "multiple possible values for a field: shorthand for multiple OR conditions"],
            ]} />
            <CodeBox codeString="BETWEEN <value1> AND <value>"/>
            <p>BETWEEN is inclusive and can compare strings, numbers and dates</p>
            <p>
              LIKE operator is a string (quote with \'). It can be used with NOT, AND, OR and has two wild cards
              <ul>
                <li>'_': a single character</li>
                <li> '%': zero, one or multiple characters</li>
              </ul>
            </p>
          <CodeBox codeString='WHERE <field>> IN (<value1>, <value2>);' />
          <CodeBox codeString='WHERE <field> IN (SELECT <select statement>);' />
        </div>

        <h4>Database creation</h4>
        <div>
          
        </div>

        <h4> More information</h4>
        <a href="https://sass-lang.com/documentation">sass/scss official language documentation</a><br />
        <a href="https://www.w3schools.com/mysql/default.asp"> W3 Schools MySql reference pages</a>
      
      </SheetContainer>
      

      
    </div>
  );
}

export default MySql;