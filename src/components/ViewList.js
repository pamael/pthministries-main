import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import VIEW_QUERY from '../GraphQueries/VIEW_QUERY'
import Moment from 'react-moment'
import { summaryFromBody, Parsedhtml } from './ArticleSummary';

export const SpacerH2 = () => (
  <h2 className="page-title title d-none d-md-block">&nbsp;</h2>
);

export default ({offset=0, limit=1, tags='', notags='', dspStyle=0}) => {

  const { data } = useQuery(VIEW_QUERY, { variables: {
    limit: limit, 
    offset: offset,
    tags: tags,
    notags: notags 
  }});

  const DisplayStyles = ({summary}) => (
    [
      <DisplaySmallImgLeft summary={summary} />,
      <DisplayMediumImgLeft summary={summary} />,
      <DisplayTitle summary={summary} />
    ][dspStyle]
  );

  return (
    <React.Fragment> 
      {data && data.nodeQuery && data.nodeQuery.entities.length > 0 && 
        <Col style = {{border: '1px solid #d0d0d0'}} className={'pt-2'} >              
           {data.nodeQuery.entities.map((summary, index) => (
             <DisplayStyles summary={summary} />
           ))}
        </Col>
      }
    </React.Fragment> 
  );
}

export const DisplaySmallImgLeft = ({summary}) => {

  return (
    <React.Fragment>
      <Row key={summary.nid}>                
        <Col className={"pb-3"}>        
          <img
              width={60}
              src={(summary.fieldImage && summary.fieldImage.src) || "/images/devotion-pic.png"}
              alt={(summary.fieldImage && summary.fieldImage.alt) || ''}
              className={'mr-2 mb-1 float-left'}
          />
          <h6 style={{textTransform: 'uppercase' }}>
              <a href={summary.link.path}>
                  {summary.title}
              </a>
          </h6>
          <p className={'pt-0'} style={{fontSize: '0.9rem', fontWeight: 'bold'}}>
              <Moment format='ddd, D MMM YYYY'>{summary.publishDate && summary.publishDate.value || summary.entityCreated}</Moment>
          </p>        
          {<p style={{fontSize: '0.9rem', textAlign: 'justify'}}>{summaryFromBody(summary.body.summaryProcessed || summary.body.processed, 200)}</p>}
        </Col>
        
      </Row>
    </React.Fragment>
  )
}

export const DisplayMediumImgLeft = ({summary}) => {

  return (
    <React.Fragment>
      <Row key={summary.nid}>                
        <Col>
          <img
              style={{width: '100%', marginBottom: '0.5em'  }}
              src={summary.fieldImage.url}
              alt={summary.fieldImage.alt}
          />
          
          <h6>
              <a href={summary.link.path}>
                  {summary.title}
              </a>
          </h6>

          <div style={{fontSize: '0.9rem', textAlign: 'justify' }}>
            <Parsedhtml s={summary.body.summaryProcessed} />
          </div>                
        </Col>
        
      </Row>

    </React.Fragment>
  )
}

export const DisplayTitle = ({summary}) => {

  return (
    <React.Fragment>
      <Row key={summary.nid}>                
      <Col>
        <h6 className="pb-0 mb-1">
            <a href={summary.link.path}>
                {summary.title}
            </a>
        </h6>
        <p className={'pt-0 mb-2'} style={{fontSize: '0.8rem'}}>
          <Moment fromNow>{summary.publishDate && summary.publishDate.value || summary.entityCreated}</Moment>
        </p>               
      </Col>        
      </Row>
    </React.Fragment>
  )
}


