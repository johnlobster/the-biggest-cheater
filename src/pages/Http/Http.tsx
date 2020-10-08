import React from 'react';

import { MDBBtn } from "mdbreact";

import Accordion from '../../components/Accordion/Accordion'

import styles from './Http.module.scss'

const successAll = `
        200 OK
        201 Created
        202 Accepted
        203 Non-Authoritative Information
        204 No Content
        205 Reset Content
        206 Partial Content
        207 Multi-Status (WebDAV)
        208 Already Reported (WebDAV)
        226 IM Used
`
const successCommon = `
        200 OK
        201 Created
        204 No content
`

type codeType = [string, string][]

const boxIt: (list: string) => codeType = (list) => {
  // let m= list.matchAll(/\b(\d\d\d)\s+(.*)\b/g)
  // m = Array.from(m)
  // m.map((item) => {
  //   outList.push([item[0], item[1]])
  // })
  // if (m) {
  //   const outList: codeType = []
    
  //   return outList
  // } else {
  //   return []
  // }

  const list1 = list.match(/\b(\d\d\d\s+.*)\b/g)

  if (list1) {
    const outList: codeType = []
    list1.map((item) => {
      console.log(item)
      const m = item.match(/(\d\d\d)\s+(.*)$/)
      if (m) {
        console.log(`m0 ${m[0]} m1 ${m[1]} m2 ${m[2]}`)
        outList.push([m[1], m[2]])
      }
    })
    return outList
  } else {
    return []
  }
}

// add more props 
// add <MoreProps> to type FunctionComponent (adds typescript generic)
// interface MoreProps {
// }

const Http: React.FunctionComponent = (props) => {
  return(
    <div>
      <h1>Http return codes</h1>

      <h4> 200: Success</h4>

      { boxIt(successCommon).map( (item, index) => {
        return (
          <div key={index} className={styles.codeBox}>
            <div>
              {item[0]}
            </div> 
            <div>
              {item[1]}
            </div>
          </div>
        )
      })}

      <Accordion 
        clickable={
          <MDBBtn color="secondary">
            See all 200 codes
          </MDBBtn>
        }
      >
        {/* {boxIt(successAll).map((item, index) => {
          return (
            <div key={index}>{item}</div>
          )
        })} */}

      </Accordion>

      <h4> 300: Redirect</h4>

      304 Not Modified

      <Accordion
        clickable={
          <MDBBtn color="secondary">
            See all 300 codes
          </MDBBtn>
        }
      >
        300 Multiple Choices
        301 Moved Permanently
        302 Found
        303 See Other
        304 Not Modified
        305 Use Proxy
        306 (Unused)
        307 Temporary Redirect
        308 Permanent Redirect (experimental)
      </Accordion>

      <h4> 400: Client error</h4>

      401 Unauthorized
      403 Forbidden
      404 Not Found
      409 Conflict

      <Accordion
        clickable={
          <MDBBtn color="secondary">
            See all 400 codes
          </MDBBtn>
        }
      >
        400 Bad Request
        401 Unauthorized
        402 Payment Required
        403 Forbidden
        404 Not Found
        405 Method Not Allowed
        406 Not Acceptable
        407 Proxy Authentication Required
        408 Request Timeout
        409 Conflict
        410 Gone
        411 Length Required
        412 Precondition Failed
        413 Request Entity Too Large
        414 Request-URI Too Long
        415 Unsupported Media Type
        416 Requested Range Not Satisfiable
        417 Expectation Failed
        418 I'm a teapot (RFC 2324)
        420 Enhance Your Calm (Twitter)
        422 Unprocessable Entity (WebDAV)
        423 Locked (WebDAV)
        424 Failed Dependency (WebDAV)
        425 Reserved for WebDAV
        426 Upgrade Required
        428 Precondition Required
        429 Too Many Requests
        431 Request Header Fields Too Large
        444 No Response (Nginx)
        449 Retry With (Microsoft)
        450 Blocked by Windows Parental Controls (Microsoft)
        451 Unavailable For Legal Reasons
        499 Client Closed Request (Nginx)
      </Accordion>

      <h4> 500: Server Error</h4>

      500 Internal Server Error

      <Accordion
        clickable={
          <MDBBtn color="secondary">
            See all 500 codes
          </MDBBtn>
        }
      >
        500 Internal Server Error
        501 Not Implemented
        502 Bad Gateway
        503 Service Unavailable
        504 Gateway Timeout
        505 HTTP Version Not Supported
        506 Variant Also Negotiates (Experimental)
        507 Insufficient Storage (WebDAV)
        508 Loop Detected (WebDAV)
        509 Bandwidth Limit Exceeded (Apache)
        510 Not Extended
        511 Network Authentication Required 

      </Accordion>

      <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/Status">
        MDN full documentation
      </a>

    </div>
  );
}

export default Http;