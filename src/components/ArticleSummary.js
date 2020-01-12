import Media from "react-bootstrap/Media";
import Badge from 'react-bootstrap/Badge'
import React from "react";
import Moment from 'react-moment'
import parse from "html-react-parser"
import image1 from "../images/devotion-pic.png"
import image2 from "../images/Open-Bible-Medium.jpg"
import image3 from "../images/Woman-reading-bible-prayer_si.jpg"

export const summaryFromBody = (s,sLen=280) => {
    const regex = /(<([^>]+)>)|\"|“/ig;

    s = s.replace(regex, ''); //remove html tags

    s = s.substr(0,sLen);
    s = s.substr(0, s.lastIndexOf(' '));
    return s + '...' //.substr(0, 1).toUpperCase() + s.substr(1,250) //.toLowerCase();

}

export const Parsedhtml = ({s}) => {
    return parse(s);
}

export const ImageSource = () => {
    const defaultSrc = [
        image1,
        image2,
        //"/images/person-reading-bible.jpg",
        image3
    ];
    return defaultSrc[Math.floor(defaultSrc.length * Math.random())]
}

const ArticleSummary = ({summary}) => {

    const {fieldImage, body, imgPct, dtOffImage, publishDate, entityCreated} = summary;

    return (
        <Media className="pt-2 pb-2" style={{borderTop: '1px dashed #ddd'}}>
            <div className="align-self-start mr-3" style={{width: imgPct || '20%' }}>
                <img
                    style={{width: '100%' }}
                    src={fieldImage && fieldImage.url || ImageSource()}
                    alt={fieldImage && fieldImage.alt || ''}
                    className='mb-1'
                />
                <br/>

                {!dtOffImage && <p className={'pt-1'} style={{fontWeight: 'bold'}}>                    
                    <Badge variant="secondary">
                        <Moment format='DD MMM YYYY'>
                            {publishDate && publishDate.value || entityCreated}
                        </Moment>
                    </Badge>
                </p>}
            </div>
            <Media.Body >
                <h6 style={{textTransform: 'uppercase' }}>
                    <a href={summary.link.path}>
                        {summary.title}
                    </a>
                </h6>
                {dtOffImage && <p className={'pt-0'} style={{fontSize: '0.8rem', fontWeight: 'bold'}}>
                    <Moment format='ddd, D MMM YYYY'>{publishDate && publishDate.value || entityCreated}</Moment>
                </p>}

                <div style={{ textAlign: 'justify' }}>
                  {body.summaryProcessed && <Parsedhtml s ={ body.summaryProcessed}/> || summaryFromBody(body.processed) }
                </div>

            </Media.Body>
        </Media>
    )
}

export default ArticleSummary;