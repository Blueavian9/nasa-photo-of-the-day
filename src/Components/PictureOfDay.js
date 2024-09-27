import React from 'react'
import './PictureOfDay.css'
import DropDown from "./drop-down/DropDown";

function pictureOfDay(props) {
    const { src, explanation, title, date, changeMain } = props;

    const regex = new RegExp('^(https?\:\/\/)?(www\.youtube\.com|youtu\.be)\/.+$');
    const youtubeCheck = src.match(regex);

    console.log('youtubeCheck: ', youtubeCheck);

    function vidCheck() {
        if (youtubeCheck === null) {
            return <img src={src} alt='apod-img' id='apod-img' />
        } else if (youtubeCheck[2] === "www.youtube.com") {
            return <iframe src={src} className='youtube-of-day' title='apod-vid' ></iframe>
        }
    }

    console.log('pictureOfDay: ', date);
    return (
        <div className='picture-of-day-parent'>
            <div className='apod-1'>
                {vidCheck()}
            </div>
            <div className='apod-2'>
                <DropDown date={date} changeMain={changeMain} />
            </div>
            <div className='apod-3'>
                <h1>{title}</h1>
                <div className='top-paragraph-div'>
                    <p>{explanation}</p>
                </div>
            </div>
        </div>
    )
}

export default pictureOfDay