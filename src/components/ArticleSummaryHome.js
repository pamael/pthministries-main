import Media from "react-bootstrap/Media";
import React from "react";
import Moment from 'react-moment'
import { summaryFromBody } from './ArticleSummary'

const ArticleSummaryHome = ({summary}) => {

    const {fieldImage, body} = summary;

    const defaultSrc = [
        "/images/devotion-pic.png",
        "/images/Open-Bible-Medium.jpg",
        //"/images/person-reading-bible.jpg",
        "/images/Woman-reading-bible-prayer_si.jpg"
    ];
    let src = defaultSrc[Math.floor(defaultSrc.length * Math.random())]
    let imgTitle="";

    if (fieldImage) {
        src = fieldImage.url;
        imgTitle = fieldImage.alt;
    }
    return (
        <Media className="pt-2" style={{borderTop: '1px dashed #ddd'}}>
            <div className="align-self-start mr-3" style={{ width: '30%'}}>
                <img style={{ marginBottom : '0.5em', width: '100%'}}
                    src={src}
                    alt={imgTitle}
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
                    <a href={summary.link.path}>
                        {summary.title}
                    </a>
                </h6>
                <div style={{ fontSize: '0.8em', textAlign: 'justify'}}>
                    {body.summaryProcessed ? <p>{summaryFromBody(body.summaryProcessed,150)}</p> : <p>{summaryFromBody(body.processed,150)}</p>}
                </div>
            </Media.Body>
        </Media>
    )
}

export default ArticleSummaryHome;