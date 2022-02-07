import React, { useState, useEffect } from 'react';
import ReactDOM from "react-dom";
import axios from 'axios';
// import { useHistory } from "react-router-dom"
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';

import { Button } from 'primereact/button';


export default function TimeLine() {
  // const history = useHistory();
  const [items, setItems] = useState([]);
/* 
  useEffect(() => {
   getApi()
  }, [])

const getApi = async () => {
  axios.get(`http://localhost:3500/api/items`)
  .then(function (response) {
    setItems(response.data)

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

} */
  
  return (
    <div
      className="App"
      style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
    >
      <h1>CDTN </h1>
      <VerticalTimeline>

        {items.map(item => (
          <VerticalTimelineElement
            key={item.id}
            className="vertical-timeline-element--education"
            date={item.date}
            iconStyle={{ background: "rgb(13, 150, 243)", color: "#fff" }}
          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: item.title }} 
              />
            <h6
              className="vertical-timeline-element-subtitle"
              dangerouslySetInnerHTML={{ __html: item.description }}
            /* <img src={item.image[1]}></img> */

            />
            <Button > More</Button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<TimeLine />, rootElement);
