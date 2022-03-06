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
import { InputText } from 'primereact/inputtext';
import Cd from './cd';


export default function TimeLine() {
  // const history = useHistory();
  const [items, setItems] = useState([]);
  // const [globalFilter, setGlobalFilter] = useState(null);
  const items1 = [
    {
      "takenDate": "2022-03-06T10:08:43.191Z",
      "_id": "61e07abb0bfa835972d66b45",
      "tags": [
        "fvdf"
      ],
      "figures": [],
      "title": "השורשים שלי",
      "description": "אילן  מפואר",
      "createdDate": "2022-01-13",
      "__v": 0,
      "fileUrl": "https://cdn.pixabay.com/photo/2018/04/03/20/29/forest-3287976__340.jpg",
      "locations": []
    },
    {
      "takenDate": "2022-03-06T10:08:43.191Z",
      "_id": "61e07ac10bfa835972d66b47",
      "tags": [],
      "figures": [],
      "title": "חתונת סבא וסבתא מרוקו",
      "description": "קיץ תרצא",
      "createdDate": "1931-01-15",
      "__v": 0,
      "fileUrl": "https://cdn.pixabay.com/photo/2021/11/08/23/29/nature-6780354__340.jpg",
      "locations": []
    },
    {
      "takenDate": "2022-03-06T10:08:43.191Z",
      "_id": "61e07d6f3f645c9a948be130",
      "tags": [
        "fvdf"
      ],
      "figures": [],
      "title": "בר מצוה לשלמה",
      "description": "חורף מושלג ",
      "createdDate": "2017-01-13",
      "__v": 0,
      "fileUrl": "https://cdn.pixabay.com/photo/2020/02/08/14/36/trees-4830285__340.jpg",
      "locations": []
    },
    {
      "takenDate": "2022-03-06T10:08:43.191Z",
      "_id": "61e082f9d9db6a98b9410b7a",
      "tags": [
        "fvdf",
        "dsvd"
      ],
      "figures": [],
      "title": "מסע שורשים בטבע",
      "description": " נסענו כל האחים לטיול ",
      "createdDate": "2018-01-13",
      "__v": 0,
      "fileUrl": "https://yefe.co.il/wp-content/uploads/2020/04/%D7%90%D7%97%D7%93-%D7%9E%D7%A2%D7%99%D7%A8-216x326.gif",
      "locations": []
    },
  
  ]
  const IMAGE_STYLES = { Maxwidth: 250, height: 200 };

  // useEffect(() => {
  //   return () => {
  //     // async () => {
  //     axios.get(`http://localhost:3500/api/items`)
  //       .then(function (response) {
  //         setItems(response.data)

  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })
  //   }

  // });
  useEffect(() => {
    setItems(items1);
  })


  const correctDate = (today) => {

    const date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date1;
  }

  // const yourDate = new Date();   const NewDate = moment(yourDate, 'DD-MM-YYYY')   ; 
  return (

    <div
      className="App"
      style={{ background: "#eeeeee", fontFamily: "Indie Flower Ms" }}
    >
      {/* <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText type="search" onInput={(e) => setGlobalFilter(e.target.value)} placeholder="Search..." />
      </span> */}
      <h1 style={{ fontFamily: "Indie Flower" }}>TIME LINE </h1>
      <VerticalTimeline
      // globalFilter={globalFilter}

      >

        {items.map(item => (
          <VerticalTimelineElement
            key={item.id}

            className="vertical-timeline-element--work"
            date={item.createdDate}
            iconStyle={{ background: "#41d3d3", color: "#fff", textDecoration: "6546" }}

          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: item.title }}

            />
            <h6
              className="vertical-timeline-element-subtitle"
            dangerouslySetInnerHTML={{ __html: item.description  }}
            //  {correctDate(item.takenDate)}
            />
            <img src={item.fileUrl} style={IMAGE_STYLES} ></img>
            <br></br>
            <Button
              style={{ background: "#21b1b1", color: "#000000", marginTop: "10" }}
            > More</Button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      {/* <Cd  ></Cd> */}

    </div >
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TimeLine />, rootElement);