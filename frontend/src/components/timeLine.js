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



export default function TimeLine() {
  // const history = useHistory();
  const [items, setItems] = useState([]);
  // const [globalFilter, setGlobalFilter] = useState(null);

  const IMAGE_STYLES = { Maxwidth: 250, height: 200 };

  useEffect(() => {
    return () => {
      // async () => {
      axios.get(`http://localhost:3500/api/items`)
        .then(function (response) {
          setItems(response.data)

        })
        .catch(function (error) {
          console.log(error);
        })

    }


  });



  const correctDate = (today) => {

    const date1 = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    return date1;
  }
  
  const yourDate = new Date();   const NewDate = moment(yourDate, 'DD-MM-YYYY')   ; 
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
            date={item.date}
            iconStyle={{ background: "#41d3d3", color: "#fff", textDecoration: "6546" }}

          >
            <h2
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: item.title }}

            />
            <h6
              className="vertical-timeline-element-subtitle"
              // dangerouslySetInnerHTML={{ __html: item.description + " - in  "  }}
              // dangerouslySetInnerHTML={{ __html: item.description + " - in " + item.takenDate.format("DD/MM/YYYY") }}
              {`${item.takenDate.getDate()}-${item.takenDate.getMonth() + 1}-${item.takenDate.getFullYear()}`;}
              //  {correctDate(item.takenDate)}
            />
            <img src={item.fileUrl} style={IMAGE_STYLES} ></img>
            <br></br>
            <Button
              style={{ background: "#21b1b1", color: "#000000", margin: "10" }}
            > More</Button>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>

    </div >
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<TimeLine />, rootElement);
