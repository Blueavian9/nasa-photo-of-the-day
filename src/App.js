<<<<<<< HEAD
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import NavbarNew from "./Components/NavbarNew";
import Footer from "./Components/footer/Footer";
import PictureOfDay from "./Components/PictureOfDay";
import MiddleThree from "./Components/middle-boxes/MiddleThree";
import Post from "./Components/posts/Post";
import 'bootstrap/dist/css/bootstrap.min.css';
import EmergencyPrompt from './Components/emergency-prompt/EmergencyPrompt';
import { Alert, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import "./App.css";

function App() {

  const [apod, setApod] = useState([]);
  const [apodMain, setApodMain] = useState([]);
  const [Asteroids, setAsteroids] = useState([]);
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, '0');
  var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  var yyyy = today.getFullYear();
  today = yyyy + '-' + mm + '-' + dd;

  const [todaysDate, setTodaysDate] = useState(today);

  const urlToday = `https://api.nasa.gov/planetary/apod?date=${todaysDate}&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`;
  const url = `https://api.nasa.gov/planetary/apod?start_date=2022-05-24&end_date=2022-05-30&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`;
  const urlAsteroids = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${today}&end_date=${today}&api_key=AgviLJFwUuAOU5MIUkxa0OCdj6bpCnRWwDOA4WsO`;

  console.log('ReactStrap: ', )

  useEffect(() => {
    axios.get(urlAsteroids)
      .then(obj => {
        setAsteroids(obj.data);
        console.log('obj3: ', obj.data);
      })
      .catch(error => {
        console.log('fail3: ', error);
      })
  }, []);

  useEffect(() => {
    axios.get(urlToday)
      .then(obj => {
        setApodMain(obj.data);
        console.log('change2: ', apodMain);
        console.log('obj2: ', obj.data);
      })
      .catch(error => {
        console.log('fail2: ', error);
      })
  }, [todaysDate]);

  useEffect(() => {
    axios.get(url)
      .then(obj => {
        setApod(obj.data);
        console.log('obj1: ', obj.data);
      })
      .catch(error => {
        console.log('fail1: ', error);
      })
  }, []);

  function changeMain(event) {
    const eventArray = event.target.value.split("");
    let arrayReturn = []
    console.log(" WORKING!!!!!");

    for (let index = 0; index < eventArray.length; index++) {
      switch (index) {
        case 0:
          arrayReturn.push(eventArray[6]);
          break;
        case 1:
          arrayReturn.push(eventArray[7]);
          break;
        case 2:
          arrayReturn.push(eventArray[8]);
          break;
        case 3:
          arrayReturn.push(eventArray[9]);
          break;
        case 5:
          arrayReturn.push(eventArray[0]);
          break;
        case 6:
          arrayReturn.push(eventArray[1]);
          break;
        case 8:
          arrayReturn.push(eventArray[3]);
          break;
        case 9:
          arrayReturn.push(eventArray[4]);
          break;
        default:
          arrayReturn.push('-');
          break;
      }
    }

    setTodaysDate(arrayReturn.join(''));
  }


  if (!apod[0]) {
    return (
      <div className="App">
        <NavbarNew />
        <h3>Loading...</h3>
        <h3>Loading...</h3>
        <h3>Loading...</h3>
        <div className="img-cointainer">
        </div>
        <p>
          Read through the instructions in the README.md file to build your NASA
          app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        </p>
        <Footer />
      </div>
    )
  } else {
    return (
      <div className="App">
        <NavbarNew changeMain={changeMain}/>
        <PictureOfDay
          src={apodMain.url}
          explanation={apodMain.explanation}
          title={apodMain.title}
          date={today}
          changeMain={changeMain}
        />
        <Post
          explanations={[
            apod[apod.length - 4].explanation,
            apod[apod.length - 3].explanation,
            apod[apod.length - 2].explanation,
            
          ]} 
          title={[
            apod[apod.length - 4].title,
            apod[apod.length - 3].title,
            apod[apod.length - 2].title
          ]}
          imgArray={[
            apod[apod.length - 4].url,
            apod[apod.length - 3].url,
            apod[apod.length - 2].url
          ]}
          />
        <div className="img-cointainer">
        </div>
        <div>
          <Alert>
            <h4 className="alert-heading">
              Well done!
            </h4>
            <p>
              Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.
            </p>
            <hr />
            <p className="mb-0">
              Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
          </Alert>
        </div>
        <EmergencyPrompt />
        <Footer />

        <ButtonDropdown
  toggle={function noRefCheck(){}}
>
  <DropdownToggle caret>
    Button Dropdown
  </DropdownToggle>
  <DropdownMenu>
    <DropdownItem header>
      Header
    </DropdownItem>
    <DropdownItem disabled>
      Action
    </DropdownItem>
    <DropdownItem>
      Another Action
    </DropdownItem>
    <DropdownItem divider />
    <DropdownItem>
      Another Action
    </DropdownItem>
  </DropdownMenu>
</ButtonDropdown>

      </div>
    );
  }
>>>>>>> 55da715 (7/21/2022)
}

export default App;
