import React from 'react';
import ReactDOM from "react-dom";
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import events from "./events.json";


export default function TimeLine() {

  return (
    <div
      className="App"
      style={{ background: "#333", fontFamily: "Trebuchet Ms" }}
    >
      <h1>CDTN </h1>
      <VerticalTimeline>
        {events.map((event, i) => (
          <VerticalTimelineElement
            key={i}
            className="vertical-timeline-element--education"
            date={event.date}
            iconStyle={{ background: "rgb(13, 150, 243)", color: "#fff" }}
          >
            <h3
              className="vertical-timeline-element-title"
              dangerouslySetInnerHTML={{ __html: event.event }}
            />
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
}


const rootElement = document.getElementById("root");
ReactDOM.render(<TimeLine />, rootElement);
