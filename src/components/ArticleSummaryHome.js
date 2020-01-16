import Media from "react-bootstrap/Media";
import React from "react";
import Moment from 'react-moment'
import { summaryFromBody, ImageSource } from './ArticleSummary'
import { Link as GLink } from "gatsby";

const ArticleSummaryHome = ({summary}) => {

    const {fieldImage, body} = summary;

    return (
        <Media className="pt-2" style={{borderTop: '1px dashed #ddd'}}>
            <div className="align-self-start mr-3" style={{ width: '30%'}}>
                <img
                    style={{width: '100%' }}
                    src={(fieldImage && fieldImage.url) || ImageSource()}
                    alt={(fieldImage && fieldImage.alt) || ''}
                    className='mb-1'
                />
                <br/>
                {summary.fieldTags.map(({tags, nid })=> 
                    <span key={nid } style={{textTransform: 'uppercase', color: '#aaa', fontWeight: 'bold', fontSize: '0.8em'}}>
                        {tags.name}
                    </span>
                )}

                <p className={'pt-2'} style={{fontSize: '0.8rem', fontWeight: 'bold'}}>
                    <Moment format='DD MMM YYYY'>
                        {summary.publishDate.value}
                    </Moment>
                </p>
            </div>
            <Media.Body >
                <h6 style={{textTransform: 'uppercase', marginBottom: '0.5em' }}>
                    <GLink to={`/articles/${summary.uuid}`}>
                        {summary.title}
                    </GLink>
                </h6>
                <div style={{ fontSize: '0.8em', textAlign: 'justify'}}>
                    {body.summaryProcessed ? <p>{summaryFromBody(body.summaryProcessed,150)}</p> : <p>{summaryFromBody(body.processed,150)}</p>}
                </div>
            </Media.Body>
        </Media>
    )
}

export default ArticleSummaryHome;