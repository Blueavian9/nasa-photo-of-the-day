import React from 'react'
import { Card, CardGroup, CardTitle, CardImg, CardText, Button, CardBody, CardSubtitle } from 'reactstrap';
import './Post.css'

function Post(props) {
  let { explanations, imgArray, title } = props
  // check imgArray, tittle

  function vidCheck(imgArray) {
    const regex = new RegExp('^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$');
    let youtubeCheck;
    youtubeCheck = imgArray.match(regex);

    if (youtubeCheck === null) {
      return <img src={imgArray} alt='pic-or-vid' />
    } else if (youtubeCheck[2] === "www.youtube.com") {
      return <iframe src={imgArray} className='pic-or-vid' title='apod-vid' ></iframe>
    }
  }

  return (
    <CardGroup style={{ justifyContent: 'space-evenly' }}>
      <Card style={{ maxWidth: '22rem', borderRadius: '25px' }}>
        <CardImg
          alt="Card image cap"
          src={imgArray[0]}
          top
          width="10%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {title[0]}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ maxWidth: '22rem' }}>
        <CardImg
          alt="Card image cap"
          src={imgArray[1]}
          top
          width="10%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {title[1]}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This card has supporting text below as a natural lead-in to additional content.
          </CardText>
        </CardBody>
      </Card>
      <Card style={{ maxWidth: '22rem' }}>
        <CardImg
          alt="Card image cap"
          src={imgArray[0]}
          top
          width="10%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {title[0]}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            Card subtitle
          </CardSubtitle>
          <CardText>
            This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
  )
}

export default Post

/*
    <div className='post-parent'>
      <div className='post-box'>
        <p>
          {explanations[0]}
        </p>
      </div>
      <div className='post-box' id='middle-post'>
        <p>
          {explanations[1]}
        </p>
      </div>
      <div className='post-box'>
        <p>
          {explanations[2]}
        </p>
      </div>
    </div>
*/