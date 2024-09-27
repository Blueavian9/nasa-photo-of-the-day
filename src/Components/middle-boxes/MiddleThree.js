import React from 'react';
import './MiddleThree.css';

function MiddleThree(props) {
  const { imgArray, title } = props;

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
    <div className='middle-parent'>
      <div className='middle-boxes'>
        <h3>{title[0]}</h3>
        {vidCheck(imgArray[0])}
      </div>
      <div className='middle-boxes'>
        <h3>{title[1]}</h3>
        {vidCheck(imgArray[1])}
      </div>
      <div className='middle-boxes'>
        <h3>{title[2]}</h3>
        {vidCheck(imgArray[2])}
      </div>
    </div>
  )
}

export default MiddleThree