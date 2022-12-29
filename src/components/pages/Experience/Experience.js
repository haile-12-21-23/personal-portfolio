import React from 'react';
import "./Experience.css"
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School"
import WorkIcon from "@material-ui/icons/Work"
function Experience() {
    return (
        <div className="experience">
            <VerticalTimeline lineColor="#3e497a">
                <VerticalTimelineElement className="vertical-timeline-element--eduction" date="2014-2016" iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />} >
                    <h3 className="vertical-timeline-element-title">My High School is Dembecha Preparatory  Senior and Secondary School   </h3>
                    <p>High School Education Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016 - 2018"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        My Preparatory School is Dembecha Preparatory  Senior and Secondary School
                    </h3>



                    <p> Secondary and Preparatory Eduction Completed</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2018 - 2022"
                    iconStyle={{ background: "#3e497a", color: "#fff" }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        My  University, Debre Tabor University, Debre Tabor, Amhara, Ethiopia
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Bachelor's Degree
                    </h4>
                    <p>Computer Science</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2022 - present"
                    iconStyle={{ background: "#e9d35b", color: "#fff" }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">
                        Software Engineer-FetaTech Plc.
                    </h3>
                    <h4 className="vertical-timeline-element-subtitle">
                        Seattle, USA
                    </h4>
                    <p>
                        Back-End developer with NodeJs and Mobile App developer with Flutter.
                    </p>
                </VerticalTimelineElement>


            </VerticalTimeline>
        </div>
    );
}

export default Experience
